import styles from'./index.module.scss';
import Navigation from '../Navigation';
const ChatApp = () => (
   <div className={styles.chatApp}>
       <Navigation/>
       <div className={styles.chats}>

       </div>
       <div className={styles.chat}>

       </div>
       <div className={styles.anotherUserProfile}>

       </div>
    </div>
)

export default ChatApp