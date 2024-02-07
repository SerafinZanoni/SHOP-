import "./ItemDetailContainer.scss";
import { useState, useEffect } from "react";

import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";


const ItemDetailContainer = () => {

  const [product, setProducts] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    
    const docRef = doc(db, 'products', itemId)

    getDoc(docRef)
    .then(response => {
      const data = response.data()
      const productAdapted = {id: response.id, ...data}
      setProducts(productAdapted)
    })
    .catch(error => {
      console.log(error)
    })
  }, [itemId]);

  return (
    <div>
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
