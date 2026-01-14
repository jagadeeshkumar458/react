import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./Auth";

function Navbar() {
  const navLinkStyles = ({ isActive }: any) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };
  const auth = useAuth();
  return (
    <nav>
      <NavLink style={navLinkStyles} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkStyles} to="/about">
        About
      </NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to='/profile'>Profile</NavLink>
      {!auth.user &&(
        <NavLink style={navLinkStyles} to='/login'>Login</NavLink>
      )}
    </nav>
  );
}

export default Navbar;
