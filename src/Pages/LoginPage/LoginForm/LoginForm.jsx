import TextFieldMui from 'shared/components/TextFieldMui/TextFieldMui';

import BasicButtons from '../../../shared/components/BasicButtons/BasicButtons';
import useForm from '../../../shared/hooks/useForm';

import fields from './fields';
import initialState from './initialState';

import styles from './login-form.module.scss';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit });
  const { email, password } = state;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <TextFieldMui value={email} handleChange={handleChange} {...fields.email} />
      <TextFieldMui value={password} handleChange={handleChange} {...fields.password} />
      <BasicButtons>Login</BasicButtons>
    </form>
  );
};

export default LoginForm;
