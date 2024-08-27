import React, { useEffect } from 'react';
import './Popup.css';
import blankImage from '../images/blank.png'; // Adjust the path if necessary

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
        <img src={blankImage} alt="Smart Bin" className="popup-image" /> {/* Added image */}
        <h4>{smartbin.name}</h4> 
        <p>ปริมาณขยะ: 0% [ว่าง]</p> 
        <div className="popup-buttons">
          <button className="popup-button">นำทาง</button>
          <button className="popup-button">รายงานปัญหา</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
