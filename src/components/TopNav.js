import React from "react";
import "./TopNav.css";
import logo from "../assets/logo.jpg";

const TopNav = () => {
    return (
        <div className="topnav-container">
            <ul className="topnav">
                <li className="leftmost">
                    <img src= {logo} />
                </li>
                <li>
                    <a href="/">Home</a>
                </li>
                <li><a href="/aboutus">About Us</a></li>
                <li><a href="/services">Services</a></li>
                <li className="right"><a href="settings">Settings</a></li>
            </ul>
            <div className="topnav-divider">
            </div>
        </div>
    );
};

export default TopNav;