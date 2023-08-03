import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import './Navbar.css';

interface NavbarProps {
  route: string;
  path: string;
}

const Navbar: React.FC<NavbarProps> = ({ route, path }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <nav>
      <NavLink to={route}>
        <img src={logo} alt="Logo da empresa" />
      </NavLink>

      <div>
        <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to={"/produtos"}>Produtos</NavLink></li>
          <li><NavLink to={`${route}/index.html`}>Blog</NavLink></li>
          <li><NavLink to={`${route}/index.html`}>About</NavLink></li>
          <li><NavLink to={`${route}/index.html`}>Contact</NavLink></li>
        </ul>
      </div>

      <div id="mobile">
        <i 
          id="bar"
          className={clicked ? "fas fa-times" : "fas fa-bars"}
          onClick={() => setClicked(!clicked)}
        ></i>
      </div>
    </nav>
  );
}

export default Navbar;
