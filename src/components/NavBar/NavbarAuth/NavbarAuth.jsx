import { NavLink } from 'react-router-dom';

import styles from './navbar-auth.module.scss';

const NavbarAuth = () => {
  return (
    <div className={styles.nav}>
      <NavLink className={styles.link} to={'/login'}>
        Login
      </NavLink>
      <span className={styles.menuSeparator}>|</span>
      <NavLink className={styles.link} to={'/register'}>
        Register
      </NavLink>
    </div>
  );
};

export default NavbarAuth;
