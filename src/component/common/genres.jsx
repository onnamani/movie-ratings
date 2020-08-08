import React from "react";

const Genres = props => {
  const { genres, onGenreChange, textProperty, valueProperty, selectedGenre } = props
  // console.log(selectedGenre)
  return (
    <div>
      <ul className="list-group">
        <li key="all" className={selectedGenre === undefined ? "list-group-item active" : "list-group-item"} onClick={() => onGenreChange()}>
          All Genres
        </li>
        {genres.map((genre) => (
          <li key={genre[valueProperty]} className={genre === selectedGenre ? "list-group-item active" : "list-group-item"} onClick={() => onGenreChange(genre)}>
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
