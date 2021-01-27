import styles from './withUserStatus.module.scss'
export const withUserStatus = (Component) => (props) => (
    <>
        <Component {...props}/>
        <div className={`${styles.userNetworkStatus} ${styles.online}`}/>
    </>
)
