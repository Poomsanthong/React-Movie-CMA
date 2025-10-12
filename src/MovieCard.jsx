import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div>
        <p>Title: {movie.Title}</p>
      </div>
      <p>Year: {movie.Year}</p>
      <p>Type: {movie.Type}</p>
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300x450?text=No+Image"
        }
        alt={movie.Title}
      />
    </div>
  );
};
export default MovieCard;
