import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

export default function ShopDetail() {
  const { shopId } = useParams();
  const navigate = useNavigate();

  // Sample data for demonstration
  const shops = [
    { id: '1', name: 'CAMT SHOP', address: '239 ถ.ห้วยแก้ว ต.สุเทพ...', createdDate: '15-05-2567' },
    { id: '2', name: 'Tech Store', address: '120/45 ซ.ช้างเผือก ต.ช้างเผือก...', createdDate: '20-05-2567' },
    // Add more shop data if necessary
  ];

  const shop = shops.find((shop) => shop.id === shopId);

  if (!shop) {
    return <p className="text-center text-red-500">Shop not found</p>;
  }

  return (
    <section className="max-w-lg mx-auto p-6 bg-white rounded-lg">
      <header className="flex items-center gap-3 mb-6">
        <Link to="/shop-management">
          <button className="bg-purple-600 text-white rounded-full px-3 py-2 text-lg">
            ←
          </button>
        </Link>
        <h1 className="text-xl font-bold text-gray-800">การจัดการร้านค้า</h1>
      </header>

      <div className="bg-gray-100 rounded-lg p-4 shadow-sm mb-6">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">ไอดี</label>
          <input
            type="text"
            value={shop.id}
            readOnly
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg bg-gray-50"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">ร้านค้า</label>
          <input
            type="text"
            value={shop.name}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">ที่อยู่</label>
          <input
            type="text"
            value={shop.address}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">วันที่สร้าง</label>
          <input
            type="text"
            value={shop.createdDate}
            readOnly
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg bg-gray-50"
          />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-500 transition">
          แก้ไข
        </button>
        <button className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition"
            onClick={() => navigate(`/shop-management/${shopId}/add-product`)}>
          เพิ่มสินค้า
        </button>
      </div>
    </section>
  );
}
