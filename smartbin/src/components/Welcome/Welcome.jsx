import React from "react";
import { useNavigate } from 'react-router-dom';

export default function Welcome() {
  const navigate = useNavigate();

  const navigateToRegister = () => {
    navigate('/register');
  };

  const navigateToLogin = () => {
    navigate('/login');
  };

  return (
    <>
      <main className="container">
        <section className="content">
          <header className="icon">SMART BIN ICON</header>
          <h1 className="welcome">ยินดีต้อนรับเข้าสู่ Smart Bin</h1>
          <button className="button register" onClick={navigateToRegister}>ลงทะเบียน</button>
          <button className="button login" onClick={navigateToLogin}>เข้าสู่ระบบ</button>
        </section>
      </main>
      <style jsx>{`
        :root {
          --primary-color: #fff;
          --secondary-color: #000;
          --font-family: 'Mitr', sans-serif;
          --font-family-secondary: 'Roboto', sans-serif;
          --font-size-base: 18px;
          --font-size-large: 18px;
          --font-size-small: 16px;
          --border-radius: 20px;
          --box-shadow: 0px 0.05px 2px 1px rgba(0, 0, 0, 0.25);
        }

        .container {
          background-color: var(--primary-color);
          display: flex;
          max-width: 100%;
          width: 100%;
          flex-direction: column;
          font-size: var(--font-size-base);
          color: var(--secondary-color);
          font-weight: 700;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
          padding: 53 17px;
        }

        .content {
          backdrop-filter: blur(50px);
          background-color: rgba(255, 255, 255, 0.7);
          display: flex;
          width: 100%;
          flex-direction: column;
          align-items: center;
          padding: 40px;
          box-sizing: border-box;
        }

        .icon {
          text-align: center;
          margin-top: 60px;
          font-family: var(--font-family-secondary);
          font-size: var(--font-size-small);
        }

        .welcome {
          align-self: stretch;
          margin-top: 90px;
          font-family: var(--font-family);
          font-size: var(--font-size-large);
          text-align: center;
        }

        .button {
          font-family: var(--font-family);
          border-radius: var(--border-radius);
          box-shadow: var(--box-shadow);
          background-color: var(--primary-color);
          width: 199px;
          max-width: 100%;
          align-items: center;
          font-weight: 400;
          white-space: nowrap;
          text-align: center;
          justify-content: center;
          padding: 11px 60px;
          margin-top: 24px;
          cursor: pointer;
          border: none;
          transition: background-color 0.3s, transform 0.3s;
        }

        .button:hover, .button:focus {
          background-color: rgba(255, 255, 255, 0.9);
          transform: scale(1.05);
        }

        .register {
          margin-top: 60px;
        }

        .login {
          margin: 20px 0 40px;
        }

        @media (min-width: 390px) {
          .content {
            padding: 80px;
          }
          .icon {
            margin-top: 100px;
            font-size: var(--font-size-small);
          }
          .welcome {
            margin-top: 150px;
            font-size: var(--font-size-large);
          }
          .button {
            padding: 11px 55px;
          }
          .register {
            margin-top: 80px;
          }
          .login {
            margin: 24px 0 100px;
          }
        }

        @media (min-width: 768px) {
          .container {
            max-width: 700px;
          }
        }

        @media (min-width: 1024px) {
          .container {
            max-width: 1200px;
          }
        }
      `}</style>
    </>
  );
}
