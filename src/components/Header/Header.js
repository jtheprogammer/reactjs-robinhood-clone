import React from "react";
import Logo from "./../../assets/robinhood.svg";
import "./Header.css"

const Header = () => {
  return (
    <div className="header__wrapper">
      {/* Logo */}
      <div className="header__logo">
        <img src={Logo} width={30} alt="logo" />
      </div>
      {/* Search */}
      <div className="header__search">
        <div className="header__searchContainer">
          <input placeholder="Search ..." type={"text"} />
        </div>
      </div>
      {/* menuItems */}
      <div className="header__menuItems">
        <a id="freeStocks" href ="#">Free Stocks!</a>
        <a href ="https://reactjs-resume-a4406.web.app/">Portfolio</a>
        <a href ="">Cash</a>
        <a href ="">Messages</a>
        <a href ="">Account</a>
      </div>
    </div>
  );
};

export default Header;
