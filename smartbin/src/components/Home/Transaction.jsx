import React, { useState } from "react";
import './Transaction.css';  // Import a CSS file for styling

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
    <div className="transaction">
      <div className="transaction-details" onClick={handleToggle}>
        <div className="transaction-header">
          <p className="transaction-place-name">{placeName}</p>
          <div className="transaction-info">
            <p className="transaction-date">{new Date(date).toLocaleString()}</p>
            <p className="transaction-points">
              <span className="points-highlight">+{point}</span> คะแนน
            </p>
          </div>
        </div>
        <p className="transaction-toggle">{isExpanded ? '▲' : '▼'}</p>
      </div>
      {isExpanded && (
        <div className="transaction-extra-details">
          <p className="transaction-details-header">รายการ</p>
          {details.length > 0 ? (
            details.map((detail, index) => (
              <div key={index} className="transaction-detail">
                <span className="transaction-material">{materialTranslations[detail.material] || detail.material}</span>
                <span className="transaction-detail-point">+{detail.point} คะแนน</span>
              </div>
            ))
          ) : (
            <div className="transaction-detail">ไม่มีข้อมูล</div>
          )}
        </div>
      )}
    </div>
  );
}

export default Transaction;
