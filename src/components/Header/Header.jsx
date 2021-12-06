import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import logo from "../../assets/tmovie.png";
import "./header.scss";

const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Movies",
    path: "/movie",
  },
  {
    display: "TV Series",
    path: "/tv",
  },
];
const Header = () => {
  const { pathname } = useLocation();
  const headerRef = useRef(null);

  const active = (item) => {
    return item.path === pathname;
  };

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);

    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  });

  return (
    <div ref={headerRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          <img src={logo} alt="" />
          <Link to="/">4K Movie</Link>
        </div>
        <ul className="header__nav">
          {headerNav.map((item, index) => (
            <li key={index} className={active(item) ? "active" : ""}>
              <Link to={item.path}> {item.display} </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
