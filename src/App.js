import React, { useEffect } from "react";
import searchIcon from "./search.svg";

const API_URL = "https://omdbapi.com/?apikey=45cbd782&s=batman";
const movie1 = {
  Poster:
    "https://m.media-amazon.com/images/M/MV5BYzU3ZjE3M2UtM2E4Ni00MDI5LTkyZGUtOTFkMGIyYjNjZGU3XkEyXkFqcGc@._V1_SX300.jpg",
  Title: "Batman & Robin",
  Type: "movie",
  Year: "1997",
  imdbID: "tt0118688",
};
const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&t=${title}`);
    const data = await response.json();
    console.log(data.Search);
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
      <div className="container">{/* // Movie card */}</div>
    </div>
  );
};
export default App;
