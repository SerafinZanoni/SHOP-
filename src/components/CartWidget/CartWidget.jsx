import "./CartWidget.scss"
import cart from './assest/cart.svg';

const CartWidget = () => {
  return (
    <div className="cart">
      <img src={cart} alt="cart__img" className="cart__img"/>
      
    </div>
  );
};

export default CartWidget