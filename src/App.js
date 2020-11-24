import './App.scss';
import {connect} from 'react-redux'
import AppPagesWrapper from "./components/AppPagesWrapper/"
import MainPages from './routes/MainPages';

const App = ({user}) => {
  console.log(user)
  return (
    <div>
      <AppPagesWrapper>
        <MainPages/>
      </AppPagesWrapper>
    </div>
  );
}
const mapStateToProps = store => ({
  user: store.user.cred,
});
export default connect(mapStateToProps, null)(App);
