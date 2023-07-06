import React, { useState } from "react"
import logo from "../../assets/images/logo.svg"
import './Navbar.css'

function Navbar() {

    const [clicked, setClicked] = useState(false);

    return (
       <nav>
            <a href="index.html">
                <img src={logo} alt="" />
            </a>

            <div>
                <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="index.html">Shop</a></li>
                    <li><a href="index.html">Blog</a></li>
                    <li><a href="index.html">About</a></li>
                    <li><a href="index.html">Contact</a></li>
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
    )
}

export default Navbar
