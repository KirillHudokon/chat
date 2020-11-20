import './App.scss';
import AppPagesWrapper from "./components/AppPagesWrapper/"
import MainPages from './routes/MainPages';

const App = () => {
  return (
    <div>
      <AppPagesWrapper>
        <MainPages/>
      </AppPagesWrapper>
    </div>
  );
}

export default App;
