import React from 'react';
import { Link } from 'react-router-dom';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import GoogleMap from "../GoogleMap";

export default function AdminControlPanel() {
    const userChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Active Users',
                data: [12, 19, 3, 5, 2, 3, 9, 13, 10, 5, 2, 1],
                fill: false,
                backgroundColor: '#9E76B4',
                borderColor: '#9E76B4',
            },
        ],
    };

    const smartbinData = [
        { label: 'ขวดพลาสติก', value: 6, unit: 'ขวด' },
        { label: 'กระป๋องอลูมิเนียม', value: 0, unit: 'ขวด' },
        { label: 'ขวดแก้ว', value: 0, unit: 'ขวด' },
    ];

    return (
        <section className="admin-container">
            <header className="admin-header">แผงควบคุมผู้ดูแลระบบ</header>
            <section className="admin-stats">
                <div className="stats-row">
                    <div className="chart-card">
                        <h3>ผู้ใช้ทั้งหมด</h3>
                        <p className="user-count">165 บัญชี</p>
                        <Line data={userChartData} />
                    </div>
                    <div className="recycling-summary">
                        <h3 className="recycling-summary-title">จำนวนการรีไซเคิลทั้งหมด</h3>
                        <div className="smartbin-stats">
                            {smartbinData.map((item, index) => (
                                <div key={index} className="smartbin-detail">
                                    <div className="smartbin-row">
                                        <div className="smartbin-label-container">
                                            <p className="smartbin-label">{item.label}</p>
                                            <div className="smartbin-value-container">
                                                <p className="smartbin-value">{item.value}</p>
                                                <span className="smartbin-unit">{item.unit}</span>
                                            </div>
                                        </div>
                                        <div className="weekly-stats">
                                            <p className="weekly-value">สัปดาห์นี้</p>
                                            <p className="weekly-value-amount">{item.value}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="map-section">
                <h3>สถานะของ Smart Bin</h3>
                <GoogleMap center={{ lat: 18.800616, lng: 98.950478 }} zoom={17} />
            </section>
            <section className="admin-actions">
                <Link to="/user-management" className="admin-action-button">การจัดการบัญชีผู้ใช้</Link>
                <Link to="/store-management" className="admin-action-button">การจัดการร้านค้า</Link>
                <Link to="/issue-reports" className="admin-action-button">ปัญหาที่ถูกรายงาน</Link>
                <Link to="/help-center" className="admin-action-button">ศูนย์ช่วยเหลือ</Link>
            </section>
            <style jsx>{`
                .admin-container {
                    background-color: #ffffff;
                    padding: 53px 17px;
                    border-radius: 20px;
                    box-shadow: 0px 0.05px 2px 1px rgba(0, 0, 0, 0.25);
                    display: flex;
                    flex-direction: column;
                    max-width: 390px;
                    margin: 0 auto;
                    gap: 10px;
                    align-items: center; /* Center the content */
                }

                .admin-header {
                    font-size: 20px;
                    font-weight: 700;
                    color: #000;
                    text-align: center;
                    margin-bottom: 20px;
                }

                .admin-stats {
                    display: flex;
                    flex-direction: column;
                    width: 100%; /* Ensure the section spans the full width */
                    gap: 10px;
                    align-items: center; /* Center the stats row */
                }

                .stats-row {
                    display: flex;
                    justify-content: space-between;
                    gap: 10px;
                    width: 100%; /* Full width for proper alignment */
                }

                .chart-card,
                .recycling-summary {
                    flex: 1;
                    border-radius: 20px;
                    padding: 15px;
                    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25), 0px -1px 1px rgba(0, 0, 0, 0.25);
                    background-color: #ffffff;
                }

                .chart-card {
                    text-align: center;
                }

                .user-count {
                    font-size: 25px;
                    font-weight: 700;
                    margin-bottom: 10px;
                }

                .recycling-summary-title {
                    font-size: 18px;
                    font-weight: 700;
                    margin-bottom: 10px;
                }

                .smartbin-stats {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                .smartbin-detail {
                    display: flex;
                    justify-content: space-between;
                    padding: 10px;
                    border-radius: 10px;
                    background-color: #f9f9f9;
                }

                .smartbin-label {
                    font-size: 16px;
                    font-weight: 600;
                }

                .smartbin-value {
                    font-size: 20px;
                    font-weight: 700;
                    color: #9E76B4;
                }

                .smartbin-unit {
                    font-size: 14px;
                    color: #777;
                }

                .weekly-value {
                    font-size: 14px;
                }

                .weekly-value-amount {
                    font-size: 20px;
                    font-weight: 700;
                }

                .map-section {
                    background-color: #ffffff;
                    border-radius: 20px;
                    padding: 15px;
                    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25), 0px -1px 1px rgba(0, 0, 0, 0.25);
                    text-align: center;
                    width: 100%; /* Full width for map section */
                }

                .admin-actions {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-around;
                    gap: 10px;
                    width: 100%; /* Full width for actions */
                }

                .admin-action-button {
                    background-color: #ffffff;
                    color: #000;
                    border-radius: 20px;
                    padding: 15px;
                    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25), 0px -1px 1px rgba(0, 0, 0, 0.25);
                    text-align: center;
                    width: 45%;
                    font-size: 16px;
                    font-weight: 600;
                    text-decoration: none;
                }
            `}</style>
        </section>
    );
}
