import styles from'./index.module.scss';

const AppPageWrapper = ({children}) => {
  return (
    <div className={styles.appPageWrapper}>
        {children}
    </div>
  );
}

export default AppPageWrapper;
