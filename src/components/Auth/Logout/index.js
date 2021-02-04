import styles from './index.module.scss'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
const Logout = ({logout}) => (
    <div className={styles.logoutButton} onClick={logout}>
        <ExitToAppIcon/>
    </div>
)
export default Logout