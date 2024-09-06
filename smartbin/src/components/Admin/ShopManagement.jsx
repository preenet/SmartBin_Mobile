import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function ShopManagement() {
    const navigate = useNavigate();

    const shops = [
        { id: '1', name: 'CAMT SHOP', address: '239 ถ.ห้วยแก้ว ต.สุเทพ...', createdDate: '15-05-2567' },
        { id: '2', name: 'Tech Store', address: '120/45 ซ.ช้างเผือก ต.ช้างเผือก...', createdDate: '20-05-2567' },
        { id: '3', name: 'Gadget World', address: '47 ถ.นิมมานเหมินทร์ ต.สุเทพ...', createdDate: '22-05-2567' },
        { id: '4', name: 'Digital Paradise', address: '12/99 ถ.เจริญเมือง ต.หนองป่าคร...', createdDate: '25-05-2567' },
        { id: '5', name: 'Book Haven', address: '58 ถ.สุเทพ ต.สุเทพ...', createdDate: '28-05-2567' },
        { id: '6', name: 'Coffee Corner', address: '19/8 ซ.หอประชุม ต.ช้างเผือก...', createdDate: '30-05-2567' },
        { id: '7', name: 'Green Mart', address: '101 ถ.มหิดล ต.ป่าแดด...', createdDate: '01-06-2567' },
        { id: '8', name: 'Smart Electronics', address: '5 ถ.ห้วยแก้ว ต.สุเทพ...', createdDate: '05-06-2567' },
        { id: '9', name: 'Urban Deli', address: '299/10 ถ.นิมมานเหมินทร์ ต.สุเทพ...', createdDate: '10-06-2567' },
        { id: '10', name: 'Fresh Market', address: '87/9 ถ.ช้างคลาน ต.ช้างคลาน...', createdDate: '15-06-2567' },
    ];

    const handleRowClick = (shopId) => {
        navigate(`/shop-management/${shopId}`);
    };

  return (
    <section className="max-w-lg mx-auto p-6 bg-white rounded-lg">
      <header className="flex items-center justify-between gap-3 mb-6">
        <Link to="/admin-control-panel">
          <button className="bg-purple-600 text-white rounded-full px-3 py-2 text-lg">
            ←
          </button>
        </Link>
        <h1 className="text-xl font-bold text-gray-800">การจัดการร้านค้า</h1>
        <button className="bg-purple-600 text-white rounded-full px-3 py-2 text-lg">
          +
        </button>
      </header>

      <div className="flex justify-between items-center mb-4">
        <input 
          type="text" 
          placeholder="ค้นหาผู้ใช้" 
          className="w-2/3 flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
        />
        <select className="w-1/3 ml-3 p-2 border border-gray-300 rounded-lg">
          <option value="id">ไอดี</option>
          <option value="name">ร้านค้า</option>
          <option value="address">ที่อยู่</option>
        </select>
      </div>

      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b font-semibold">ไอดี</th>
            <th className="px-4 py-2 border-b font-semibold">ร้านค้า</th>
            <th className="px-4 py-2 border-b font-semibold">ที่อยู่</th>
            <th className="px-4 py-2 border-b font-semibold">วันที่สร้าง</th>
          </tr>
        </thead>
        <tbody>
          {shops.map((shop, index) => (
            <tr
            key={index}
            onClick={() => handleRowClick(shop.id)}
            className="hover:bg-gray-100 transition cursor-pointer"
            >
              <td className="px-4 py-2 border-b text-center">{shop.id}</td>
              <td className="px-1 py-2 border-b text-center">{shop.name}</td>
              <td className="px-1 py-2 border-b text-center max-w-32 truncate ">{shop.address}</td>
              <td className="px-1 py-2 border-b text-center">{shop.createdDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
