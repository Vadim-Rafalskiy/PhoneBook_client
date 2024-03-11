import BasicButtons from 'shared/components/BasicButtons/BasicButtons';

import { useSelector, useDispatch } from 'react-redux';

import { logout } from '../../../redux/auth/auth-operations';

import { getUser } from '../../../redux/auth/auth-selectors';
import { NavLink } from 'react-router-dom';

import styles from './navbar-user.module.scss';

const NavbarUser = () => {
  const { email } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <NavLink className={styles.contactsLink} to={'/contacts'}>
        Contacts
      </NavLink>
      <div className={styles.logout}>
        <div>{email}</div>
        <BasicButtons onClick={onLogout} size="small">
          Logout
        </BasicButtons>
      </div>
    </>
  );
};

export default NavbarUser;
