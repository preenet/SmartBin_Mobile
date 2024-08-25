import React, { useEffect, useState } from 'react';
import { getUserActivitiesData } from '../../services/api'; // Ensure you have this API function to fetch activities data
import { Link } from 'react-router-dom';

export default function AllTransactions({ userId }) {
    const [activities, setActivities] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchActivities = async () => {
            try {
                const data = await getUserActivitiesData(userId);
                setActivities(data);
            } catch (error) {
                console.error("Error fetching activities:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchActivities();
    }, [userId]);

    return (
        <>
            <section className="main-container">
                <Link to="/home">
                    <button className="back-button">←</button>
                </Link>
                <header className="header">ประวัติการทำรายการ</header>

                {isLoading ? (
                    <p className="loading">กำลังโหลด...</p>
                ) : (
                    <div className="transaction-list">
                        {activities.map((activity, index) => (
                            <div key={index} className="transaction-item">
                                <div className="transaction-details">
                                    <p className="place-name">ชื่อสถานที่</p>
                                    <p className="transaction-date">{new Date(activity.timestamp).toLocaleString()}</p>
                                </div>
                                <p className="transaction-points">+{activity.point} คะแนน</p>
                            </div>
                        ))}
                    </div>
                )}
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

                .loading {
                    font: 700 20px var(--font-family);
                    color: var(--secondary-color);
                    text-align: center;
                    margin-top: 50px;
                }

                .transaction-list {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                .transaction-item {
                    display: flex;
                    justify-content: space-between;
                    padding: 10px;
                    background-color: var(--primary-color-container);
                    border-radius: var(--border-radius);
                    box-shadow: var(--box-shadow);
                    width: 100%;
                }

                .transaction-details {
                    display: flex;
                    flex-direction: column;
                    font-size: var(--font-size-base);
                }

                .place-name {
                    font-weight: 600;
                    font-size: var(--font-size-base);
                }

                .transaction-date {
                    font-weight: 400;
                    font-size: var(--font-size-small);
                }

                .transaction-points {
                    font-weight: 600;
                    font-size: var(--font-size-base);
                    color: rgba(52, 168, 83, 1);
                    align-self: center;
                }
            `}</style>
        </>
    );
}
