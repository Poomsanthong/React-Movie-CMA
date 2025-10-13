import React from "react";
const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  console.log(imdbID);

  return (
    <div className="movie">
      <div>
        <img
          src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
          alt={Title}
        />
      </div>

      <div>
        <span>{Type}</span>
        <h3>
          {Title} ({Year})
        </h3>
      </div>
    </div>
  );
};

export default MovieCard;
