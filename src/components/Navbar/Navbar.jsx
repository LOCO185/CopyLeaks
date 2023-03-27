import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Avatar from "react-avatar";

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="header__content__logo">
          <img
            src="https://app.copyleaks.com/assets/websites-logos/default-logo.svg"
            alt="new"
          />
        </Link>
      </div>
      <div className="right">
        <Avatar
          className="avatar"
          githubHandle="sitebase"
          size={60}
          round="100px"
        />
      </div>
    </header>
  );
};

export default Navbar;
