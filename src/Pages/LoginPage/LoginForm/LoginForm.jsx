import { TextField } from 'components/Input/TextField.jsx';
import { nanoid } from 'nanoid';

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
      <TextField id={nanoid()} value={email} handleChange={handleChange} {...fields.email} />
      <TextField id={nanoid()} value={password} handleChange={handleChange} {...fields.password} />
      <BasicButtons>Login</BasicButtons>
    </form>
  );
};

export default LoginForm;
