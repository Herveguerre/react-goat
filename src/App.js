import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom';
import StevePage from './component/pages/StevePage';
import MarkPage from './component/pages/MarkPage';
import ElonPage from './component/pages/ElonPage';
import JackPage from './component/pages/JackPage';
import ErrorPage from './component/pages/ErrorPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'element={<StevePage/>} />
        <Route path='/mark'element={<MarkPage/>} />
        <Route path='/elon'element={<ElonPage/>} />
        <Route path='/jack'element={<JackPage/>} />
        <Route path='/*'element={<ErrorPage/>} />
      </Routes>
    </Router>

  );
}

export default App;
