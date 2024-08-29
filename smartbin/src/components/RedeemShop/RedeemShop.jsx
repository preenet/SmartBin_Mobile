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
    <section className="main-container">
      <header className="header">
        <Link to="/home">
          <button className="back-button">←</button>
        </Link>
        <h1 className="title">แลกรางวัล</h1>
      </header>
      <div className="points-frame">
        <p className="points-text">คุณมีแต้มทั้งหมด</p>
        <p className="points-value">{points} คะแนน</p>
      </div>
      <section className="rewards-section">
        <div className="category">
          <h2 className="sub-title">แนะนำสำหรับคุณ</h2>
          <Link to="/all-rewards" className="view-all">ดูทั้งหมด</Link>
        </div>
        <div className="rewards-list-scroll">
          {rewards.map(reward => (
            <div key={reward.id} className="reward-card">
              <img src={reward.image} alt={reward.name} className="reward-image" />
              <p className="reward-name">{reward.name}</p>
              <p className="reward-points">{reward.points} คะแนน</p>
              <Link to={`/redeem-shop/${reward.id}`}>
                <button className="view-reward-button">ดูรางวัล</button>
              </Link>
            </div>
          ))}
        </div>

        <div className="category">
          <h2 className="sub-title">การบริจาค</h2>
          <Link to="/all-donations" className="view-all">ดูทั้งหมด</Link>
        </div>
        <div className="rewards-list-scroll">
          {rewards.map(reward => (
            <div key={reward.id} className="reward-card">
              <img src={reward.image} alt={reward.name} className="reward-image" />
              <p className="reward-name">{reward.name}</p>
              <p className="reward-points">{reward.points} คะแนน</p>
              <Link to={`/redeem-shop/${reward.id}`}>
                <button className="view-reward-button">ดูรางวัล</button>
              </Link>
            </div>
          ))}
        </div>

        <div className="category">
          <h2 className="sub-title">เสื้อผ้า</h2>
          <Link to="/all-clothes" className="view-all">ดูทั้งหมด</Link>
        </div>
        <div className="rewards-list-scroll">
          {rewards.map(reward => (
            <div key={reward.id} className="reward-card">
              <img src={reward.image} alt={reward.name} className="reward-image" />
              <p className="reward-name">{reward.name}</p>
              <p className="reward-points">{reward.points} คะแนน</p>
              <Link to={`/redeem-shop/${reward.id}`}>
                <button className="view-reward-button">ดูรางวัล</button>
              </Link>
            </div>
          ))}
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

        .main-container {
          background-color: var(--primary-color-container);
          display: flex;
          width: auto;
          padding: 53px 17px;
          flex-direction: column;
          margin: 0 auto;
          height: auto;
          justify-content: center;
          align-items: center;
        }

        .header {
          display: flex;
          justify-content: start;
          align-items: center;
          width: 100%;
          max-width: 480px;
          margin-bottom: 20px;
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
          margin: 0;
          padding-left: 10px;
        }

        .points-frame {
          border: 1px solid #ddd;
          border-radius: var(--border-radius);
          padding: 10px;
          width: 100%;
          max-width: 480px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .points-text {
          font-family: var(--font-family);
          font-size: var(--font-size-small);
          color: var(--secondary-color);
          font-weight: 600;
          padding-left: 10px;
        }

        .points-value {
          font-family: var(--font-family);
          font-size: var(--font-size-large);
          color: var(--secondary-color);
          font-weight: 700;
          padding-right: 10px;
        }

        .rewards-section {
          width: 100%;
          max-width: 480px;
        }

        .category {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 20px;
          margin-bottom: 10px;
        }

        .sub-title {
          font-family: var(--font-family);
          font-size: var(--font-size-base);
          font-weight: 600;
          color: var(--secondary-color);
          margin: 0;
        }

        .view-all {
          font-family: var(--font-family);
          font-size: var(--font-size-small);
          font-weight: 400;
          color: var(--primary-color);
          text-decoration: none;
        }

        .rewards-list-scroll {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          padding-bottom: 10px;
        }

        .reward-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          border-radius: var(--border-radius);
          background-color: var(--primary-color-container);
          box-shadow: var(--box-shadow);
          padding: 15px;
          text-align: center;
          min-width: 140px;
          scroll-snap-align: start;
        }

        .reward-image {
          width: 100%;
          border-radius: var(--border-radius);
          margin-bottom: 10px;
        }

        .reward-name {
          font-family: var(--font-family);
          font-size: var(--font-size-small);
          font-weight: 600;
          color: var(--secondary-color);
          margin-bottom: 5px;
        }

        .reward-points {
          font-family: var(--font-family);
          font-size: var(--font-size-base);
          color: var(--primary-color);
          font-weight: 700;
          margin-bottom: 10px;
        }

        .view-reward-button {
          background-color: var(--primary-color);
          color: var(--secondary-color-font);
          border: none;
          padding: 10px 20px;
          border-radius: var(--border-radius);
          cursor: pointer;
          font-family: var(--font-family);
        }
      `}</style>
    </section>
  );
}