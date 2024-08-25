import React, { useState, useEffect } from 'react';
import { getUser, updateUserProfile } from '../../services/api';
import { Link } from 'react-router-dom';

export default function EditProfile({ userId }) {
    const [formData, setFormData] = useState({
        username: '',
        firstname: '',
        lastname: '',
        phonenumber: '',
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        // Fetch user profile data when the component mounts
        const fetchUserProfile = async () => {
            try {
                const data = await getUser(userId);
                setFormData({
                    username: data.username,
                    firstname: data.firstname,
                    lastname: data.lastname,
                    phonenumber: data.phonenumber,
                });
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };

        fetchUserProfile();
    }, [userId]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    };

    const handleSubmit = async (field) => {
        try {
            const updatedData = {
                [field]: formData[field],
                user_id: userId,
            };
            await updateUserProfile(updatedData);
            alert(`${field.charAt(0).toUpperCase() + field.slice(1)} updated successfully!`);
        } catch (error) {
            console.error(`Error updating ${field}:`, error);
            alert(`Failed to update ${field}. Please try again.`);
        }
    };

    return (
        <>
            <section className="main-container">
                <Link to="/settings">
                    <button className="back-button">←</button>
                </Link>
                <header className="header">แก้ไขโปรไฟล์</header>

                <div className="form-section">
                    <label className="label" htmlFor="username">ชื่อผู้ใช้</label>
                    <input
                        className="input"
                        type="text"
                        id="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    {errors.username && <div className="error">{errors.username}</div>}
                    <button
                        className="button"
                        type="button"
                        onClick={() => handleSubmit('username')}
                    >
                        อัปเดตชื่อผู้ใช้
                    </button>
                </div>

                <div className="form-section">
                    <label className="label" htmlFor="firstname">ชื่อจริง</label>
                    <input
                        className="input"
                        type="text"
                        id="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                    />
                    {errors.firstname && <div className="error">{errors.firstname}</div>}
                    <button
                        className="button"
                        type="button"
                        onClick={() => handleSubmit('firstname')}
                    >
                        อัปเดตชื่อจริง
                    </button>
                </div>

                <div className="form-section">
                    <label className="label" htmlFor="lastname">นามสกุล</label>
                    <input
                        className="input"
                        type="text"
                        id="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                    />
                    {errors.lastname && <div className="error">{errors.lastname}</div>}
                    <button
                        className="button"
                        type="button"
                        onClick={() => handleSubmit('lastname')}
                    >
                        อัปเดตนามสกุล
                    </button>
                </div>

                <div className="form-section">
                    <label className="label" htmlFor="phonenumber">เบอร์โทรศัพท์</label>
                    <input
                        className="input"
                        type="text"
                        id="phonenumber"
                        value={formData.phonenumber}
                        onChange={handleChange}
                    />
                    {errors.phonenumber && <div className="error">{errors.phonenumber}</div>}
                    <button
                        className="button"
                        type="button"
                        onClick={() => handleSubmit('phonenumber')}
                    >
                        อัปเดตเบอร์โทรศัพท์
                    </button>
                </div>
            </section>

            <style jsx>{`
                :root {
                    --primary-color: #9E76B4;
                    --primary-color-container: #fff;
                    --secondary-color: #000;
                    --secondary-color-font: #fff;
                    --font-family: 'Mitr', sans-serif;
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
                    flex-direction: column;
                    padding: 53px 17px;
                    margin: 0 auto;
                    max-width: 400px;
                    height: auto;
                    justify-content: center;
                    align-items: center;
                    border-radius: var(--border-radius);
                    box-shadow: var(--box-shadow);
                }

                .back-button {
                    background-color: var(--primary-color);
                    color: var(--secondary-color-font);
                    border: none;
                    border-radius: 50%;
                    box-shadow: var(--box-shadow);
                    width: 40px;
                    height: 40px;
                    cursor: pointer;
                    position: absolute;
                    top: 20px;
                    left: 20px;
                }

                .header {
                    font: 700 25px var(--font-family);
                    color: var(--secondary-color);
                    margin-bottom: 20px;
                    text-align: center;
                }

                .form-section {
                    margin-bottom: 20px;
                    width: 100%;
                }

                .label {
                    color: var(--secondary-color);
                    margin-top: 10px;
                    font: 600 15px var(--font-family);
                    display: block;
                    margin-bottom: 8px;
                }

                .input {
                    border-radius: 10px;
                    box-shadow: var(--box-shadow) inset;
                    background-color: var(--primary-color-container);
                    border: none;
                    margin-top: 6px;
                    padding: 11px 12px;
                    font: 400 15px var(--font-family);
                    color: var(--secondary-color);
                    width: 100%;
                }

                .button {
                    border-radius: var(--border-radius);
                    box-shadow: var(--box-shadow-button);
                    background-color: var(--primary-color);
                    color: var(--secondary-color-font);
                    font: 400 15px var(--font-family);
                    padding: 12px 60px;
                    margin-top: 10px;
                    border: none;
                    cursor: pointer;
                    width: 100%;
                }

                .button:hover {
                    background-color: var(--primary-color-container);
                    color: var(--secondary-color);
                }

                .error {
                    font: 15px var(--font-family);
                    color: red;
                    margin-top: 5px;
                }
            `}</style>
        </>
    );
}
