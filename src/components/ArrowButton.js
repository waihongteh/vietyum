import React from "react";
import "./ArrowButton.css";

const ArrowButton = ({text, onClick}) => {
    return (
        <div>
            <button id="arrowButton" class="arrow-button" onClick={onClick}>
                <span class="arrow-text">{text}</span>
            </button>
        </div>
    );
};

export default ArrowButton;