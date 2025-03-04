import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./CartView.scss";

const CartView = () => {
  const { cart, total, removeItem, clearCart, totalQuantity } = useCart();

  if (totalQuantity === 0) {
    return (
      <div className="noProducts">
        <h1 className="noProducts__title">No hay productos en el carrito</h1>
        <Link className="noProducts__link" to="/">
          Ver productos
        </Link>
      </div>
    );
  }

  return (
    <div className="cartProducts">
      <h1 className="cartProducts__title">Carrito de Compras</h1>
      <section className="cartProducts__cardContainer">
        {cart.map((prod) => (
          <div key={prod.id} className="cartProducts__card">
            {prod.img && (
              <img
                src={prod.img}
                alt={prod.name}
                className="cartProducts__img"
              />
            )}
            <div className="cartProducts__details">
              <h3 className="cartProducts__cardTitle">{prod.name}</h3>
              <p>
                <strong>Categoría:</strong> {prod.category}
              </p>
              <p>
                <strong>Cantidad:</strong> {prod.quantity}
              </p>
              <p>
                <strong>Precio por unidad:</strong> ${prod.price}
              </p>
              <p>
                <strong>Subtotal:</strong> ${prod.quantity * prod.price}
              </p>
              <button
                className="cartProducts__remove"
                onClick={() => removeItem(prod.id)}
              >
                Remover
              </button>
            </div>
          </div>
        ))}
      </section>
      <section>
        <h1 className="cartProducts__total">Total: ${total}</h1>
      </section>
      <section className="cartProducts__actions">
        <Link className="cartProducts__checkout" to="/checkout">
          Finalizar Compra
        </Link>
        <button className="cartProducts__clear" onClick={clearCart}>
          Vaciar Carrito
        </button>
      </section>
    </div>
  );
};

export default CartView;
