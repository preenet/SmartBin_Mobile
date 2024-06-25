import React from "react";
import { useNavigate } from 'react-router-dom';
import './Welcome.css';

export default function Welcome() {
  const navigate = useNavigate();

  const navigateToRegister = () => {
    navigate('/register');
  };

  const navigateToLogin = () => {
    navigate('/login');
  };

  return (
    <main className="container">
      <section className="content">
        <header className="icon">SMART BIN ICON</header>
        <h1 className="welcome">ยินดีต้อนรับเข้าสู่ Smart Bin</h1>
        <button className="button register" onClick={navigateToRegister}>ลงทะเบียน</button>
        <button className="button login" onClick={navigateToLogin}>เข้าสู่ระบบ</button>
      </section>
    </main>
  );
}