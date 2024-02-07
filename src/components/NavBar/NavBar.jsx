import "./NavBar.scss";
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to='/' className="navbar__title">
      <h1 className="navbar__title"> 🛒 React Shop</h1>
      </Link>
      
      <div className="navbar__links">
        <NavLink to={'/category/celulars'} className='navbar__link'>Celulares</NavLink>
        <NavLink to={'/category/tablets'} className='navbar__link'>Tablets</NavLink>
        <NavLink to={'/category/notebooks'} className='navbar__link'>Notebooks</NavLink>
      </div>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
