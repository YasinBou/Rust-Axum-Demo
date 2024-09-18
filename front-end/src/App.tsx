import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { LANDING_PAGE, LOGIN_PAGE, REGISTER_PAGE } from './constants/routes';
import { Landing } from './pages/unauthenticated/landing/landing';
import Navbar from './pages/unauthenticated/nav-bar/nav-bar';
import { Login } from './pages/unauthenticated/log-in/log-in';
import { Register } from './pages/unauthenticated/register/register';

function App() {
  return (
        <Router>
          <div>
            <Navbar isLoggedIn={false}/>
            <Routes>
                <Route path={LANDING_PAGE} element={<Landing/>}/>
                <Route path={LOGIN_PAGE} element={<Login/>}/>
                <Route path={REGISTER_PAGE} element={<Register/>}/>
            </Routes>
          </div>
        </Router>
  );
}

export default App;
