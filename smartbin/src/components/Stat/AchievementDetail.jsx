import React from 'react';
import { useParams, Link } from 'react-router-dom';
import achievement1 from '../../images/A/ACHIEVEMENT1.png'; // Import your achievement images

export default function AchievementDetail() {
    const { id } = useParams();
    const achievements = {
      1: {
        name: 'นักรีไซเคิลมือใหม่',
        date: '01/05/2567',
        description: 'คุณได้เริ่มต้นใช้งาน Smart Bin ครั้งแรก!',
        image: achievement1,
        completed: false, // Mark whether the achievement is completed
      },
      // Add more achievements as needed
    };

  const achievement = achievements[id];

  return (
    <section className="p-4 flex flex-col gap-4">
      <header className="flex gap-2 items-center">
        <Link to="/all-achievements">
          <button className="bg-purple-600 text-white rounded-full px-3 py-2 text-lg">←</button>
        </Link>
        <h1 className="font-bold text-xl">{achievement.name}</h1>
      </header>

      <section className="flex flex-col gap-4 items-center">
        <img
          src={achievement.image}
          alt={achievement.name}
          className={`h-64 object-contain ${!achievement.completed ? 'grayscale' : ''}`}
        />
        <p className="text-neutral-500">{achievement.date}</p>
        <p className="text-xl">{achievement.description}</p>
      </section>

      <style jsx>{`
        .achievement-detail-container {
          padding: 20px;
          background-color: #ffffff;
          max-width: 390px;
          margin: 0 auto;
          border-radius: 21px;
        }

        .header {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }

        .back-button {
          background-color: #9E76B4;
          color: #fff;
          border: none;
          border-radius: 50%;
          padding: 10px;
          cursor: pointer;
        }

        .title {
          font-family: 'Mitr', sans-serif;
          font-size: 24px;
          margin-left: 20px;
          color: #000;
        }

        .achievement-detail {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .achievement-detail-image {
          width: 120px;
          height: 120px;
          margin-bottom: 20px;
        }

        .achievement-date {
          font-family: 'Mitr', sans-serif;
          font-size: 14px;
          color: #777;
          margin-bottom: 10px;
        }

        .achievement-description {
          font-family: 'Mitr', sans-serif;
          font-size: 16px;
          color: #000;
        }
      `}</style>
    </section>
  );
}
