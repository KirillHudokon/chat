import styles from './index.module.scss'
import {logout} from '../../actions/'
import {connect} from 'react-redux'
import UserPhoto from '../UserPhoto'
import NavButtons from '../NavButtons';
import Logout from '../../components/Auth/Logout';
const Navigation = ({ logout }) => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.userPhotoContainer}>
                <UserPhoto 
                    src="https://lh3.googleusercontent.com/proxy/DJbQvf-iHbaYseJ_LY0bdiTWLriUb877YK9wqqnbNR5tEVYKGRUjkEQu5ppJoL_4sd7oB7I1-USdBcPK42EZvKiAYwugkP6rGRysmBXj44al" 
                />
            </div>
            <div className={styles.navButtons}>
                <NavButtons/>
            </div>
            <div className={styles.logoutContainer}>
                <Logout logout={logout}/>
            </div>
      </nav>
    )
}
export default connect(null, {logout})(Navigation)