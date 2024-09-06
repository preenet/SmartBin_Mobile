import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function UserManagement() {
  const navigate = useNavigate();

  const users = [
    { id: '1', username: 'username1', phone: '0900000000', createdDate: '15-05-2567' },
    { id: '2', username: 'username2', phone: '0900000000', createdDate: '15-05-2567' },
    { id: '3', username: 'username3', phone: '0900000000', createdDate: '15-05-2567' },
  ];

  const handleRowClick = (userId) => {
    navigate(`/user-management/${userId}`);
  };

  return (
    <section className="w-full mx-auto p-4 md:p-8 flex flex-col gap-4">
      <header className="flex items-center gap-3 mb-0">
        <Link to="/admin-control-panel">
          <button className="bg-purple-600 text-white rounded-full px-3 py-2 text-lg">
            ←
          </button>
        </Link>
        <h1 className="text-xl font-bold">การจัดการบัญชีผู้ใช้</h1>
      </header>
      
      <div className="flex justify-between items-center mb-0">
        <input 
          type="text" 
          placeholder="ค้นหาผู้ใช้" 
          className="w-2/3 flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
        />
        <select className="w-1/3 ml-3 p-2 border border-gray-300 rounded-lg">
          <option value="id">ไอดี</option>
          <option value="username">ชื่อผู้ใช้</option>
          <option value="phone">เบอร์โทรศัพท์</option>
        </select>
      </div>

      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b font-semibold">ไอดี</th>
            <th className="px-4 py-2 border-b font-semibold">ชื่อผู้ใช้</th>
            <th className="px-4 py-2 border-b font-semibold">เบอร์โทรศัพท์</th>
            <th className="px-4 py-2 border-b font-semibold">วันที่สร้าง</th>
          </tr>
        </thead>
        <tbody>
        {users.map((user, index) => (
          <tr
            key={index}
            onClick={() => handleRowClick(user.id)}
            className="hover:bg-gray-100 transition cursor-pointer"
          >
            <td className="px-4 py-2 border-b text-center">{user.id}</td>
            <td className="px-1 py-2 border-b text-center">{user.username}</td>
            <td className="px-1 py-2 border-b text-center">{user.phone}</td>
            <td className="px-1 py-2 border-b text-center">{user.createdDate}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </section>
  );
}
