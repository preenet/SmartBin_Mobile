import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TestImage from "../../images/TEST_SHOP_IMAGE.jpg";
import { getUserPointSummary } from '../../services/api';
import useToken from "../../hooks/useToken";

export default function RedeemShop() {
  const [points, setPoints] = useState(0);
  const { getUser } = useToken();

  useEffect(() => {
    const fetchUserPoints = async () => {
      try {
        const user = getUser();
        const data = await getUserPointSummary(user.user_id);
        setPoints(data.total_point);
      } catch (error) {
        console.error('Error fetching user points:', error);
      }
    };

    fetchUserPoints();
  }, []);

  const rewards = [
    {
      id: 1,
      name: 'เสื้อยืดสกรีน ครบรอบ 20 ปี',
      points: 100,
      image: TestImage,
    },
    {
      id: 2,
      name: 'เสื้อยืดสกรีน ครบรอบ 20 ปี',
      points: 100,
      image: TestImage,
    },
    {
      id: 3,
      name: 'เสื้อยืดสกรีน ครบรอบ 20 ปี',
      points: 100,
      image: TestImage,
    },
    {
      id: 4,
      name: 'เสื้อยืดสกรีน ครบรอบ 20 ปี',
      points: 100,
      image: TestImage,
    },
  ];

  return (
    <section className="flex flex-col gap-6 p-4">
      <header className="flex gap-2 items-center">
        <Link to="/home">
          <button className="bg-purple-600 text-white rounded-full px-3 py-2 text-lg">←</button>
        </Link>
        <h1 className="font-bold text-xl">แลกรางวัล</h1>
      </header>

      <div className="flex items-center justify-between border border-gray-300 rounded-lg p-4">
        <p className="font-medium">คุณมีแต้มทั้งหมด</p>
        <p className="text-lg font-semibold">{points} คะแนน</p>
      </div>

      <section className="space-y-6">
        {/* Recommended Section */}
        <div>
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-lg">แนะนำสำหรับคุณ</h2>
            <Link to="/all-rewards" className="text-sm text-blue-600">ดูทั้งหมด</Link>
          </div>
          <div className="flex gap-4 overflow-x-auto py-2">
            {rewards.map(reward => (
              <div key={reward.id} className="flex flex-col items-center border border-gray-300 rounded-lg p-4 min-w-[140px]">
                <img src={reward.image} alt={reward.name} className="w-full rounded-lg mb-4" />
                <p className="font-semibold text-sm">{reward.name}</p>
                <p className="text-purple-600 text-base font-bold">{reward.points} คะแนน</p>
                <Link to={`/redeem-shop/${reward.id}`}>
                  <button className="mt-2 bg-purple-600 text-white py-1 px-4 rounded-lg">ดูรางวัล</button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Donations Section */}
        <div>
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-lg">การบริจาค</h2>
            <Link to="/all-donations" className="text-sm text-blue-600">ดูทั้งหมด</Link>
          </div>
          <div className="flex gap-4 overflow-x-auto py-2">
            {rewards.map(reward => (
              <div key={reward.id} className="flex flex-col items-center border border-gray-300 rounded-lg p-4 min-w-[140px]">
                <img src={reward.image} alt={reward.name} className="w-full rounded-lg mb-4" />
                <p className="font-semibold text-sm">{reward.name}</p>
                <p className="text-purple-600 text-base font-bold">{reward.points} คะแนน</p>
                <Link to={`/redeem-shop/${reward.id}`}>
                  <button className="mt-2 bg-purple-600 text-white py-1 px-4 rounded-lg">ดูรางวัล</button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Clothes Section */}
        <div>
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-lg">เสื้อผ้า</h2>
            <Link to="/all-clothes" className="text-sm text-blue-600">ดูทั้งหมด</Link>
          </div>
          <div className="flex gap-4 overflow-x-auto py-2">
            {rewards.map(reward => (
              <div key={reward.id} className="flex flex-col items-center border border-gray-300 rounded-lg p-4 min-w-[140px]">
                <img src={reward.image} alt={reward.name} className="w-full rounded-lg mb-4" />
                <p className="font-semibold text-sm">{reward.name}</p>
                <p className="text-purple-600 text-base font-bold">{reward.points} คะแนน</p>
                <Link to={`/redeem-shop/${reward.id}`}>
                  <button className="mt-2 bg-purple-600 text-white py-1 px-4 rounded-lg">ดูรางวัล</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
