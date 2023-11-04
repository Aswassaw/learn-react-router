import { Fragment } from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navLinkStyles = ({ isActive }: { isActive: boolean }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };

  return (
    <Fragment>
      <NavLink to="/" style={navLinkStyles}>
        Home
      </NavLink>
      <NavLink to="/about" style={navLinkStyles}>
        About
      </NavLink>
      <NavLink to="/products" style={navLinkStyles}>
        Products
      </NavLink>
      <NavLink to="/lazy" style={navLinkStyles}>
        Lazy
      </NavLink>
    </Fragment>
  );
}
