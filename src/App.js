import React, { useEffect, useState } from "react";
import searchIcon from "./search.svg";
import MovieCard from "./MovieCard";
import "./App.css";

const API_URL = "https://www.omdbapi.com/?apikey=b6003d8a";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    searchMovies("iron man");
  }, []);

  // fetch data from API
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    if (data.Search) {
      //remove duplicates
      const uniqueMovies = data.Search.filter(
        (movie, index, self) =>
          index === self.findIndex((m) => m.imdbID === movie.imdbID)
      );
      setMovie(uniqueMovies);
    }

    console.log(data);
  };

  return (
    <div className="app">
      <header>
        <h1>Movie Search</h1>

        <div className="search">
          <input
            placeholder="Search for a movie..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img
            src={searchIcon}
            alt="Search"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
      </header>

      <main>
        <div>
          {movies?.length > 0 ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <p>No movies found</p>
            </div>
          )}
        </div>
      </main>
      {/* footer */}

      <footer>
        <p>© 2024 Movie Search App. All rights reserved.</p>
        <p>
          Made with ❤️ by <span>Poom Santhong</span>
        </p>
      </footer>
    </div>
  );
};
export default App;
