import { useDispatch } from 'react-redux';

import { signup } from 'redux/auth/auth-operations';

import RegisterForm from 'Pages/RegisterPage/RegisterForm/RegisterForm';

import styles from './RegisterPage.module.scss';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(signup(data));
  };

  return (
    <div className={styles.container}>
      <RegisterForm onSubmit={handleSignup} />
    </div>
  );
};

export default RegisterPage;
