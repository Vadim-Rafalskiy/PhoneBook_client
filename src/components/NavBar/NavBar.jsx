import { useSelector } from 'react-redux';

import Logo from 'shared/components/Logo/Logo';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';

import { isUserLogin } from '../../redux/auth/auth-selectors';

import styles from './NavBar.module.scss';

const NavBar = () => {
  const isLogin = useSelector(isUserLogin);

  return (
    <>
      <div className={styles.navWrapper}>
        <Logo />
        {!isLogin && <NavbarAuth />}
        {isLogin && <NavbarUser />}
      </div>
    </>
  );
};

export default NavBar;
