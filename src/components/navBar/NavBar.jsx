import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FaHome, FaUser, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { links } from "./constants";
import "./NavBar.css";

const Navbar = () => {
  const linkItems = links.map((item, index) => (
    <li>
      <NavLink className="linkItem" activeClassName="active" to={item.url}>
        {item.linkName}
      </NavLink>
    </li>
  ));

  return (
    <nav className="navBar">
      <div className="logo">
        <span>Survey-Me</span>
      </div>
      <div className="linksContainer">
        <ul>{linkItems}</ul>
      </div>
      <div className="AuthButtonsContainer">
        <Link to="/login" className="AuthButton" id="Login">
          <FaSignInAlt className="ButtonIcon" />
          <span>Login</span>
        </Link>
        <Link to="/signup" className="AuthButton" id="Signup">
          <FaUserPlus className="ButtonIcon" />
          <span>SignUp</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
