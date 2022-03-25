import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar/Navbar';
import { useAuthContext } from './hooks/useAuthContext';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

function App() {
  const { authIsReady, user } = useAuthContext()
  const homeViewAuth = user ? <Home /> : <Navigate to="/login" />
  const loginViewAuth = user ? <Navigate to="/" /> : <Login />
  const signupViewAuth = user ? <Navigate to="/" /> : <Signup />
  if (!authIsReady) return <p>Loading...</p>
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={homeViewAuth} exact />
        <Route path="/login" element={loginViewAuth}
        />
        <Route path="/signup" element={signupViewAuth} />
      </Routes>
    </Router >
  );
}

export default App;
