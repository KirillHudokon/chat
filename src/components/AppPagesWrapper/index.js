import styles from'./index.module.scss';

const AppPagesWrapper = ({children}) => {
  return (
    <div className={styles.appPagesWrapper}>
        {children}
    </div>
  );
}

export default AppPagesWrapper;
