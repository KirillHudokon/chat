import styles from'./index.module.scss';
import UserPhoto from '../UserPhoto'
const ChatApp = () => {
   return <div className={styles.chatApp}>
       <nav className={styles.navbar}>
         <div className={styles.userPhotoContainer}>
                <UserPhoto 
                    src="https://lh3.googleusercontent.com/proxy/CqpmmdOwqWuwmX5jqYhRM4LO85VQoT8NZH33UOlcYZB8qfcpBYH6W7en6f3yQemUckjPmU10QSFeNbffnzrbI5rVo5SASq7sa0SM4Fi8JPHA" 
                />
         </div>
         <div className={styles.navOptions}>
             <div className={styles.navOption}>
                 
             </div>
         </div>
       </nav>
       <div className={styles.chats}>

       </div>
       <div className={styles.chat}>

       </div>
       <div className={styles.anotherUserProfile}>

       </div>
    </div>
}

export default ChatApp