import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <main>
      <h1>Páginas disponibles</h1>
      <ul>
        <li>
          <Link to="/Card">Card</Link>
        </li>
        <li>
          <Link to="/Page1">Page1</Link>
        </li>
      </ul>
    </main>
  );
};
