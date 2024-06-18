import React from "react";

function Transaction({ placeName, date, point }) {
  return (
    <div className="transaction">
      <div className="transaction-details">
        <p className="transaction-place-name">{placeName}</p>
        <p className="transaction-date">{new Date(date).toLocaleString()}</p>
      </div>
      <p className="transaction-points" tabIndex="0">
        <span className="points-highlight">+{point}</span> คะแนน
      </p>
    </div>
  );
}

export default Transaction;
