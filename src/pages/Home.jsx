import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import Pagination from "../components/Pagination";
import useProductStore from "../store/useProductStore";
import Cart from "../components/Cart";
import CartDrawer from "../components/CartDrawer";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const {
    products,
    total,
    loading,
    fetchProducts
  } = useProductStore();

  const [page, setPage] =
    useState(0);

  const [sort, setSort] =
    useState("");

  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchProducts(page);
  }, [page]);

  const sortedProducts =
    [...products].sort((a, b) => {

      switch (sort) {

        case "title":
          return a.title.localeCompare(
            b.title
          );

        case "price":
          return a.price - b.price;

        case "stock":
          return a.stock - b.stock;

        default:
          return 0;
      }
    });

    const filteredProducts = sortedProducts.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
  <div className="layout">

    <aside className="sidebar">

      <div className="logo">
        <h2>Tech Store</h2>
      </div>

      <div className="menu-section">

        <p className="menu-title">
          Сортировка
        </p>

        <select
          className="sort-select"
          value={sort}
          onChange={(e) =>
            setSort(e.target.value)
          }
        >
          <option value="">
            Без сортировки
          </option>

          <option value="title">
            По названию
          </option>

          <option value="price">
            По цене
          </option>

          <option value="stock">
            По количеству
          </option>

        </select>

      </div>

      <div className="menu-section">
        <p>
          📦 Товаров:
          {" "}
          {total}
        </p>

        <p>
          📄 Страница:
          {" "}
          {page + 1}
        </p>
      </div>

    </aside>

    <main className="content">

      <div className="topbar">
      <input
        type="text"
        placeholder="Поиск товара..."
        value={search}
        onChange={(e) =>
          setSearch(
            e.target.value
          )
        } 
        className="search-input"
      />
    <Cart setIsOpen={setIsOpen}/>
</div>

      {loading ? (
        <h2>Загрузка...</h2>
      ) : (
        <ProductList
          products={filteredProducts}
        />
      )}

      <Pagination
        page={page}
        setPage={setPage}
        pageCount={
          Math.ceil(total / 12)
        }
      />

      <CartDrawer
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

    </main>

  </div>
);
}

export default Home;