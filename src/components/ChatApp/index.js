import styles from'./index.module.scss';
import { connect } from "react-redux"
import { logout } from '../../actions/'
const ChatApp = ({logout}) => {
   return <div className={styles.chatApp}>
       <div className={styles.navbar}>
         <div className={styles.userAvatarContainer} onClick={logout}>
            <div className={styles.userAvatarWrapper}>
                <img/>
            </div>
         </div>
         <div>
             <div>

             </div>
         </div>
       </div>
       <div className={styles.chats}>

       </div>
       <div className={styles.chat}>

       </div>
       <div className={styles.anotherUserProfile}>

       </div>
    </div>
}

const mapStateToProps = store => ({
    user: store.user.cred,
});
const mapDispatchToProps = {
    logout
}
export default connect(mapStateToProps, mapDispatchToProps)(ChatApp);