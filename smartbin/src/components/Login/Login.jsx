import React, { useState } from "react";
import GoogleIcon from "../../images/Google icon.png";
import FacebookIcon from "../../images/Facebook icon.png";
import AppleIcon from "../../images/Apple icon.png";
import EmailIcon from "../../images/Email icon.png";
import { loginUser } from '../../services/api';
import useToken from "../../hooks/useToken";
import * as Yup from "yup";
import './Login.css';

export default function Login() {
    const { updateUser, updateToken } = useToken();

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
        const { id, value } = e.target;
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
        <section className="main-container">
            <header className="header">SMART BIN ICON</header>
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
    );
}
