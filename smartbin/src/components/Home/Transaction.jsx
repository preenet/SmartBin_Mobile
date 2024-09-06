import React, { useState } from "react";

const materialTranslations = {
  plastic: 'ขวดพลาสติก',
  tin: 'กระป๋อง',
  glass: 'แก้ว',
  other: 'อื่นๆ',
};

function Transaction({ placeName, date, point, details }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="border rounded-md p-4 flex flex-col gap-4">
      <div className="flex justify-between gap-8 w-full items-center" onClick={handleToggle}>
        <div className="flex flex-col gap-2 w-full">
          <p className="text-lg font-bold">{placeName}</p>
          <div className="flex justify-between w-full items-center">
            <p className="text-xs text-neutral-500">{new Date(date).toLocaleString()}</p>
            <p className="text-xl text-green-700">
              <span className=" text-green-500 font-semibold">+{point}</span> คะแนน
            </p>
          </div>
        </div>
        <p className="text-neutral-500">{isExpanded ? '▲' : '▼'}</p>
      </div>
      {isExpanded && (
        <div className="flex flex-col gap-2 border rounded-md p-4">
          <p className="font-semibold text-lg">รายการ</p>
          {details.length > 0 ? (
            details.map((detail, index) => (
              <div key={index} className="flex justify-between items-center">
                <span>{materialTranslations[detail.material] || detail.material}</span>
                <span className="text-green-700">+{detail.point} คะแนน</span>
              </div>
            ))
          ) : (
            <div>ไม่มีข้อมูล</div>
          )}
        </div>
      )}
    </div>
  );
}

export default Transaction;
