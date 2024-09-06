import React from 'react';
import { Link } from 'react-router-dom';

export default function HelpCenter() {
    const handleContactSupport = () => {
        alert('Support contacted successfully!');
    };

    const handleSubmitFeedback = () => {
        alert('Feedback submitted successfully!');
    };

    return (
        <>
            <section className="main-container">
                <Link to="/settings">
                    <button className="bg-purple-600 text-white rounded-full px-3 py-2 text-lg">←</button>
                </Link>
                <header className="header">ศูนย์ช่วยเหลือ</header>

                <div className="faq-section">
                    <h2 className="section-title">คำถามที่พบบ่อย</h2>
                    <ul className="faq-list">
                        <li>ฉันจะรีเซ็ตรหัสผ่านได้อย่างไร?</li>
                        <li>วิธีการใช้งาน Smart Bin?</li>
                        <li>จะติดต่อฝ่ายสนับสนุนได้อย่างไร?</li>
                    </ul>
                </div>

                <div className="contact-support">
                    <h2 className="section-title">ติดต่อฝ่ายสนับสนุน</h2>
                    <button className="support-button" onClick={handleContactSupport}>
                        ติดต่อฝ่ายสนับสนุน
                    </button>
                </div>

                <div className="submit-feedback">
                    <h2 className="section-title">ส่งความคิดเห็น</h2>
                    <button className="feedback-button" onClick={handleSubmitFeedback}>
                        ส่งความคิดเห็น
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

                .section-title {
                    font: 600 20px var(--font-family);
                    color: var(--secondary-color);
                    margin-bottom: 10px;
                }

                .faq-section, .contact-support, .submit-feedback {
                    width: 100%;
                    margin-bottom: 30px;
                }

                .faq-list {
                    list-style-type: none;
                    padding: 0;
                }

                .faq-list li {
                    background-color: var(--primary-color-container);
                    box-shadow: var(--box-shadow);
                    margin-bottom: 10px;
                    padding: 10px;
                    border-radius: var(--border-radius);
                    font-family: var(--font-family);
                    font-size: var(--font-size-base);
                    color: var(--secondary-color);
                }

                .support-button, .feedback-button {
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

                .support-button:hover, .support-button:focus,
                .feedback-button:hover, .feedback-button:focus {
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
