import useCartStore from "../store/useCartStore";

function CartDrawer({
  isOpen,
  setIsOpen
}) {
  const {
    cart,
    removeFromCart,
    clearCart
  } = useCartStore();

  const totalPrice =
    cart.reduce(
      (sum, item) =>
        sum + item.price,
      0
    );

  return (
    <div
      className={
        isOpen
          ? "cart-drawer open"
          : "cart-drawer"
      }
    >
      <div className="cart-header">

        <h2>Корзина</h2>

        <button
          onClick={() =>
            setIsOpen(false)
          }
        >
          ✕
        </button>

      </div>

      {cart.length === 0 ? (
        <p>
          Корзина пуста
        </p>
      ) : (
        <>
          <div className="cart-items">

            {cart.map((item) => (
              <div
                key={item.id}
                className="cart-item"
              >
                <img
                  src={
                    item.thumbnail
                  }
                  alt={item.title}
                />

                <div>
                  <h4>
                    {item.title}
                  </h4>

                  <p>
                    $
                    {item.price}
                  </p>
                </div>

                <button
                  onClick={() =>
                    removeFromCart(
                      item.id
                    )
                  }
                >
                  🗑
                </button>
              </div>
            ))}

          </div>

          <div className="cart-footer">

            <h3>
              Итого:
              {" "}
              $
              {totalPrice.toFixed(
                2
              )}
            </h3>

            <button
              className="clear-btn"
              onClick={clearCart}
            >
              Очистить корзину
            </button>

          </div>
        </>
      )}
    </div>
  );
}

export default CartDrawer;