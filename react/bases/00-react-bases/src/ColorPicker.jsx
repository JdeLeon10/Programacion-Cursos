import "./ColorPicker.css";
import React from "react";
import { useState } from "react";

export const ColorPicker = () => {
  const [color, setColor] = useState("#ffffff");

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div className="color-picker-container">
      <h1>Color Picker</h1>
      <label>Select a color:</label>
      <input type="color" value={color} onChange={handleColorChange} />
      <div className="color-display" style={{ backgroundColor: color }}>
        <h3>Selected color: {color}</h3>
      </div>
    </div>
  );
};
