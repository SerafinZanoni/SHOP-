import "./CheckoutForm.scss";
import { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirm = (event) => {
    event.preventDefault();

    const userData = {
      name,
      phone,
      email,
    };

    onConfirm(userData);
  };

  return (
    <div>
      <form onSubmit={handleConfirm} className="form">
        <label className="label">
          Nombre
          <input
            className="input"
            type="text"
            value={name}
            onChange={({ target }) => setName(target.value)}
          ></input>
        </label>
        <label className="label">
          Telefono
          <input
            className="input"
            type="text"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
          ></input>
        </label>
        <label className="label">
          Email
          <input
            className="input"
            type="text"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          ></input>
        </label>
        
            <button type="submit" className="button" >Crear orden</button>
        
      </form>
    </div>
  );
};

export default CheckoutForm;
