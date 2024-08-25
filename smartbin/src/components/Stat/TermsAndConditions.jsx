import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function TermsAndConditions() {
    const [accepted, setAccepted] = useState(false);

    const handleAccept = () => {
        if (accepted) {
            alert('Thank you for accepting the terms and conditions.');
        } else {
            alert('Please accept the terms and conditions to proceed.');
        }
    };

    return (
        <>
            <section className="main-container">
                <Link to="/settings">
                    <button className="back-button">←</button>
                </Link>
                <header className="header">ข้อกำหนดและเงื่อนไข</header>

                <div className="terms-container">
                    <div className="terms-content">
                        <p>
                            ยินดีต้อนรับสู่แอปพลิเคชัน Smart Bin กรุณาอ่านข้อกำหนดและเงื่อนไขต่อไปนี้อย่างละเอียด 
                            การใช้แอปพลิเคชันนี้ถือว่าคุณได้ยอมรับข้อกำหนดและเงื่อนไขเหล่านี้แล้ว...
                            {/* Insert full terms and conditions text here */}
                        </p>
                        {/* Add more content as needed */}
                    </div>

                    <label className="acceptance">
                        <input
                            type="checkbox"
                            checked={accepted}
                            onChange={() => setAccepted(!accepted)}
                        />
                        ฉันยอมรับข้อกำหนดและเงื่อนไข
                    </label>

                    <button className="accept-button" onClick={handleAccept}>
                        ยอมรับข้อกำหนดและเงื่อนไข
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

                .terms-container {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    max-height: 400px;
                    overflow-y: auto;
                    background-color: var(--primary-color-container);
                    padding: 20px;
                    border-radius: var(--border-radius);
                    box-shadow: var(--box-shadow);
                }

                .terms-content {
                    font-family: var(--font-family);
                    font-size: var(--font-size-base);
                    color: var(--secondary-color);
                    line-height: 1.6;
                }

                .acceptance {
                    display: flex;
                    align-items: center;
                    margin-top: 20px;
                    font-family: var(--font-family);
                    font-size: var(--font-size-base);
                    color: var(--secondary-color);
                }

                .accept-button {
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

                .accept-button:hover, .accept-button:focus {
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
