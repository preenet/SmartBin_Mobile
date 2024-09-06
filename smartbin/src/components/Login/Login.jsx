import React, {useEffect, useState} from "react";
import GoogleIcon from "../../images/Google icon.png";
import FacebookIcon from "../../images/Facebook icon.png";
import AppleIcon from "../../images/Apple icon.png";
import EmailIcon from "../../images/Email icon.png";
import {loginUser} from '../../services/api';
import useToken from "../../hooks/useToken";
import * as Yup from "yup";
import logo from '../../images/logo.png';

export default function Login() {
    const {updateUser, updateToken} = useToken();

    const [formData, setFormData] = useState({
        phonenumber: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const validationSchema = Yup.object({
        phonenumber: Yup.string()
            .matches(/^\d{10}$/, "เบอร์โทรศัพท์ควรมี 10 หลัก")
            .required("กรุณาใส่เบอร์โทรศัพท์"),
        password: Yup.string()
            .required("กรุณาใส่รหัสผ่าน")
    });

    const handleChange = (e) => {
        const {id, value} = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            await validationSchema.validate(formData, { abortEarly: false });
            setErrors({});

            const response = await loginUser({
                phonenumber: formData.phonenumber,
                password: formData.password
            });
            if (response.status === 200) {
                alert(response.msg)
                updateUser({username: response.data.username, user_id: response.data.user_id})
                updateToken(response.data.access_token)
                // setToken(response.data.access_token)
                window.location.href = '/home'
            } else {
                alert(response.msg)
            }
            // console.log(response);
            // Handle successful login, such as saving tokens, redirecting, etc.
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
            <header className="header">
              <img src={logo} alt="Smart Bin Logo" className="logo" />
            </header>
                <div className="registration-container">
                    <h1 className="title">ลงชื่อเข้าใช้ Smart Bin</h1>
                    <form className="form" onSubmit={handleSubmit}>
                        <label className="label" htmlFor="phonenumber">
                            หมายเลขโทรศัพท์
                        </label>
                        <input
                            className="input"
                            type="tel"
                            id="phonenumber"
                            placeholder="หมายเลขโทรศัพท์"
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
                        <div className="remember-me">
                            <input type="checkbox" id="rememberMe"/>
                            <label htmlFor="rememberMe" className="labelRemember">จดจำฉัน</label>
                        </div>
                        <button className="login-button" type="submit">
                            เข้าสู่ระบบ
                        </button>
                        <a href='../forgot-password' className="forgot-password">ลืมรหัสผ่าน</a>
                    </form>
                    <p className="alternative">หรือ</p>
                    <div className="icons">
                        <img src={GoogleIcon} className="icon" alt="Google Icon"/>
                        <img src={FacebookIcon} className="icon" alt="Facebook Icon"/>
                        <img src={AppleIcon} className="icon" alt="Apple Icon"/>
                        <img src={EmailIcon} className="icon" alt="Email Icon"/>
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
                text-align: center;
                margin-bottom: 0px;
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
                border: none;
                background-color: var(--primary-color-container);
                margin-top: 6px;
                align-items: start;
                color: var(--secondary-color);
                justify-content: center;
                padding: 11px 12px;
                font: 400 15px var(--font-family);
              }

              .forgot-password {
                font-family: var(--font-family);
                text-decoration: underline;
                border-radius: var(--border-radius);
                background-color: var(--primary-color-container);
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
                font-family: var(--font-family);
                font-weight: 400;
              }

              .login-button {
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
                margin-top: 0px;
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

              .logo {
                max-width: 150px; /* Adjust this size as needed */
                height: auto;
              }
            `}</style>
        </>
    );
}
