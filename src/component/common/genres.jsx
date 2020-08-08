import React from "react";

const Genres = ({ genres }) => {
  return (
    <div>
      <ul className="list-group mt-3">
        <li key="all" className="list-group-item active">
          All Genres
        </li>
        {genres.map((genre) => (
          <li key={genre._id} className="list-group-item">
            {genre.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Genres;
