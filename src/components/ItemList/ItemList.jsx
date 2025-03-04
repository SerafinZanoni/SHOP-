import "./ItemList.scss";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div className="items">
      {products.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
};

export default ItemList;
