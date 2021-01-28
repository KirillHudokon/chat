import styles from'./index.module.scss';
import { navButtons } from '../../utils/navButtons'
import { Icon } from '../../utils/Icon';
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom';
const NavButtons = () => {
    const history = useHistory()
    const renderNavButtons = () => {
        return navButtons.map(navButton => {
            return <div key={navButton.name} className={styles.navButton}>
                <a onClick={()=>history.push(navButton.route)}>
                    <div className={styles.iconContainer}>
                        {navButton.icon}
                    </div>
                </a>
            </div>
        })
    }
    return <div className={styles.navButtons}>
        {renderNavButtons()}
    </div>
}

export default NavButtons