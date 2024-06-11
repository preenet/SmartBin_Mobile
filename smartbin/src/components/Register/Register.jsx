import React, { useState } from "react";
import GoogleIcon from "../../images/Google icon.png";
import FacebookIcon from "../../images/Facebook icon.png";
import AppleIcon from "../../images/Apple icon.png";
import EmailIcon from "../../images/Email icon.png";
import { registerUser } from '../../services/api';
import * as Yup from "yup";

export default function Register() {
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const validationSchema = Yup.object({
    phonenumber: Yup.string()
      .matches(/^\d{10}$/, "Phone Number must be 10 digits")
      .required("กรุณาใส่เบอร์โทรศัพท์"),
    password: Yup.string()
      .required("กรุณาใส่รหัสผ่าน")
      .min(8, "รหัสผ่านควรมีอย่างน้อง 8 ตัวอักษร")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "รหัสผ่านควรมีอักขระพิเศษอย่างน้อยหนึ่งตัว"
      )
      .matches(/[0-9]/, "รหัสผ่านควรมีตัวเลขอย่างน้องหนึ่งตัว")
      .matches(/[A-Z]/, "รหัสผ่านควรมีตัวอักษรพิมพ์ใหญ่อย่างน้องหนึ่งตัว")
      .matches(/[a-z]/, "รหัสผ่านควรมีตัวอักษรพิมพ์เล็กอย่างน้องหนึ่งตัว"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "รหัสผ่านไม่ตรงกัน")
      .required("กรุณาใส่ยินยันรหัสผ่าน"),
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    try {
        const response = await registerUser({
            username: formData.username,
            phoneNumber: formData.phone,
            password: formData.password
        });
        alert('Registration successful');
        console.log(response);
    } catch (error) {
        console.error("There was an error registering!", error);
        alert('Registration failed');
    }
};

  return (
    <>
      <section className="main-container">
        <header className="header">SMART BIN ICON</header>
        <div className="registration-container">
          <h1 className="title">ลงทะเบียน Smart Bin</h1>
          <form className="form" onSubmit={handleSubmit}>
            <label className="label" htmlFor="username">
              ชื่อผู้ใช้
            </label>
            <input
              className="input"
              type="text"
              id="username"
              placeholder="ชื่อผู้ใช้"
              aria-label="ชื่อผู้ใช้"
              value={formData.username}
              onChange={handleChange}
            />
            <label className="label" htmlFor="phone">
              หมายเลขโทรศัพท์
            </label>
            <input
              className="input"
              type="tel"
              id="phone"
              placeholder="เลขโทรศัพท์"
              aria-label="หมายเลขโทรศัพท์"
              value={formData.phone}
              onChange={handleChange}
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
              value={formData.password}
              onChange={handleChange}
            />
            <label className="label" htmlFor="confirmPassword">
              ยืนยันรหัสผ่าน
            </label>
            <input
              className="input"
              type="password"
              id="confirmPassword"
              placeholder="ยืนยันรหัสผ่าน"
              aria-label="ยืนยันรหัสผ่าน"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <button className="register-button" type="submit">
              ลงทะเบียน
            </button>
          </form>
          <p className="alternative">หรือ</p>
          <div className="icons">
            <img src={GoogleIcon} className="icon" alt="Google Icon" />
            <img src={FacebookIcon} className="icon" alt="Facebook Icon" />
            <img src={AppleIcon} className="icon" alt="Apple Icon" />
            <img src={EmailIcon} className="icon" alt="Email Icon" />
          </div>
          <div className="existing-account">
            <span className="account-text">มีบัญชีผู้ใช้แล้วใช่ไหม?</span>
            <a href='../Login' className="login-link">
              เข้าสู่ระบบที่นี่
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
          border-radius: 21px;
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
          color: rgba(0, 0, 0, 0.3);
          justify-content: center;
          padding: 11px 12px;
          font: 400 15px Mitr, sans-serif;
        }
        .register-button {
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
          margin-top: 15px;
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
        .error {
          font: 15px Mitr, sans-serif;
          color: red;
        }
      `}</style>
    </>
  );
}
