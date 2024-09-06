import React from 'react';
import { Link } from 'react-router-dom';
import achievement1 from '../../images/A/ACHIEVEMENT1.png'; // Import your achievement images

export default function AllAchievements() {
    const achievements = [
      {
        id: 1,
        name: 'นักรีไซเคิลมือใหม่',
        date: '01/05/2567',
        description: 'คุณได้เริ่มต้นใช้งาน Smart Bin ครั้งแรก!',
        image: achievement1,
        completed: false, // Mark whether the achievement is completed
      },
      {
        id: 1,
        name: 'นักรีไซเคิลมือใหม่',
        date: '01/05/2567',
        description: 'คุณได้เริ่มต้นใช้งาน Smart Bin ครั้งแรก!',
        image: achievement1,
        completed: false, // Mark whether the achievement is completed
      },
      {
        id: 1,
        name: 'นักรีไซเคิลมือใหม่',
        date: '01/05/2567',
        description: 'คุณได้เริ่มต้นใช้งาน Smart Bin ครั้งแรก!',
        image: achievement1,
        completed: false, // Mark whether the achievement is completed
      },
      {
        id: 1,
        name: 'นักรีไซเคิลมือใหม่',
        date: '01/05/2567',
        description: 'คุณได้เริ่มต้นใช้งาน Smart Bin ครั้งแรก!',
        image: achievement1,
        completed: false, // Mark whether the achievement is completed
      },
      {
        id: 1,
        name: 'นักรีไซเคิลมือใหม่',
        date: '01/05/2567',
        description: 'คุณได้เริ่มต้นใช้งาน Smart Bin ครั้งแรก!',
        image: achievement1,
        completed: false, // Mark whether the achievement is completed
      },
      // Add more achievements as needed
    ];

  return (
    <section className="p-4 flex flex-col gap-4">
      <header className="flex gap-2 items-center">
        <Link to="/stat">
          <button className="bg-purple-600 text-white rounded-full px-3 py-2 text-lg">←</button>
        </Link>
        <h1 className="font-bold text-xl">ความสำเร็จ</h1>
      </header>

      <section className="grid grid-cols-3 gap-2">
        {achievements.map((achievement) => (
          <Link to={`/achievement/${achievement.id}`} key={achievement.id} className="border p-2 rounded-md flex flex-col items-center gap-2 text-center">
            <img
              src={achievement.image}
              alt={achievement.name}
              className={`h-32 object-contain ${!achievement.completed ? 'grayscale' : ''}`}
            />
            <p className="text-sm">{achievement.name}</p>
          </Link>
        ))}
      </section>
    </section>
  );
}
