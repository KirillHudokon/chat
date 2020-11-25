import {useEffect} from 'react'
import './App.scss';
import {connect} from 'react-redux'
import AppPagesWrapper from "./components/AppPagesWrapper/"
import MainPages from './routes/MainPages';
import {userListener} from './actions/'

const App = ({user,userChecked, userListener}) => {
  useEffect(()=>{
    userListener()
  }, [userListener])
  if(!userChecked) return <div>loading...</div>
  return (
    <div>
      <AppPagesWrapper>
        <MainPages user={user}/>
      </AppPagesWrapper>
    </div>
  );
}
const mapStateToProps = store => ({
  user: store.user.cred,
  userChecked: store.user.user_listener.checked
});
const mapDispatchToProps = {
  userListener 
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
