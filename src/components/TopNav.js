import React from "react";
import "./TopNav.css";
import logo from "../assets/logo.jpg";

const TopNav = () => {
    return (
        <div>
            <ul className="topnav">
                <li className="leftmost">
                    <img src= {logo} />
                </li>
                <li>
                    <a href="/">Home</a>
                </li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li className="right"><a href="settings">Settings</a></li>
            </ul>
        </div>
    );
};

export default TopNav;