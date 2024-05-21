import * as React from "react";
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();

  const navigateToRegister = () => {
    navigate('/register');
  };

  return (
    <>
      <main className="container">
        <section className="content">
          <header className="icon">SMART BIN ICON</header>
          <h1 className="welcome">ยินดีต้อนรับเข้าสู่ Smart Bin</h1>
          <button className="button register" onClick={navigateToRegister}>ลงทะเบียน</button>
          <button className="button login">เข้าสู่ระบบ</button>
        </section>
      </main>
      <style jsx>{`
        .container {
          background-color: #fff;
          display: flex;
          max-width: 480px;
          width: 100%;
          flex-direction: column;
          font-size: 18px;
          color: #000;
          font-weight: 700;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
        }
        .content {
          backdrop-filter: blur(50px);
          background-color: rgba(255, 255, 255, 0.7);
          display: flex;
          width: 100%;
          flex-direction: column;
          align-items: center;
          padding: 80px;
        }
        .icon {
          text-align: center;
          margin-top: 122px;
          font: 16px Roboto, sans-serif;
        }
        .welcome {
          align-self: stretch;
          margin-top: 180px;
          font: 20px Roboto, sans-serif;
          text-align: center;
        }
        .button {
          font-family: Roboto, sans-serif;
          border-radius: 20px;
          box-shadow: 0px 0.05px 2px 1px rgba(0, 0, 0, 0.25);
          background-color: #fff;
          width: 199px;
          max-width: 100%;
          align-items: center;
          font-weight: 400;
          white-space: nowrap;
          text-align: center;
          justify-content: center;
          padding: 11px 60px;
          margin-top: 24px;
        }
        .register {
          margin-top: 109px;
        }
        .login {
          margin: 24px 0 83px;
        }
        @media only screen and (max-width: 390px) {
          .content {
            padding: 40px;
          }
          .icon {
            margin-top: 60px;
            font-size: 14px;
          }
          .welcome {
            margin-top: 90px;
            font-size: 18px;
          }
          .button {
            padding: 10px 50px;
          }
          .register {
            margin-top: 60px;
          }
          .login {
            margin: 20px 0 40px;
          }
        }
        @media only screen and (min-width: 768px) and (max-width: 1024px) {
          .container {
            max-width: 700px;
          }
          .content {
            padding: 60px;
          }
          .icon {
            margin-top: 100px;
            font-size: 16px;
          }
          .welcome {
            margin-top: 150px;
            font-size: 20px;
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
        @media only screen and (min-width: 1440px) {
          .container {
            max-width: 1200px;
          }
          .content {
            padding: 100px;
          }
          .icon {
            margin-top: 150px;
            font-size: 18px;
          }
          .welcome {
            margin-top: 200px;
            font-size: 22px;
          }
          .button {
            padding: 15px 70px;
          }
          .register {
            margin-top: 100px;
          }
          .login {
            margin: 30px 0 150px;
          }
        }
      `}</style>
    </>
  );
}

export default Welcome;
