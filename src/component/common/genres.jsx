import React from "react";

const Genres = props => {
  const { genres, onGenreChange, textProperty, valueProperty } = props
  return (
    <div>
      <ul className="list-group">
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

Genres.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id'
}

export default Genres;
