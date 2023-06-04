import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';

const cx = classNames.bind(styles);

function Navbar() {
  return (
    <div className={cx('boxNavbar')}>
      <a className={cx('navbar-link')} href="#0">
        <i className="fa-solid fa-bars"></i>
      </a>
      <nav className={cx('navbar')}>
        <Link to="/">Home</Link>
        <Link to="/news">News</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}
export default Navbar;
