import React, { useEffect, useState } from "react";
import searchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const API_URL = "https://omdbapi.com/?apikey=45cbd782&s=batman";
const movie1 = {
  Title: "Batman & Robin",
  Type: "movie",
  Year: "1997",
  imdbID: "tt0118688",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BYzU3ZjE3M2UtM2E4Ni00MDI5LTkyZGUtOTFkMGIyYjNjZGU3XkEyXkFqcGc@._V1_SX300.jpg",
};
const App = () => {
  const [movies, setMovie] = React.useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&t=${title}`);
    const data = await response.json();
    setMovie(data.Search);
  };

  useEffect(() => {
    searchMovies("batman");
  }, []);

  return (
    <div className="app">
      <h1>Movie Search</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for a movie..."
          value="Men"
          onClick={() => {}}
        />
        <img src={searchIcon} alt="Search" onClick={() => {}} />
      </div>

      <div>
        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <p>No movies found</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default App;
