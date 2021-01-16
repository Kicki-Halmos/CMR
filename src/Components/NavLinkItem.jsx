import React from "react";
import { Link } from "react-router-dom";
import { NavLinkStyle } from "../Styles/HomeStyled";

export default function NavLinkItem({ to, text }) {
  return (
    <NavLinkStyle>
      <Link to={to}> {text} </Link>
    </NavLinkStyle>
  );
}
