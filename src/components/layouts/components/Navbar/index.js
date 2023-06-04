import { Link } from 'react-router-dom';
import './Navbar.scss';
function Navbar() {
  return (
    <div className="boxNavbar">
      <a className="navbar-link" href="#0">
        <i className="fa-solid fa-bars"></i>
      </a>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/News">News</Link>
        <Link to="/Contact">Contact</Link>
      </nav>
    </div>
  );
}
export default Navbar;
