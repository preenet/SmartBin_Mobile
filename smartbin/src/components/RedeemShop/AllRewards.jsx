import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TestImage from "../../images/TEST_SHOP_IMAGE.jpg";
import { getUserPointSummary } from '../../services/api';
import useToken from "../../hooks/useToken";

export default function AllRewards() {
    const [isLoading, setIsLoading] = useState(true);
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
        <section className="flex flex-col p-4 items-center gap-6 max-w-4xl mx-auto">
            <header className="flex gap-2 items-center w-full mb-4">
                <Link to="/redeem-shop">
                    <button className="bg-purple-600 text-white rounded-full px-3 py-2 text-lg">←</button>
                </Link>
                <h1 className="font-bold text-xl">แลกรางวัลทั้งหมด</h1>
            </header>

            <div className="flex items-center justify-between border border-gray-300 rounded-lg p-4 w-full">
                <p className="font-medium">คุณมีแต้มทั้งหมด</p>
                <p className="text-lg font-semibold">{points} คะแนน</p>
            </div>

            {isLoading ? (
                <p className="text-center text-gray-500">กำลังโหลด...</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {rewards.map(reward => (
                        <div key={reward.id} className="flex flex-col items-center border border-gray-300 rounded-lg p-4">
                            <img src={reward.image || TestImage} alt={reward.name} className="w-full rounded-lg mb-4" />
                            <p className="font-semibold text-sm">{reward.name}</p>
                            <p className="text-purple-600 text-base font-bold">{reward.points} คะแนน</p>
                            <Link to={`/redeem-shop/${reward.id}`}>
                                <button className="mt-2 bg-purple-600 text-white py-1 px-4 rounded-lg">ดูรางวัล</button>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
