import styles from'./index.module.scss';

function AppPageWrapper({children}) {
  return (
    <div className={styles.appPageWrapper}>
        {children}
    </div>
  );
}

export default AppPageWrapper;
