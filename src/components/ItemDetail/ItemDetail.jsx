import "./ItemDetail.scss";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({  name, img, category, description, price, stock }) => {
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
        <p className="ItemDetail__info">Precio: {price}</p>
        
      </section>
      <footer className="ItemDetail__footer">
      <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agrgada: ',quantity)}/>
      </footer>
    </article>
  );
};

export default ItemDetail