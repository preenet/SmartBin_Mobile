import React from 'react';
import { Link } from 'react-router-dom';

export default function UserManagement() {
  const users = [
    { id: '00001', username: 'username1', phone: '0900000000', createdDate: '15-05-2567' },
    { id: '00002', username: 'username2', phone: '0900000000', createdDate: '15-05-2567' },
    { id: '00003', username: 'username3', phone: '0900000000', createdDate: '15-05-2567' },
  ];

  return (
    <section className="user-management-container">
      <header className="header">
        <Link to="/admin-control-panel">
          <button className="back-button">←</button>
        </Link>
        <h1 className="title">การจัดการบัญชีผู้ใช้</h1>
      </header>
      
      <div className="search-sort-section">
        <input type="text" placeholder="ค้นหาผู้ใช้" className="search-input" />
        <select className="sort-select">
          <option value="id">จัดเรียงตาม: ไอดี</option>
          <option value="username">ชื่อผู้ใช้</option>
          <option value="phone">เบอร์โทรศัพท์</option>
        </select>
      </div>

      <table className="user-table">
        <thead>
          <tr>
            <th>ไอดี</th>
            <th>ชื่อผู้ใช้</th>
            <th>เบอร์โทรศัพท์</th>
            <th>วันที่สร้าง</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>
                <Link to={`/user-management/${user.id}`}>
                  {user.id}
                </Link>
              </td>
              <td>{user.username}</td>
              <td>{user.phone}</td>
              <td>{user.createdDate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <style jsx>{`
        :root {
          --primary-color: #9E76B4;
          --primary-color-container: #fff;
          --secondary-color: #000;
          --secondary-color-font: #fff;
          --font-family: 'Mitr', sans-serif;
          --font-size-base: 18px;
          --font-size-large: 18px;
          --font-size-small: 16px;
          --border-radius: 20px;
          --box-shadow: 0px 0.05px 2px 1px rgba(0, 0, 0, 0.25);
          --box-shadow-button: 0px 1px 1px rgba(0, 0, 0, 0.25), 0px -1px 1px rgba(0, 0, 0, 0.25);
        }

        .user-management-container {
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

        .search-sort-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .search-input {
          flex: 1;
          padding: 10px;
          border-radius: var(--border-radius);
          border: 1px solid #ddd;
          font-size: var(--font-size-small);
        }

        .sort-select {
          margin-left: 10px;
          padding: 10px;
          border-radius: var(--border-radius);
          border: 1px solid #ddd;
          font-size: var(--font-size-small);
        }

        .user-table {
          width: 100%;
          border-collapse: collapse;
          font-family: var(--font-family);
        }

        .user-table th,
        .user-table td {
          border: 1px solid #ddd;
          padding: 10px;
          text-align: left;
        }

        .user-table th {
          background-color: var(--primary-color-container);
          color: var(--secondary-color);
          font-weight: 600;
        }

        .user-table td {
          background-color: #f9f9f9;
          color: var(--secondary-color);
        }
      `}</style>
    </section>
  );
}
