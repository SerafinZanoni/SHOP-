import "./Item.scss";
import { Link } from "react-router-dom";

const Item = ({id, name, img, price }) => {
  return (
    <div className="item">
      <h1 className="item__title">{name}</h1>
      <img className="item__img" src={img} />
      <p className="item__price">${price}</p>
      <Link to={`/item/${id}`} className="item__link">Ver detalle</Link>
    </div>
  );
};

export default Item;
