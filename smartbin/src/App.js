import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import ForgotPassword from './components/Forgot-password/ForgotPassword';
import Home from './components/Home/Home';
import Stat from './components/Stat/Stat';
import RedeemShop from './components/RedeemShop/RedeemShop';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/home" element={<Home />} />
          <Route path="/stat" element={<Stat />} />
          <Route path="/redeem-shop" element={<RedeemShop />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
