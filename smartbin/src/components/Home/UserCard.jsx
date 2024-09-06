import * as React from "react";

function UserCard({ title, units, value }) {
  return (
    <div className="border flex flex-col justify-between items-center rounded-md p-2 text-center">
      <p className="points-card-title">{title}</p>
      <p className="font-bold text-xl my-3">{value}</p>
      <p className="points-card-units">{units}</p>
    </div>
  );
}

export default UserCard;