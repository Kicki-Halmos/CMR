import React from "react";
import { Link } from "react-router-dom";
import { LinkStyle } from "../Styles/HomeStyled";

export default function CustomerListItem({ customerData }) {
  return (
    <LinkStyle className="p-2">
      <Link to={`/customers/${customerData.id}`}>{customerData.name}</Link>
    </LinkStyle>
  );
}
