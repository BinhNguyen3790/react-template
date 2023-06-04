import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
  return <p className={cx('sidebar-ttl')}>hello sidebar</p>;
}

export default Sidebar;
