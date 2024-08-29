import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import useToken from "../../hooks/useToken";
import { getUserPointSummary, getUserActivitiesData } from '../../services/api';

export default function Stat() {
  const [summary, setSummary] = useState({ total_point: 0, carbon_credit: 0, quantity: 0 });
  const [activities, setActivities] = useState([]);
  const [highlightedDates, setHighlightedDates] = useState([]);
  const [materialSummary, setMaterialSummary] = useState({ plastic: 0, tin: 0, glass: 0 }); 
  const [isLoading, setIsLoading] = useState(true);
  const { getUser, getToken } = useToken();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const userData = getUser();
        const token = getToken();

        if (!userData || !token) {
          alert('Please log in');
          window.location.href = '/login';
          return;
        }

        setUser(userData);

        const summaryResponse = await getUserPointSummary(userData.user_id);
        setSummary(summaryResponse);

        const activitiesResponse = await getUserActivitiesData(userData.user_id);
        setActivities(activitiesResponse);

        const materialSummary = { plastic: 0, tin: 0, glass: 0 };
        activitiesResponse.forEach(activity => {
          if (activity.material === 'plastic') materialSummary.plastic += activity.quantity;
          if (activity.material === 'tin') materialSummary.tin += activity.quantity;
          if (activity.material === 'glass') materialSummary.glass += activity.quantity;
        });
        setMaterialSummary(materialSummary);

        const dates = activitiesResponse.map(activity => new Date(activity.timestamp));
        setHighlightedDates(dates);

        setIsLoading(false);
      } catch (error) {
        console.error("Error loading data:", error);
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      if (highlightedDates.find(d => d.toDateString() === date.toDateString())) {
        return 'highlight';
      }
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="stat-container">
      <header className="header">
        <Link to="/home">
          <button className="back-button">←</button>
        </Link>
        <h1 className="title">ภาพรวมของคุณ {user?.username}</h1>
        <button className="settings-button" onClick={() => window.location.href = '/settings'}>⚙️</button>
      </header>
      <section className="points-section">
        <div className="points-card">
          <p className="points-title">คุณมีแต้มทั้งหมด</p>
          <p className="points-value">{summary.total_point} คะแนน</p>
        </div>
        <div className="calendar-section">
          <h2 className="sub-title">จำนวนวันที่คุณรีไซเคิลกับ Smart Bin</h2>
          <Calendar
            tileClassName={tileClassName}
          />
          <p className="calendar-info">สุดยอด! คุณได้รีไซเคิลกับ Smart Bin {highlightedDates.length} วันในเดือนนี้ 🔥</p>
        </div>
        <div className="carbon-credit">
          <p className="stat-title">ลดคาร์บอนได้ทั้งหมด</p>
          <p className="stat-value">{summary.carbon_credit.toFixed(3)} ตัน</p>
        </div>
        <div className="recycling-stats">
          <p className="stat-title">รีไซเคิลไปทั้งหมด</p>
          <p className="stat-value">{summary.quantity} ครั้ง</p>
          <div className="recycling-details">
            <div className="detail-card">
              <p className="detail-value">{materialSummary.plastic}</p> {/* Display plastic quantity */}
              <p className="detail-label">ขวดพลาสติก</p>
            </div>
            <div className="detail-card">
              <p className="detail-value">{materialSummary.tin}</p> {/* Display tin quantity */}
              <p className="detail-label">กระป๋องอลูมิเนียม</p>
            </div>
            <div className="detail-card">
              <p className="detail-value">{materialSummary.glass}</p> {/* Display glass quantity */}
              <p className="detail-label">ขวดแก้ว</p>
            </div>
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

        .stat-container {
          background-color: var(--primary-color-container);
          display: flex;
          flex-direction: column;
          max-width: 390px;
          margin: 0 auto;
          padding: 53px 17px;
          border-radius: var(--border-radius);
          box-shadow: var(--box-shadow);
          gap: 10px;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .back-button {
          background-color: var(--primary-color);
          color: var(--secondary-color-font);
          border: none;
          padding: 10px;
          border-radius: var(--border-radius);
          cursor: pointer;
        }

        .title {
          font-family: var(--font-family);
          font-size: var(--font-size-large);
          font-weight: 700;
          color: var(--secondary-color);
        }

        .settings-button {
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
        }

        .points-section {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .points-card, .carbon-credit, .recycling-stats, .achievements-section {
          background-color: var(--primary-color-container);
          border-radius: var(--border-radius);
          padding: 15px;
          box-shadow: var(--box-shadow);
          text-align: center;
        }

        .points-title, .carbon-title, .stat-title, .sub-title {
          font-family: var(--font-family);
          font-size: var(--font-size-small);
          color: var(--secondary-color);
          font-weight: 600;
          margin-bottom: 10px;
        }

        .points-value, .stat-value, .carbon-value {
          font-family: var(--font-family);
          font-size: var(--font-size-large);
          color: var(--primary-color);
          font-weight: 700;
        }

        .calendar-section {
          background-color: #f9f9f9;
          border-radius: var(--border-radius);
          padding: 15px;
          box-shadow: var(--box-shadow);
          margin-bottom: 20px;
        }

        .calendar-info {
          margin-top: 10px;
          font-family: var(--font-family);
          font-size: var(--font-size-small);
          color: var(--secondary-color);
        }

        .recycling-details {
          display: flex;
          justify-content: space-between;
        }

        .detail-card {
          background-color: #f9f9f9;
          border-radius: var(--border-radius);
          padding: 10px;
          box-shadow: var(--box-shadow);
          text-align: center;
          flex: 1;
          margin: 0 5px;
        }

        .detail-value {
          font-family: var(--font-family);
          font-size: 24px;
          color: var(--primary-color);
          font-weight: 700;
        }

        .detail-label {
          font-family: var(--font-family);
          font-size: var(--font-size-small);
          color: var(--secondary-color);
          font-weight: 600;
        }

        .achievements-section {
          margin-top: 20px;
        }

        .achievements-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .achievements-list {
          display: flex;
          overflow-x: auto;
          gap: 10px;
          padding-top: 10px;
        }

        .achievement-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: var(--primary-color-container);
          border-radius: var(--border-radius);
          padding: 10px;
          box-shadow: var(--box-shadow);
          min-width: 100px;
        }

        .achievement-image {
          width: 50px;
          height: 50px;
          object-fit: cover;
          margin-bottom: 10px;
        }

        .achievement-image.grayscale {
          filter: grayscale(100%);
        }

        .achievement-name {
          font-family: var(--font-family);
          font-size: var(--font-size-small);
          color: var(--secondary-color);
          text-align: center;
        }
      `}</style>
    </section>
  );
}
