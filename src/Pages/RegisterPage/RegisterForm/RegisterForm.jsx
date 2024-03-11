import TextFieldMui from 'shared/components/TextFieldMui/TextFieldMui';
import BasicButtons from 'shared/components/BasicButtons/BasicButtons';

import useForm from 'shared/hooks/useForm';

import fields from './fields';
import initialState from './initialState';

import styles from './RegisterForm.module.scss';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { name, email, password } = state;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <TextFieldMui value={name} handleChange={handleChange} {...fields.name} />
      <TextFieldMui value={email} handleChange={handleChange} {...fields.email} />
      <TextFieldMui value={password} handleChange={handleChange} {...fields.password} />
      <BasicButtons>Register</BasicButtons>
    </form>
  );
};

export default RegisterForm;
