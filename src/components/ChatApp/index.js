import styles from'./index.module.scss';
import UserPhoto from '../UserPhoto'
import NavButtons from '../NavButtons';
const ChatApp = () => (
   <div className={styles.chatApp}>
       <nav className={styles.navbar}>
         <div className={styles.userPhotoContainer}>
                <UserPhoto 
                    src="https://lh3.googleusercontent.com/proxy/qQkttZGWvsBRT1KkAGr-SNY92QaphzVW4ljfa0XVct-TxCGSAjnzdHDz1DbwvRPmvMjDdK2v1dxa1b6254B8DNqumXoez5k-7wcZTtTl6doo" 
                />
         </div>
         <div className={styles.navButtons}>
                <NavButtons/>
         </div>
         <div className={styles.logoutContainer}>

         </div>
       </nav>
       <div className={styles.chats}>

       </div>
       <div className={styles.chat}>

       </div>
       <div className={styles.anotherUserProfile}>

       </div>
    </div>
)

export default ChatApp