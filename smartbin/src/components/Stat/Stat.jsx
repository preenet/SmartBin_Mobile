import React, { useEffect, useState } from 'react';
import { getUserStats } from '../../services/api'; // Assuming this endpoint provides the necessary data
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Stat.css'; // Assuming you have a CSS file for styling

export default function Stat() {
  const [stats, setStats] = useState({
    totalPoints: 0,
    totalCarbonReduction: 0,
    totalRecycled: 0,
    plasticBottles: 0,
    aluminumCans: 0,
    glassBottles: 0,
    recyclingDays: [],
    achievements: []
  });

  useEffect(() => {
    async function fetchData() {
      const data = await getUserStats();
      setStats(data);
    }
    fetchData();
  }, []);

  return (
    <div className="stat-container">
      <div className="header">
        <h2>ภาพรวมของคุณ Username</h2>
      </div>
      <div className="points-section">
        <h3>คุณมีแต้มทั้งหมด</h3>
        <p className="points">{stats.totalPoints} คะแนน</p>
      </div>
      <div className="calendar-section">
        <h3>จำนวนวันที่คุณรีไซเคิลกับ Smart Bin</h3>
        <Calendar
          tileClassName={({ date, view }) =>
            view === 'month' && stats.recyclingDays.includes(date.toISOString().split('T')[0])
              ? 'highlight'
              : null
          }
        />
        <p>สุดยอด! คุณได้รีไซเคิลขยะกับ Smart Bin {stats.recyclingDays.length} วันติดต่อแล้ว 🔥</p>
      </div>
      <div className="carbon-section">
        <h3>ลดคาร์บอนได้ทั้งหมด</h3>
        <p>{stats.totalCarbonReduction} ตัน</p>
      </div>
      <div className="recycle-stats">
        <h3>รีไซเคิลไปทั้งหมด</h3>
        <p>{stats.totalRecycled} กรัม</p>
        <p>ขวดพลาสติก: {stats.plasticBottles} ขวด</p>
        <p>กระป๋องอลูมิเนียม: {stats.aluminumCans} ขวด</p>
        <p>ขวดแก้ว: {stats.glassBottles} ขวด</p>
      </div>
      <div className="achievements">
        <h3>ความสำเร็จ</h3>
        <ul>
          {stats.achievements.length > 0 ? (
            stats.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))
          ) : (
            <p>นักรีไซเคิลมือใหม่</p>
          )}
        </ul>
      </div>
    </div>
  );
}