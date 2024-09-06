import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import useToken from "../../hooks/useToken";
import { getUserPointSummary, getUserActivitiesData } from '../../services/api';
import axios from 'axios';
import achievement1 from '../../images/A/ACHIEVEMENT1.png';

export default function Stat() {
  const [summary, setSummary] = useState({ total_point: 0, carbon_credit: 0, quantity: 0 });
  const [activities, setActivities] = useState([]);
  const [highlightedDates, setHighlightedDates] = useState([]);
  const [materialSummary, setMaterialSummary] = useState({ plastic: 0, tin: 0, glass: 0 }); 
  const [isLoading, setIsLoading] = useState(true);
  const [achievements, setAchievements] = useState([
    {
      img: "https://cdn3.emoji.gg/emojis/79807-love.png",
      name: "test 1"
    },
    {
      img: "https://cdn3.emoji.gg/emojis/79807-love.png",
      name: "test 1"
    },
    {
      img: "https://cdn3.emoji.gg/emojis/79807-love.png",
      name: "test 1"
    },
    {
      img: "https://cdn3.emoji.gg/emojis/79807-love.png",
      name: "test 1"
    },
    {
      img: "https://cdn3.emoji.gg/emojis/79807-love.png",
      name: "test 1"
    },
  ]);
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


        // Check for achievements
        if (activitiesResponse.data.length > 0) {
          setAchievements([achievement1]); // Set the first achievement image
        }

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

  return (
    <section className="flex flex-col gap-4 p-4">
      <header className="flex justify-between gap-2 items-center">
        <Link to="/home">
          <button className="bg-purple-600 text-white rounded-full px-3 py-2 text-lg">←</button>
        </Link>
        <h1 className="font-bold text-xl">ภาพรวมของคุณ {user?.username}</h1>
        <button className="text-xl" onClick={() => window.location.href = '/settings'}>⚙️</button>
      </header>
      <section className="flex flex-col gap-4">
        <div className="border rounded-md flex flex-col items-center p-4 gap-4">
          <p className="font-semibold text-lg">คุณมีแต้มทั้งหมด</p>
          <p className="font-semibold text-lg text-primary">{summary.total_point} คะแนน</p>
        </div>
        <div className="flex flex-col gap-4 border p-4 rounded-md items-center">
          <h2 className="text-lg font-semibold">จำนวนวันที่คุณรีไซเคิลกับ Smart Bin</h2>
          <Calendar
            tileClassName={tileClassName}
          />
          <p className="font-light"><span className="font-medium">สุดยอด!</span> คุณได้รีไซเคิลกับ Smart Bin {highlightedDates.length} วันในเดือนนี้ 🔥</p>
        </div>
        <div className="flex flex-col gap-4 border p-4 rounded-md items-center">
          <p className="font-semibold text-lg">ลดคาร์บอนได้ทั้งหมด</p>
          <p className="font-semibold text-lg text-primary">{summary.carbon_credit.toFixed(3)} ตัน</p>
        </div>
        <div className="flex flex-col gap-4 border p-4 rounded-md items-center">
          <p className="font-semibold text-lg">รีไซเคิลไปทั้งหมด</p>
          <p className="font-semibold text-lg text-primary">{summary.quantity} ครั้ง</p>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="flex flex-col gap-4 border p-4 rounded-md items-center justify-between">
              <p className="font-semibold text-xl text-primary">{materialSummary.plastic}</p> {/* Display plastic quantity */}
              <p className="font-semibold whitespace-break-spaces">ขวดพลาสติก</p>
            </div>
            <div className="flex flex-col gap-4 border p-4 rounded-md items-center justify-between">
              <p className="font-semibold text-xl text-primary">{materialSummary.tin}</p> {/* Display tin quantity */}
              <p className="font-semibold whitespace-break-spaces">กระป๋องอลูมิเนียม</p>
            </div>
            <div className="flex flex-col gap-4 border p-4 rounded-md items-center justify-between">
              <p className="font-semibold text-xl text-primary">{materialSummary.glass}</p> {/* Display glass quantity */}
              <p className="font-semibold whitespace-break-spaces">ขวดแก้ว</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 border p-4 rounded-md items-center">
          <div className="flex justify-between gap-4 items-center w-full">
            <h2 className="text-lg font-semibold">ความสำเร็จ</h2>
            <Link to="/all-achievements" className="text-sm text-neutral-500">ดูทั้งหมด</Link>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {achievements.length > 0 ? (
              achievements.map((achievement, index) => (
                <div key={index} className="border rounded-md p-2 flex flex-col gap-2">
                  <img
                    src={achievement.img}
                    alt="Achievement"
                    className=" aspect-square object-cover"
                  />
                  <p>
                    {achievement.name}
                  </p>
                </div>
              ))
            ) : (
              <p className='text-neutral-500 col-span-3'>ยังไม่มีความสำเร็จ</p>
            )}
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
