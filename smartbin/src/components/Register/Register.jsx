import React, { useState } from "react";
import GoogleIcon from "../../images/Google icon.png";
import FacebookIcon from "../../images/Facebook icon.png";
import AppleIcon from "../../images/Apple icon.png";
import EmailIcon from "../../images/Email icon.png";
import {registerUser} from '../../services/api';
import * as Yup from "yup";

export default function Register() {

  const [formData, setFormData] = useState({
    username: '',
    firstname: '',
    lastname: '',
    phonenumber: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const validationSchema = Yup.object({
    username: Yup.string().required("กรุณาใส่ชื่อผู้ใช้"),
    firstname: Yup.string().required("กรุณาใส่ชื่อจริง"),
    lastname: Yup.string().required("กรุณาใส่นามสกุล"),
    phonenumber: Yup.string()
      .matches(/^\d{10}$/, "เบอร์โทรศัพท์ควรมี 10 หลัก")
      .required("กรุณาใส่เบอร์โทรศัพท์"),
    password: Yup.string()
      .required("กรุณาใส่รหัสผ่าน")
      .min(8, "รหัสผ่านควรมีอย่างน้อง 8 ตัวอักษร")
      .matches(/[0-9]/, "รหัสผ่านควรมีตัวเลขอย่างน้อย 1 ตัวอักษร")
      .matches(/[A-Z]/, "รหัสผ่านควรมีตัวอักษรพิมพ์ใหญ่อย่างน้อย 1 ตัวอักษร")
      .matches(/[a-z]/, "รหัสผ่านควรมีตัวอักษรพิมพ์เล็กอย่างน้อย 1 ตัวอักษร"),
    confirmPassword: Yup.string()
      .required("กรุณาใส่ยินยันรหัสผ่าน")
      .oneOf([Yup.ref("password")], "รหัสผ่านไม่ตรงกัน"),
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
    
    try {
      await validationSchema.validate(formData, {abortEarly: false});
      setErrors({});

      const response = await registerUser({
            username: formData.username,
            phonenumber: formData.phonenumber,
            password: formData.password
        });
        if (response.status === 200){
            alert('Registration successful');
            console.log(response);
            window.location.href = '/login'
        } else {
            alert(response.msg)
        } 
      } catch (error) {
        if (error.inner) {

            const newErrors = {};

            error.inner.forEach((err) => {
                newErrors[err.path] = err.message;
            }); 

            setErrors(newErrors);
        }else{
            console.error(error)
            alert("Something went wrong, please try again 🥲")
        }
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
            {errors.username && <div className="error">{errors.username}</div>}
            <label className="label" htmlFor="firstname">
              ชื่อจริง
            </label>
            <input
              className="input"
              type="text"
              id="firstname"
              placeholder="ชื่อจริง"
              aria-label="ชื่อจริง"
              value={formData.firstname}
              onChange={handleChange}
            />
            {errors.firstname && <div className="error">{errors.firstname}</div>}
            <label className="label" htmlFor="lastname">
              นามสกุล
            </label>
            <input
              className="input"
              type="text"
              id="lastname"
              placeholder="นามสกุล"
              aria-label="นามสกุล"
              value={formData.lastname}
              onChange={handleChange}
            />
            {errors.lastname && <div className="error">{errors.lastname}</div>}
            <label className="label" htmlFor="phonenumber">
              หมายเลขโทรศัพท์
            </label>
            <input
              className="input"
              type="tel"
              id="phonenumber"
              placeholder="เลขโทรศัพท์"
              aria-label="หมายเลขโทรศัพท์"
              value={formData.phonenumber}
              onChange={handleChange}
            />
            {errors.phonenumber && <div className="error">{errors.phonenumber}</div>}
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
            {errors.password && <div className="error">{errors.password}</div>}
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
            {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
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
        :root {
          --primary-color: #9E76B4;
          --primary-color-container: #fff;
          --secondary-color: #000;
          --secondary-color-font: #fff;
          --font-family: 'Mitr', sans-serif;
          --font-family-secondary: 'Roboto', sans-serif;
          --font-size-base: 18px;
          --font-size-large: 18px;
          --font-size-small: 16px;
          --border-radius: 20px;
          --box-shadow: 0px 0.05px 2px 1px rgba(0, 0, 0, 0.25);
          --box-shadow-button: 0px 1px 1px rgba(0, 0, 0, 0.25), 0px -1px 1px rgba(0, 0, 0, 0.25);
        }

        .main-container {
          background-color: var(--primary-color-container);
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
          border-radius: var(--border-radius);
          box-shadow: var(--box-shadow-button);
          background-color: var(--primary-color-container);
          align-self: center;
          margin-top: 19px;
          width: 115px;
          max-width: 100%;
          color: var(--secondary-color);
          text-align: center;
          justify-content: center;
          padding: 12px 17px;
          font: 700 16px var(--font-family);
        }

        .registration-container {
          border-radius: var(--border-radius);
          box-shadow: var(--box-shadow-button);
          background-color: var(--primary-color-container);
          display: flex;
          margin-top: 20px;
          max-width: 480px;
          width: 100%;
          flex-direction: column;
          padding: 10px 17px;
        }

        .title {
          color: var(--secondary-color);
          font: 700 25px var(--font-family);
          margin-bottom: 0px;
        }

        .form {
          display: flex;
          flex-direction: column;
        }

        .label {
          color: var(--secondary-color);
          margin-top: 10px;
          font: 600 15px var(--font-family);
        }

        .input {
          border-radius: 10px;
          box-shadow: var(--box-shadow) inset;
          background-color: var(--primary-color-container);
          border: none;
          margin-top: 6px;
          align-items: start;
          color: var(--secondary-color);
          justify-content: center;
          padding: 11px 12px;
          font: 400 15px var(--font-family);
        }

        .register-button {
          border-radius: var(--border-radius);
          box-shadow: var(--box-shadow-button);
          background-color: var(--primary-color);
          align-self: center;
          margin-top: 15px;
          width: 199px;
          max-width: 100%;
          align-items: center;
          border: none;
          color: var(--secondary-color-font);
          text-align: center;
          justify-content: center;
          padding: 12px 60px;
          font: 400 15px var(--font-family);
        }

        .alternative {
          z-index: 10;
          background-color: var(--primary-color-container);
          align-self: center;
          margin-top: 15px;
          color: var(--secondary-color);
          text-align: center;
          justify-content: center;
          padding: 0 21px;
          font: 400 15px var(--font-family);
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
          color: var(--secondary-color);
          font-weight: 400;
          margin: 20px 0 8px;
        }

        .account-text {
          font-family: var(--font-family);
        }

        .login-link {
          font-family: var(--font-family);
          text-decoration: underline;
          background-color: var(--primary-color-container);
        }

        .error {
          font: 15px var(--font-family);
          color: red;
        }
      `}</style>
    </>
  );
}
