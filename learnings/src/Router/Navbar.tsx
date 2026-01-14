import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navLinkStyles = ({ isActive }: any) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };
  return (
    <nav>
      <NavLink style={navLinkStyles} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkStyles} to="/about">
        About
      </NavLink>
      <NavLink to="/products">Products</NavLink>
    </nav>
  );
}

export default Navbar;
