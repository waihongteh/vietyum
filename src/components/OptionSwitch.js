import React, { useState } from "react";
import "./OptionSwitch.css";

const OptionSwitch = ({ options = ["On", "Off"], defaultSelected = 0, onSelect }) => {
  const [selectedIndex, setSelectedIndex] = useState(defaultSelected);

  const handleToggle = () => {
    const newIndex = selectedIndex === 0 ? 1 : 0;
    setSelectedIndex(newIndex);
    if (onSelect) onSelect(options[newIndex]);
  };

  return (
    <div className="option-switch" onClick={handleToggle}>
      <div className={`switch-slider ${selectedIndex === 0 ? "left" : "right"}`}></div>
      <div className="option-text">{options[0]}</div>
      <div className="option-text">{options[1]}</div>
    </div>
  );
};

export default OptionSwitch;
