import "./CartWidget.scss";
import cart from "./assest/cart.svg";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useCart();

  return (
    <Link to="/cart" className="cart" style={{display: totalQuantity > 0 ? 'block' : 'none'}}>
      <img src={cart} />
      <span className="widgetTotal">{totalQuantity}</span>
    </Link>
  );
};

export default CartWidget;
