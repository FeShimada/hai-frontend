import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import "./Navbar.css";

interface NavbarProps {
  route: string;
  path: string;
}

const useOutsideClick = (ref: React.RefObject<HTMLDivElement>, onClickOutside: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickOutside]);
};

const Navbar: React.FC<NavbarProps> = ({ route, path }) => {
  const [clicked, setClicked] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const handleToggleSidebar = () => {
    setClicked(!clicked);
  };

  const handleSidebarClose = () => {
    setClicked(false);
  };

  useOutsideClick(navRef, handleSidebarClose);

  return (
    <nav>
      <NavLink to={route}>
        <img src={logo} alt="Logo da empresa" />
      </NavLink>

      <div ref={navRef}>
        <ul id="navbar" className={clicked ? "active" : ""}>
          <li>
            <NavLink to="/" onClick={handleSidebarClose}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/produtos"} onClick={handleSidebarClose}>
              Produtos
            </NavLink>
          </li>
          <li>
            <NavLink to={`${route}/index.html`} onClick={handleSidebarClose}>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to={`${route}/index.html`} onClick={handleSidebarClose}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to={`${route}/index.html`} onClick={handleSidebarClose}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      <div id="mobile">
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
