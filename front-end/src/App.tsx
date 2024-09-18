import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import { LANDING_PAGE } from './constants/routes';
import { Landing } from './pages/unauthenticated/landing/landing';
import Navbar from './pages/unauthenticated/nav-bar/nav-bar';

function App() {
  return (
        <Router>
          <div>
            <Navbar isLoggedIn={false}/>
            <Routes>
                <Route path={LANDING_PAGE} element={<Landing/>}/>
            </Routes>
          </div>
        </Router>
  );
}

export default App;
