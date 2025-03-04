import PropTypes from "prop-types";
import "./Item.scss";
import { Link } from "react-router-dom";

const Item = ({ id, name, img, price }) => {
  return (
    <div className="item__container">
      <h2 className="item__title">{name}</h2>
      <img className="item__img" src={img} alt={name} />
      <p className="item__price">${price}</p>
      <Link to={`/item/${id}`} className="item__link">
        Ver detalle
      </Link>
    </div>
  );
};

Item.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Item;
