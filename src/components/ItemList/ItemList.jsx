import "./ItemList.scss";
import Item from "../Item/Item";
import ItemCount from "../ItemCount/ItemCount";

const ItemList = ({ products }) => {
  return (
    <div className="items">
      {products.map((prod) => {
        return (
          <>
            <Item key={prod.id} {...prod} />
            <ItemCount initial={0} stock={prod.stock} onAdd={(count) => console.log('Cantidad agregada:' ,count)}/>
          </>
        );
      })}
    </div>
  );
};

export default ItemList;
