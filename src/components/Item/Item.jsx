import "./Item.scss"

const Item = ({ name, img }) => {
  return (
    <div className="item">
      <h1 className="item__title">{name}</h1>
      <img className="item__img" src={img} />
    </div>
  );
};

export default Item;
