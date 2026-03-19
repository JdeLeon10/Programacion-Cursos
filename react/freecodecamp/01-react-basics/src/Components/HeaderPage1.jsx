import React from "react";

export const HeaderPage1 = () => {
  return (
    <header className="header">
      <img
        className="img-page1"
        src="../src/Assets/react-logo.png"
        alt="React Logo"
      />

      <nav>
        <ul className="nav-list">
          <li className="nav-list-element">Pricing</li>
          <li className="nav-list-element">About</li>
          <li className="nav-list-element">Contact</li>
        </ul>
      </nav>
    </header>
  );
};
