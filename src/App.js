import { Outlet, ReactLocation, Router } from 'react-location';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

const location = new ReactLocation;
function App() {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
  ]


  return (
    <Router location={location} routes={routes}>
      <div className="App">
        <Navbar />
      </div>
      <Outlet />
    </Router>
  );
}

export default App;
