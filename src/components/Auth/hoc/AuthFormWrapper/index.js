import styles from'./index.module.scss';

const AuthFormWrapper = (Component) => () => {
  return (
    <div className={styles.authFormWrapper}>
        <Component/>
    </div>
  );
}
export default AuthFormWrapper;


