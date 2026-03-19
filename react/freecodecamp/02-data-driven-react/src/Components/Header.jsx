import "./Header.css";
import React from "react";

export const Header = () => {
  return (
    <>
      <header className="header-header">
        <img className="header-img" src="../src/Assets/globe.png" alt="Mundo" />
        <span>My Travel Journal</span>
      </header>
    </>
  );
};
