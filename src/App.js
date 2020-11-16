import './App.scss';
import AppPageWrapper from "./components/AppPageWrapper/"
import SignIn from "./components/Auth/SignIn/"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

library.add(faPlay)
const App = () => {
  return (
    <AppPageWrapper>
      <SignIn/>
    </AppPageWrapper>
  );
}

export default App;
