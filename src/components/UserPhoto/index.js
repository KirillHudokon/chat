import styles from'./index.module.scss';
import { withUserStatus } from "./hoc/withUserStatus";
const UserPhoto = ({src}) => (
    <img 
        className={styles.userPhoto}
        src={src}
        alt="avatar"
    />
)

export default withUserStatus(UserPhoto)