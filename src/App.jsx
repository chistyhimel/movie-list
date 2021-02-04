import React, { useEffect, useState } from "react";
import { MovieContainer } from "./App.js";
import Card from "./components/Card/Card.jsx";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://5ffa665587478d0017d9a5ae.mockapi.io/api/v1/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);
console.log(movies)
  return (
    <>
      <MovieContainer>
              {
                  movies.map(movie => <Card key={movie.id} name={movie.name} img={movie.poster} year={movie.year} duration={movie.duration}/>)
        }
      </MovieContainer>
    </>
  );
};

export default App;
