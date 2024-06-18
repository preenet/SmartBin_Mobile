import React from "react";

const SmartBinInfo = ({ locationName, plasticPercentage, glassPercentage, generalWastePercentage }) => (
  <div style={{ width: '200px' }}>
    <div>
      <img src="../images/BIN/GREEN.png" alt="Smart Bin" style={{ width: '100%' }} />
    </div>
    <div>
      <h4>{locationName}</h4>
      <p>ปริมาณขยะประเภทขวดพลาสติก: {plasticPercentage}% [ว่าง]</p>
      <p>ปริมาณขยะประเภทขวดแก้ว: {glassPercentage}% [ว่าง]</p>
      <p>ปริมาณขยะประเภทกระป๋อง: {generalWastePercentage}% [ว่าง]</p>
    </div>
    <div>
      <button style={{ marginRight: '10px' }}>นำทาง</button>
      <button>รายงานปัญหา</button>
    </div>
  </div>
);

export default SmartBinInfo;
