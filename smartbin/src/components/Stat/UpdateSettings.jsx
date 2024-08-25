import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function UpdateSettings() {
    const [automaticUpdates, setAutomaticUpdates] = useState(true);
    const [currentVersion] = useState("v1.0.0"); // Replace with dynamic version if available

    const handleCheckForUpdates = () => {
        // Logic to check for updates
        alert('Checking for updates...');
    };

    return (
        <>
            <section className="main-container">
                <Link to="/settings">
                    <button className="back-button">←</button>
                </Link>
                <header className="header">การตั้งค่าการอัปเดต</header>

                <div className="settings-container">
                    <label className="label">
                        เปิดการอัปเดตอัตโนมัติ:
                        <input
                            className="toggle"
                            type="checkbox"
                            checked={automaticUpdates}
                            onChange={() => setAutomaticUpdates(!automaticUpdates)}
                        />
                    </label>

                    <div className="current-version">
                        เวอร์ชันปัจจุบัน: {currentVersion}
                    </div>

                    <button className="update-button" onClick={handleCheckForUpdates}>
                        ตรวจสอบการอัปเดต
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

                .current-version {
                    margin-top: 15px;
                    font-family: var(--font-family);
                    font-size: var(--font-size-base);
                    color: var(--secondary-color);
                    text-align: center;
                    margin-bottom: 20px;
                }

                .update-button {
                    font-family: var(--font-family);
                    color: var(--secondary-color-font);
                    border-radius: var(--border-radius);
                    box-shadow: var(--box-shadow-button);
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

                .update-button:hover, .update-button:focus {
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
