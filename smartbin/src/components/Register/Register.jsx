import React, { useState } from "react";
import GoogleIcon from "../../images/Google icon.png";
import FacebookIcon from "../../images/Facebook icon.png";
import AppleIcon from "../../images/Apple icon.png";
import EmailIcon from "../../images/Email icon.png";
import { registerUser } from '../../services/api';
import * as Yup from "yup";
import './Register.css';

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
            firstname: formData.firstname,
            lastname: formData.lastname,
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
  );
}
