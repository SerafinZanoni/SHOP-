import "./ItemListContainer.scss";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase/firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {

    const productsCollection = categoryId
      ? query(collection(db, 'products'),where('category', '==', categoryId))
      : collection(db, 'products');

    getDocs(productsCollection)
      .then((QuerySnapshot) => {
        const productAdapted = QuerySnapshot.docs.map((doc) => {
          const fields = doc.data();
          return { id: doc.id, ...fields };
        });

        setProducts(productAdapted);
      })
      .catch(error => {
        console.log(error)
      });
  }, [categoryId]);

  return (
    <>
      <h1 className="greeting">{greeting}</h1>
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;
