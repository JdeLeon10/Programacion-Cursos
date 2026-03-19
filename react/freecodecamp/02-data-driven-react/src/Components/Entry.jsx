import React from "react";
import "./Entry.css";

export const Entry = ({ location, title, date, description }) => {
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
          <span>{location}</span>
          <a href="https://www.google.com/maps">View on Google Maps</a>
          <h2>{title}</h2>
          <p>{date}</p>
          <p>{description}</p>
        </div>
      </article>
    </>
  );
};
