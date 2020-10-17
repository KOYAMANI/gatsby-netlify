import React from "react"
import { Link } from "gatsby"

const NavBar = () => {

  return (
    <nav className="navbar">
      <ul className="navbar__title">
        {/* <img
          className="navbar__avatar"
          src="../content/assets/profile.jpg"
          alt= "Icon"
          imgStyle={{
            borderRadius: `50%`,
          }}
        /> */}
        <Link to="/" style={{ textDecoration: 'none' }}>YUTARO on SE</Link>
      </ul>
      <ul className="navbar__ul">
        <li className="navbar__li">
            <Link to="/" style={{ textDecoration: 'none' }}>HOME</Link>
        </li>
        {/* <li className="navbar__li">
            <Link to="/tags/english/" style={{ textDecoration: 'none' }}>English</Link>
        </li>
        <li className="navbar__li">
            <Link to="/tags/japanese/" style={{ textDecoration: 'none' }}>日本語</Link>
        </li> */}
        <li className="navbar__li">
            <Link to="/about" style={{ textDecoration: 'none' }}>ABOUT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

