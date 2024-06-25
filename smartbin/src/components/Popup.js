import React from 'react';
import './css/Popup.css'; // Import the CSS for the popup

const Popup = ({ smartbin, onClose }) => {
  return (
    <div className="popup-container">
      <div className="popup-content">
        <h3>{smartbin.name}</h3>
        <p>ปริมาณขยะประเภทขวดพลาสติก: 0% [ว่าง]</p>
        <p>ปริมาณขยะประเภทขวดแก้ว: 0% [ว่าง]</p>
        <p>ปริมาณขยะประเภทกระป๋อง: 5% [ว่าง]</p>
        <button>นำทาง</button>
        <button>รายงานปัญหา</button>
        <button className="close-button" onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default Popup;
