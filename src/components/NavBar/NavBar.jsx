import "./NavBar.scss";
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to='/'>
      <h1 className="navbar__title">E-commerce</h1>
      </Link>
      
      <section className="navbar__buttons">
        <button className="navbar__button">Celulares</button>
        <button className="navbar__button">Tablets</button>
        <button className="navbar__button">Laptops</button>
      </section>

      <div className="navbar__links">
        <NavLink to={'/category/celular'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Celulares</NavLink>
        <NavLink to={'/category/tablet'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Tablets</NavLink>
        <NavLink to={'/category/notebook'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Notebooks</NavLink>
      </div>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
