import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PrivacySettings() {
    const [dataSharing, setDataSharing] = useState(false);
    const [adPreferences, setAdPreferences] = useState(false);
    const [locationSharing, setLocationSharing] = useState(false);
    const [accountVisibility, setAccountVisibility] = useState("public");
    const [dataRetention, setDataRetention] = useState("6 months");

    const handleSave = () => {
        // Logic to save the user's privacy settings
        alert('Settings saved successfully!');
    };

    return (
        <>
            <section className="main-container">
                <Link to="/settings">
                    <button className="back-button">←</button>
                </Link>
                <header className="header">การตั้งค่าความเป็นส่วนตัว</header>
                <div className="settings-container">
                    <label className="label">
                        การแบ่งปันข้อมูล:
                        <input
                            className="toggle"
                            type="checkbox"
                            checked={dataSharing}
                            onChange={() => setDataSharing(!dataSharing)}
                        />
                    </label>

                    <label className="label">
                        การตั้งค่าโฆษณา:
                        <input
                            className="toggle"
                            type="checkbox"
                            checked={adPreferences}
                            onChange={() => setAdPreferences(!adPreferences)}
                        />
                    </label>

                    <label className="label">
                        การแบ่งปันตำแหน่งที่ตั้ง:
                        <input
                            className="toggle"
                            type="checkbox"
                            checked={locationSharing}
                            onChange={() => setLocationSharing(!locationSharing)}
                        />
                    </label>

                    <label className="label">
                        การมองเห็นบัญชี:
                        <select
                            className="select"
                            value={accountVisibility}
                            onChange={(e) => setAccountVisibility(e.target.value)}
                        >
                            <option value="public">สาธารณะ</option>
                            <option value="private">ส่วนตัว</option>
                        </select>
                    </label>

                    <label className="label">
                        การเก็บข้อมูล:
                        <select
                            className="select"
                            value={dataRetention}
                            onChange={(e) => setDataRetention(e.target.value)}
                        >
                            <option value="6 months">6 เดือน</option>
                            <option value="1 year">1 ปี</option>
                            <option value="indefinite">ไม่มีกำหนด</option>
                        </select>
                    </label>

                    <button className="save-button" onClick={handleSave}>
                        บันทึกการตั้งค่า
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
                    --border-radius: 20px;
                    --box-shadow: 0px 0.05px 2px 1px rgba(0, 0, 0, 0.25);
                    --font-size-base: 18px;
                    --font-size-large: 18px;
                    --font-size-small: 16px;
                }

                .main-container {
                    background-color: var(--primary-color-container);
                    display: flex;
                    flex-direction: column;
                    padding: 53px 17px;
                    max-width: 400px;
                    margin: 0 auto;
                    border-radius: var(--border-radius);
                    box-shadow: var(--box-shadow);
                    align-items: center;
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

                .settings-container {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                }

                .label {
                    font-family: var(--font-family);
                    font-size: var(--font-size-base);
                    color: var(--secondary-color);
                    margin-bottom: 15px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .toggle {
                    margin-left: 10px;
                }

                .select {
                    width: 100%;
                    padding: 10px;
                    border-radius: 10px;
                    border: 1px solid #ccc;
                    font-family: var(--font-family);
                }

                .save-button {
                    font-family: var(--font-family);
                    color: var(--secondary-color-font);
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

                .save-button:hover, .save-button:focus {
                    background-color: var(--primary-color-container);
                    color: var(--secondary-color);
                    transform: scale(1.05);
                }

                @media (min-width: 768px) {
                    .main-container {
                        max-width: 700px;
                    }
                }

                @media (min-width: 1024px) {
                    .main-container {
                        max-width: 1200px;
                    }
                }
            `}</style>
        </>
    );
}
