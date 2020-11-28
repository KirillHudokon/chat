import { connect } from "react-redux"
import { logout } from '../../actions/'
const ChatApp = ({logout}) => {
   return <div>
        <button onClick={(e)=>{e.preventDefault(); logout()}}>
            logout
        </button>
    </div>
}

const mapStateToProps = store => ({
    user: store.user.cred,
});
const mapDispatchToProps = {
    logout
}
export default connect(mapStateToProps, mapDispatchToProps)(ChatApp);