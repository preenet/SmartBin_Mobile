import React, { useEffect } from 'react';
import './Popup.css';

const Popup = ({ smartbin, onClose }) => {
  const handleClickOutside = (event) => {
    if (event.target.className === 'popup-container') {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="popup-container" onClick={handleClickOutside}>
      <div className="popup-content">
        <h3>รูปภาพ</h3> 
        <h4>{smartbin.name}</h4> 
        <p>ปริมาณขยะประเภทขวดพลาสติก: 0% [ว่าง]</p> 
        <div className="popup-buttons">
          <button className="popup-button">นำทาง</button>
          <button className="popup-button">รายงานปัญหา</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
