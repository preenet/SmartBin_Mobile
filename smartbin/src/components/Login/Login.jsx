import * as React from "react";
import GoogleIcon from "../../images/Google icon.png";
import FacebookIcon from "../../images/Facebook icon.png";
import AppleIcon from "../../images/Apple icon.png";
import EmailIcon from "../../images/Email icon.png";

export default function Login() {
  return (
    <>
      <section className="main-container">
        <header className="header">SMART BIN ICON</header>
        <div className="registration-container">
          <h1 className="title">ลงชื่อเข้าใช้ Smart Bin</h1>
          <form className="form">
            <label className="label" htmlFor="phone">
              หมายเลขโทรศัพท์
            </label>
            <input
              className="input"
              type="tel"
              id="phone"
              placeholder="เลขโทรศัพท์"
              aria-label="หมายเลขโทรศัพท์"
            />
            <label className="label" htmlFor="password">
              รหัสผ่าน
            </label>
            <input
              className="input"
              type="password"
              id="password"
              placeholder="รหัสผ่าน"
              aria-label="รหัสผ่าน"
            />
            <div className="remember-me">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe" className="labelRemember">จดจำฉัน</label>
            </div>
            <button className="login-button" type="submit">
              เข้าสู่ระบบ
            </button>
            <a href='../forgot-password' className="forgot-password">ลืมรหัสผ่าน</a>
          </form>
          <p className="alternative">หรือ</p>
          <div className="icons">
            <img src={GoogleIcon} className="icon" alt="Google Icon" />
            <img src={FacebookIcon} className="icon" alt="Facebook Icon" />
            <img src={AppleIcon} className="icon" alt="Apple Icon" />
            <img src={EmailIcon} className="icon" alt="Email Icon" />
          </div>
          <div className="existing-account">
            <span className="account-text">ยังไม่มีบัญชีผู้ใช้ใช่ไหม?</span>
            <a href="../Register" className="login-link">
              ลงทะเบียนใช้งาน
            </a>
          </div>
        </div>
      </section>
      <style jsx>{`
        .main-container {
          background-color: #fff;
          display: flex;
          width: auto;
          padding: 53px 17px;
          flex-direction: column;
          margin: 0 auto;
          height: auto;
          justify-content: center;
          align-items: center;
        }
        .header {
          border-radius: 20px;
          box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25),
            0px -1px 4px 0px rgba(0, 0, 0, 0.25);
          background-color: #fff;
          align-self: center;
          margin-top: 19px;
          width: 115px;
          max-width: 100%;
          color: #000;
          text-align: center;
          justify-content: center;
          padding: 12px 17px;
          font: 700 16px Mitr, sans-serif;
        }
        .registration-container {
          border-radius: 20px;
          box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25),
            0px -1px 4px 0px rgba(0, 0, 0, 0.25);
          background-color: #fff;
          display: flex;
          margin-top: 20px;
          max-width: 480px;
          width: 100%;
          flex-direction: column;
          padding: 10px 17px;
        }
        .title {
          color: #000;
          font: 700 25px Mitr, sans-serif;
          margin-bottom: 0px;
        }
        .form {
          display: flex;
          flex-direction: column;
        }
        .label {
          color: #000;
          margin-top: 10px;
          font: 600 15px Mitr, sans-serif;
        }
        .input {
          border-radius: 10px;
          box-shadow: 0px 0.05px 2px 0px rgba(0, 0, 0, 0.25) inset;
          background-color: #fff;
          margin-top: 6px;
          align-items: start;
          color: #000;
          justify-content: center;
          padding: 11px 12px;
          font: 400 15px Mitr, sans-serif;
        }
        .forgot-password {
          font-family: Mitr, sans-serif;
          text-decoration: underline;
          border-radius: 20px;
          background-color: #fff;
          align-self: center;
          margin-top: 4px;
          width: 199px;
          max-width: 100%;
          padding: 9px 60px;
          text-align: center;
        }
        .remember-me {
          display: flex;
          margin-top: 9px;
          gap: 6px;
          white-space: nowrap;
        }
        .labelRemember {
          font-family: Mitr, sans-serif;
          font-weight: 400;
        }
        .login-button {
          border-radius: 20px;
          box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25), 0px -1px 1px rgba(0, 0, 0, 0.25);
          background-color: #fff;
          align-self: center;
          margin-top: 15px;
          width: 199px;
          max-width: 100%;
          align-items: center;
          border-color: #fff;
          color: #000;
          text-align: center;
          justify-content: center;
          padding: 12px 60px;
          font: 400 15px Mitr, sans-serif;
        }
        .alternative {
          z-index: 10;
          background-color: #fff;
          align-self: center;
          margin-top: 0 px;
          color: #000;
          text-align: center;
          justify-content: center;
          padding: 0 21px;
          font: 400 15px Mitr, sans-serif;
        }
        .icons {
          align-self: center;
          display: flex;
          margin-top: 5px;
          width: 100%;
          max-width: 314px;
          gap: 20px;
          justify-content: space-between;
        }
        .icon {
          aspect-ratio: 1;
          object-fit: cover;
          width: 50px;
        }
        .existing-account {
          align-self: center;
          display: flex;
          gap: 5px;
          font-size: 15px;
          color: #000;
          font-weight: 400;
          margin: 20px 0 8px;
        }
        .account-text {
          font-family: Mitr, sans-serif;
        }
        .login-link {
          font-family: Mitr, sans-serif;
          text-decoration: underline;
          background-color: #fff;
        }
      `}</style>
    </>
  );
}