import React from "react";
import "./Entry.css";

export const Entry = () => {
  return (
    <>
      <article className="journal-entry">
        <img
          className="journal-entry-img"
          src="https://scrimba.com/links/travel-journal-japan-image-url"
          alt="Mount fuji"
        />
        <div>
          <img src="../src/Assets/marker.png" alt="Marker" />
          <span>Japan</span>
          <a href="https://www.google.com/maps">View on Google Maps</a>
          <h2>Mount Fuji</h2>
          <p>12 Jan, 2021 - 24 Jan, 2021</p>
          <p>
            Mount Fuji is the tallest mountain in Japan, standing at 3,776
            meters (12,380 feet). Mount Fuji is the single most popular tourist
            site in Japan, for both Japanese and foreign tourists.
          </p>
        </div>
      </article>
    </>
  );
};
