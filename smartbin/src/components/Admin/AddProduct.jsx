import React from 'react';
import { Link } from 'react-router-dom';

export default function AddProduct() {
  return (
    <section className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <header className="flex items-center gap-3 mb-6">
        <Link to="/shop-management">
          <button className="bg-purple-600 text-white rounded-full px-3 py-2 text-lg">
            ←
          </button>
        </Link>
        <h1 className="text-xl font-bold text-gray-800">เพิ่มสินค้า</h1>
      </header>

      <div className="bg-gray-100 rounded-lg p-4 mb-0">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">ชื่อสินค้า</label>
          <input
            type="text"
            placeholder="ชื่อสินค้า"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">รายละเอียดสินค้า</label>
          <textarea
            placeholder="รายละเอียดสินค้า"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">หมวดหมู่ของสินค้า</label>
          <select className="mt-1 block w-full p-2 border border-gray-300 rounded-lg">
            <option>หมวดหมู่</option>
            {/* Add categories as options */}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">ราคาของสินค้า</label>
          <input
            type="text"
            placeholder="ราคาของสินค้า"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">จำนวนของสินค้า</label>
          <input
            type="text"
            placeholder="จำนวนของสินค้า"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">รูปภาพของสินค้า</label>
          <div className="flex items-center gap-2">
            <input type="file" className="hidden" id="productImage" />
            <label htmlFor="productImage" className="cursor-pointer">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex justify-center items-center">
              📂
              </div>
            </label>
          </div>
        </div>
      </div>

      <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-500 transition">
        ส่ง
      </button>
    </section>
  );
}
