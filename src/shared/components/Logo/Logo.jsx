import { NavLink } from 'react-router-dom';

import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <NavLink to="/" className={styles.logo}>
      Phone<span className={styles.accent}>Book</span>
    </NavLink>
  );
};

export default Logo;
