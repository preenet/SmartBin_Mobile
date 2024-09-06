import React from 'react';
import { Link } from 'react-router-dom';
import TestImage from "../../images/TEST_SHOP_IMAGE.jpg";

export default function ProductDetail() {
  const product = {
    id: 1,
    name: 'เสื้อยืดสทศ ครบรอบ 20 ปี',
    points: 100,
    image: TestImage,
    description: 'เสื้อยืดสทศ ครบรอบ 20 ปี วิทยาศาสตร์และเทคโนโลยี',
    storeLocation: { lat: 18.80084905662726, lng: 98.950352098965380 },
  };

  const handleNavigateToStore = () => {
    window.location.href = `https://www.google.com/maps/dir/?api=1&destination=${product.storeLocation.lat},${product.storeLocation.lng}`;
  };

  const handleRedeemReward = () => {
    // Logic to redeem the reward
    alert('Reward redeemed successfully!');
  };

  return (
    <section className="flex flex-col bg-white p-5 rounded-lg shadow-md max-w-lg mx-auto">
      <header className="flex justify-between items-center mb-4">
        <Link to="/redeem-shop">
          <button className="bg-purple-600 text-white rounded-full px-3 py-2 text-lg">←</button>
        </Link>
        <h1 className="text-lg font-bold">{product.name}</h1>
      </header>
      
      <img src={product.image} alt={product.name} className="w-full rounded-lg mb-4" />
      
      <section className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        <p className="text-purple-600 font-bold text-lg mb-4">{product.points} คะแนน</p>
        <p className="text-gray-700 mb-6">{product.description}</p>
        
        <div className="flex justify-between gap-4">
          <button 
            className="bg-green-500 text-white w-1/2 py-2 rounded-lg"
            onClick={handleNavigateToStore}
          >
            นำทางไปร้านค้า
          </button>
          <button 
            className="bg-purple-600 text-white w-1/2 py-2 rounded-lg"
            onClick={handleRedeemReward}
          >
            แลกรางวัล
          </button>
        </div>
      </section>
    </section>
  );
}
