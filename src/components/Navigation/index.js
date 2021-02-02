import styles from './index.module.scss'
import {connect} from 'react-redux'
import UserPhoto from '../UserPhoto'
import NavButtons from '../NavButtons';
const Navigation = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.userPhotoContainer}>
                <UserPhoto 
                    src="https://lh3.googleusercontent.com/proxy/jbULZ4-th4NbQVgws4ZcshLQNTtscWucpAXvXRN4ziaNwmkK9yvbGBt1Dzfoc26y0c46YSVv5wYKG9nkC5RQtphEYFCeTEnicTN9KfjkOYHm" 
                />
            </div>
            <div className={styles.navButtons}>
                <NavButtons/>
            </div>
            <div className={styles.logoutContainer}>

            </div>
      </nav>
    )
}
export default Navigation