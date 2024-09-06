import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function UserDetail() {
  const { userId } = useParams();

  const users = [
    { id: '1', username: 'username1', phone: '0900000000', createdDate: '15-05-2567' },
    { id: '2', username: 'username2', phone: '0900000000', createdDate: '15-05-2567' },
    { id: '3', username: 'username3', phone: '0900000000', createdDate: '15-05-2567' },
  ];

  const user = users.find((user) => user.id === userId);

  if (!user) {
    return <p className="text-center text-red-500">User not found</p>;
  }

  return (
    <section className="max-w-lg mx-auto p-6 bg-white rounded-lg ">
      <header className="flex items-center gap-3 mb-4">
        <Link to="/user-management">
          <button className="bg-purple-600 text-white rounded-full px-3 py-2 text-lg">
            ←
          </button>
        </Link>
        <h1 className="text-xl font-bold text-gray-800">การจัดการผู้ใช้</h1>
      </header>
      
      <div className="bg-gray-100 rounded-lg p-4 shadow-sm">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">ไอดี</label>
          <input
            type="text"
            value={user.id}
            readOnly
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg bg-gray-50"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">ชื่อผู้ใช้</label>
          <input
            type="text"
            value={user.username}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">เบอร์โทรศัพท์</label>
          <input
            type="text"
            value={user.phone}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">วันที่สร้าง</label>
          <input
            type="text"
            value={user.createdDate}
            readOnly
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg bg-gray-50"
          />
        </div>
        <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-500 transition">
          แก้ไข
        </button>
      </div>
    </section>
  );
}
