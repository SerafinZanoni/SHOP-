import "./ItemCount.scss"
import { useState } from "react";


const ItemCount = ({stock, initial = 1, onAdd}) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="item-counter">
      <button className="item-counter__button" onClick={decrement}>-</button>
      <h4 className="item-counter__count">{count}</h4>
      <button className="item-counter__button" onClick={increment}>+</button>
      <button className="item-counter__buttonAdd" onClick={() => onAdd(count)} disabled={!stock}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
