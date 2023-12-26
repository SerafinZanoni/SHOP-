import "./NavBar.scss";
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar__title">E-commerce</h1>
      <section className="navbar__buttons">
        <button className="navbar__button">Celulares</button>
        <button className="navbar__button">Tablets</button>
        <button className="navbar__button">Laptops</button>
      </section>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
