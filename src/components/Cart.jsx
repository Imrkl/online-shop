import useCartStore from "../store/useCartStore";

function Cart({
  setIsOpen
}) {
  const { cart } =
    useCartStore();

  return (
    <div
      className="cart-icon"
      onClick={() =>
        setIsOpen(true)
      }
    >
      🛒

      <span>
        {cart.length}
      </span>
    </div>
  );
}

export default Cart;