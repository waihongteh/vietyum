import React from "react";
import "./TopNav.css";
import logo from "../assets/logo.jpg";
import OptionSwitch from "./OptionSwitch";

const TopNav = () => {
    const currLanguage = localStorage.getItem("language") ?? "english";
    const languages = ["english", "vietnamese"];
    const onSelectLanguage = (newLanguage) => {
        if (newLanguage != currLanguage) {
            localStorage.setItem("language", newLanguage);
            window.location.reload();
        }
    }
    return currLanguage != "vietnamese" ? (
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
                <li className="right"><OptionSwitch options={languages} onSelect={onSelectLanguage} defaultSelected={currLanguage != "vietnamese" ? 0: 1}/></li>
            </ul>
            <div className="topnav-divider">
            </div>
        </div>
    ): (
        <div className="topnav-container">
            <ul className="topnav">
                <li className="leftmost">
                    <img src= {logo} />
                </li>
                <li>
                    <a href="/">Trang chủ</a>
                </li>
                <li><a href="/aboutus">Về chúng tôi</a></li>
                <li><a href="/services">Dịch vụ</a></li>
                <li className="right"><OptionSwitch options={languages} onSelect={onSelectLanguage} defaultSelected={currLanguage != "vietnamese" ? 0: 1}/></li>
            </ul>
            <div className="topnav-divider">
            </div>
        </div>
    );
};

export default TopNav;