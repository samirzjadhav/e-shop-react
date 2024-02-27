import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { MdOutlineStorefront } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import "../Header/Header.css";

import { useStateValue } from "../StateProvider/StateProvider.js";

const Header = () => {
  const [{ basket }, dispatch] = useStateValue();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className="header flex justify-between items-center px-[20px] md:px-[0px]">
      <Link to="/home" style={{ textDecoration: "none" }}>
        <div className="header-logo flex items-center ">
          <MdOutlineStorefront className="header-logoImage" size={34} />
          <h2 className="header-logoTitle capitalize">e-shop</h2>
        </div>
      </Link>
      <div
        className={`flex-col sm:flex-row sm:flex w-[80%] ${
          isMobileMenuOpen ? "mobile-menu-open" : "mobile"
        }`}
      >
        <div className="header-search flex items-center">
          <input type="text" className="header-searchInput border" />
          <FaSearch className="header-searchIcon" />
        </div>
        <div className="header-nav flex items-center gap-[20px]">
          <div className="nav-item flex-col">
            <span className="nav-itemLineOne">Hello Guest</span>
            <span className="nav-itemLineTwo">Sign In</span>
          </div>
          <div className="nav-item flex-col">
            <span className="nav-itemLineOne">Your</span>
            <span className="nav-itemLineTwo">Shop</span>
          </div>
          <Link to="/Checkout" style={{ textDecoration: "none" }}>
            {" "}
            <div className="nav-itemBasket items-center">
              <span className="nav-itemLineOne">
                <IoMdCart size={34} />
              </span>
              <span className="nav-itemLineTwo nav-basketCount">
                {basket.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="bar md:hidden" onClick={toggleMobileMenu}>
        <a className="text-white">
          <FaBars />
        </a>
      </div>
    </div>
  );
};

export default Header;
