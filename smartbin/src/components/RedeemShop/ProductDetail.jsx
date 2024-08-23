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
    <section className="product-detail-container">
      <header className="header">
        <Link to="/redeem-shop">
          <button className="back-button">←</button>
        </Link>
        <h1 className="title">{product.name}</h1>
      </header>
      <img src={product.image} alt={product.name} className="product-image" />
      <section className="product-info">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-points">{product.points} คะแนน</p>
        <p className="product-description">{product.description}</p>
        <div className="action-buttons">
          <button className="navigate-button" onClick={handleNavigateToStore}>นำทางไปร้านค้า</button>
          <button className="redeem-button" onClick={handleRedeemReward}>แลกรางวัล</button>
        </div>
      </section>
      <style jsx>{`
        .product-detail-container {
          background-color: var(--primary-color-container);
          padding: 20px;
          border-radius: var(--border-radius);
          box-shadow: var(--box-shadow);
          width: 100%;
          max-width: 480px;
          margin: 0 auto;
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

        .product-image {
          width: 100%;
          border-radius: var(--border-radius);
          margin-bottom: 20px;
        }

        .product-info {
          background-color: #f9f9f9;
          padding: 20px;
          border-radius: var(--border-radius);
        }

        .product-name {
          font-family: var(--font-family);
          font-size: var(--font-size-large);
          font-weight: 700;
          margin-bottom: 10px;
        }

        .product-points {
          font-family: var(--font-family);
          font-size: var(--font-size-small);
          color: var(--primary-color);
          font-weight: 700;
          margin-bottom: 20px;
        }

        .product-description {
          font-family: var(--font-family);
          font-size: var(--font-size-base);
          color: var(--secondary-color);
          margin-bottom: 20px;
        }

        .action-buttons {
          display: flex;
          justify-content: space-between;
          gap: 10px;
        }

        .navigate-button, .redeem-button {
          flex: 1;
          padding: 10px;
          border-radius: var(--border-radius);
          border: none;
          cursor: pointer;
          font-family: var(--font-family);
          font-size: var(--font-size-small);
        }

        .navigate-button {
          background-color: #4CAF50;
          color: white;
        }

        .redeem-button {
          background-color: var(--primary-color);
          color: var(--secondary-color-font);
        }
      `}</style>
    </section>
  );
}
