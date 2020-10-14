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
        ベルリンでエンジニアを目指す
      </ul>
      <ul className="navbar__ul">
        <li className="navbar__li">
            <Link to="/">HOME</Link>
        </li>
        <li className="navbar__li">
            <Link to="/about">ABOUT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

