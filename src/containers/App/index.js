import {useEffect} from 'react'
import './App.scss'; /* global styles */
import {connect} from 'react-redux'
import AppPagesWrapper from "../../components/AppPagesWrapper"
import MainPages from '../../routes/MainPages';
import {userListener} from '../../actions'

const App = ({userChecked, userListener}) => {
  useEffect(()=>{
    userListener()
  }, [userListener])
  if(!userChecked) return <div>loading...</div>
  return (
    <div>
      <AppPagesWrapper>
        <MainPages/>
      </AppPagesWrapper>
    </div>
  );
}
const mapStateToProps = store => ({
  userChecked: store.user.user_listener.checked
});
const mapDispatchToProps = {
  userListener 
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
