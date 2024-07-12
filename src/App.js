import './App.css';
import Home from './Home';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Forgetpass from './Pages/Forgepass';
import Otpverify from './Pages/Otpverify';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/forget" element={<Forgetpass/>} />
        <Route path="/otpverify" element={<Otpverify/>} />




        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
