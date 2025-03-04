import "./CartWidget.scss";
import cart from "./assest/cart.svg";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useCart();

  if (totalQuantity === 0) return null; // No mostrar si el carrito está vacío

  return (
    <Link to="/cart" className="cart">
      <img src={cart} alt="Carrito" className="cart__img" />
      <span className="cart__total">{totalQuantity}</span>
    </Link>
  );
};

export default CartWidget;
