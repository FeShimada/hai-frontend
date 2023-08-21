import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import "./Navbar.css";

interface NavbarProps {
  route: string;
  path: string;
}

const Navbar: React.FC<NavbarProps> = ({ route, path }) => {
  const [clicked, setClicked] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const handleToggleSidebar = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setClicked(false);
      }
    };

    if (clicked) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [clicked]);

  return (
    <nav ref={navRef}>
      <NavLink to={route}>
        <img src={logo} alt="Logo da empresa" />
      </NavLink>

      <div >
        <ul id="navbar" className={clicked ? "active" : ""}>
          <li>
            <NavLink to="/" onClick={handleToggleSidebar}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/produtos"} onClick={handleToggleSidebar}>
              Produtos
            </NavLink>
          </li>
          <li>
            <NavLink to={`${route}/index.html`} onClick={handleToggleSidebar}>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to={`${route}/index.html`} onClick={handleToggleSidebar}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to={`${route}/index.html`} onClick={handleToggleSidebar}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      <div id="mobile" >
        <i
          id="bar"
          className={clicked ? "fas fa-times" : "fas fa-bars"}
          onClick={handleToggleSidebar}
        ></i>
      </div>
    </nav>
  );
};

export default Navbar;
