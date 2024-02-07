import { useState } from "react";
import {
  collection,
  getDocs,
  where,
  query,
  documentId,
  writeBatch,
  addDoc,
} from "firebase/firestore";
import { useCart } from "../../context/CartContext";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { db } from "../../services/firebase/firebaseConfig";
import './Checkout.scss'

const Checkout = () => {
  const [orderId, setOrderId] = useState("");

  const { cart, total, clearCart } = useCart();

  const createOrder = async ({ name, phone, email }) => {
    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart,
        total: total,
      };

      const batch = writeBatch(db);

      const outOfStock = [];

      const ids = cart.map((prod) => prod.id);
      const productsCollection = query(
        collection(db, "products"),
        where(documentId(), "in", ids)
      );

      // getDocs(productsCollection).then(querySnapshot => {})
      const querySnapshot = await getDocs(productsCollection);
      const { docs } = querySnapshot;

      docs.forEach((doc) => {
        const fields = doc.data();
        const stockDb = fields.stock;

        const productsAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productsAddedToCart.quantity;
        console.log(stockDb >= prodQuantity);
        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...fields });
        }
      });

      if (outOfStock.length === 0) {
        batch.commit();

        const orderCollection = collection(db, "orders");
        const { id } = await addDoc(orderCollection, objOrder);

        setOrderId(id);

        clearCart();
      } else {
        //showNotification('error', 'Hay productos que no tienen stock disponible')
      }
    } catch (error) {
      //showNotification('error', 'Hubo un error al crear la orden')
    } finally {
      // setLoading(false)
    }
    if (orderId) {
      return <h1>El id de su compra es: {orderId}</h1>;
    }
  };
  return (
    <div>
      <h1 className="tittle">CHECKOUT</h1>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
};

export default Checkout;
