import * as React from "react";

function UserCard({ title, units, value }) {
  return (
    <div className="points-card">
      <p className="points-card-title">{title}</p>
      <p className="points-card-value">{value}</p>
      <p className="points-card-units">{units}</p>
    </div>
  );
}

export default UserCard;