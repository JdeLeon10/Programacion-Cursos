import React from "react";
import "./Entry.css";

export const Entry = ({
  imgSrc,
  imgAlt,
  country,
  title,
  date,
  description,
}) => {
  return (
    <>
      <article className="journal-entry">
        <img className="journal-entry-img" src={imgSrc} alt={imgAlt} />
        <div>
          <img src="../src/Assets/marker.png" alt="Marker" />
          <span>{country}</span>
          <a href="https://www.google.com/maps">View on Google Maps</a>
          <h2>{title}</h2>
          <p>{date}</p>
          <p>{description}</p>
        </div>
      </article>
    </>
  );
};
