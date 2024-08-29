import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function UserDetail() {
  const { userId } = useParams();
  const user = {
    id: '00001',
    username: 'username1',
    phone: '0900000000',
    createdDate: '15-05-2567',
  }; // Replace with actual user data fetching logic

  return (
    <section className="user-detail-container">
      <header className="header">
        <Link to="/user-management">
          <button className="back-button">←</button>
        </Link>
        <h1 className="title">การจัดการผู้ใช้</h1>
      </header>
      
      <div className="user-detail-form">
        <div className="form-group">
          <label>ไอดี</label>
          <input type="text" value={user.id} readOnly />
        </div>
        <div className="form-group">
          <label>ชื่อผู้ใช้</label>
          <input type="text" value={user.username} />
        </div>
        <div className="form-group">
          <label>เบอร์โทรศัพท์</label>
          <input type="text" value={user.phone} />
        </div>
        <div className="form-group">
          <label>วันที่สร้าง</label>
          <input type="text" value={user.createdDate} readOnly />
        </div>
        <button className="save-button">แก้ไข</button>
      </div>

    <style jsx>{`
        .user-detail-container {
            display: flex;
            flex-direction: column;
            max-width: 390px;
            margin: 0 auto;
            padding: 53px 17px;
            background-color: #fffff;
            backdrop-filter: blur(0px);
            border-radius: 21px;
            gap: 10px;
        }

        .header {
            display: flex;
            align-items: center;
            gap: 10px;
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
        }

        .user-detail-form {
            background-color: var(--primary-color-container);
            border-radius: var(--border-radius);
            padding: 15px;
            box-shadow: var(--box-shadow);
        }

        .form-group {
            margin-bottom: 15px;
        }

        .form-group label {
            font-family: var(--font-family);
            font-size: var(--font-size-small);
            color: var(--secondary-color);
            font-weight: 600;
        }

        .form-group input {
            width: 100%;
            padding: 10px;
            border-radius: var(--border-radius);
            border: 1px solid #ddd;
            font-size: var(--font-size-small);
            margin-top: 5px;
        }

        .save-button {
            background-color: var(--primary-color);
            color: var(--secondary-color-font);
            border: none;
            padding: 10px;
            border-radius: var(--border-radius);
            cursor: pointer;
            font-family: var(--font-family);
            width: 100%;
            text-align: center;
        }
    `}</style>

    </section>
  );
}
