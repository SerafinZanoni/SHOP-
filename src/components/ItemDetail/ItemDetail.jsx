import "./ItemDetail.scss";
import ItemCount from "../ItemCount/ItemCount";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";


const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

  const { addItem, getProductQuantity } = useCart();

  const handleOnAdd = (quantity) => {
    const objProductToAdd = {
      id,
      name,
      price,
      quantity,
    };
    addItem(objProductToAdd);
  };

  const productQuantity = getProductQuantity(id);

  return (
    <article className="ItemDetail">
      <header>
        <h2 className="ItemHeader__header">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemDetail__img" />
      </picture>
      <section className="ItemDetail__info">
        <p className="ItemDetail__info">Categoria: {category}</p>
        <p className="ItemDetail__info">Descripcion: {description}</p>
        <p className="ItemDetail__info">Precio: ${price}</p>
      </section>
      <footer className="ItemDetail__footer">
        <ItemCount
          initial={productQuantity}
          stock={stock}
          onAdd={handleOnAdd}
        />
        <Link className="ItemDetail__link" to='/cart'>Ver carrito</Link>
      </footer>
    </article>
  );
};

export default ItemDetail;
