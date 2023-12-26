import "./CartWidget.scss"
import cart from './assest/cart.svg';

const CartWidget = () => {
  return (
    <div className="cart">
      <img src={cart} alt="cart-widget" className="cart__img"/>
      <span className="cart__counter">0</span>
    </div>
  );
};

export default CartWidget