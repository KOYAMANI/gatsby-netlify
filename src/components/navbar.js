import React from "react";
import { Link } from "gatsby";
// import "./styles/global.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__ul">
        <li className="navbar__li">
            <Link to="/">HOME</Link>
            {/* <a href="https://www.codecademy.com/">HOME</a> */}
        </li>
        <li className="navbar__li">
            <Link to="/about">ABOUT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;