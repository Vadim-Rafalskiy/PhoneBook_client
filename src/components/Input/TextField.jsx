import styles from './TextField.module.scss';

export const TextField = ({ id, label, handleChange, ...props }) => {
  return (
    <>
      {label && (
        <label htmlFor={id} className={styles.lable}>
          {label}
        </label>
      )}
      <input id={id} onChange={handleChange} {...props} className={styles.input} />
    </>
  );
};
