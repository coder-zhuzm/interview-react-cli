import { Link, Outlet } from 'umi';
import './index.css';
import styles from './index.less';

export default function Layout() {
  return (
    <div className={styles.navs}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/docs">Docs</Link>
        </li>
        <li>
          <Link to="/audioPage">audioPage</Link>
        </li>
        <li>
          <Link to="/reactQuery">reactQuery</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
