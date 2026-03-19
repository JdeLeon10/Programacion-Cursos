import "./Card.css";
import React from "react";

export const Card = () => {
  return (
    <>
      <header className="header-card">
        <img
          className="img-card"
          src="../src/Assets/react-logo.png"
          alt="React Logo"
        />
        <h3>ReactFacts</h3>
      </header>

      <main>
        <h1>Fun facts about React!</h1>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </main>
    </>
  );
};
