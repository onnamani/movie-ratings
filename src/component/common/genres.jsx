import React from "react";

const Genres = props => {
  const { genres, onGenreChange, textProperty, valueProperty } = props
  return (
    <div>
      <ul className="list-group mt-3">
        <li key="all" className="list-group-item active" onClick={onGenreChange}>
          All Genres
        </li>
        {genres.map((genre) => (
          <li key={genre[valueProperty]} className="list-group-item">
            {genre[textProperty]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Genres;
