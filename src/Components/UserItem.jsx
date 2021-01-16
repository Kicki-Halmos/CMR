import React from "react";
import { CardStyle } from "../Styles/HomeStyled";

export default function UserItem({ userData }) {
  console.log(userData);
  return (
    <CardStyle className="card p-2 m-3" style={{ width: "18rem" }}>
      <h2>Welcome {userData.firstName}!</h2>
      <p>
        Name: {userData.firstName} {userData.lastName}
      </p>
      <p>Email: {userData.email}</p>
    </CardStyle>
  );
}
