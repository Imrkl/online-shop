import { Link } from "react-router-dom";
import useCartStore from "../store/useCartStore";

function ProductCard({ product }) {

  const discountPrice =
    product.price -
    (product.price *
      product.discountPercentage) /
      100;

    const { addToCart } = useCartStore();

  return (
    <Link className="card" to={`/product/${product.id}`}>
      <img
        src={product.thumbnail}
        alt={product.title}
      />

      <div className="card-body">
        <h3>{product.title}</h3>

        <p>{product.description}</p>

        <div className="price-box">
          <span className="old-price">
            ${product.price}
          </span>

          <span className="new-price">
            ${discountPrice.toFixed(2)}
          </span>
        </div>

        <p>
          Stock: {product.stock}
        </p>
      </div>

    <button className="add-btn" onClick={(e) => {
      e.preventDefault();
      addToCart(product);
    }}
    >
      В корзину
    </button>
    </Link>
  );
}

export default ProductCard;