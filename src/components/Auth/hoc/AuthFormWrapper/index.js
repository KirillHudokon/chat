import styles from'./index.module.scss';

function AuthFormWrapper(Component) {
  return (
    <div className={styles.authFormWrapper}>
        <Component/>
    </div>
  );
}

export default AuthFormWrapper;
