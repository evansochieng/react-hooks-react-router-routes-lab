import React from "react";
import { movies } from "../data";

function Movies() {
  // Display every movies details
  return <div>
    <h1>Movies Page</h1>
    {movies.map( (movie) => {
      const {title, time, genres} = movie;
      return <div key={time}>
        <h3>{`Name: ${title}`}</h3>
        <p>{`Time: ${time}`}</p>
        <p>Genres: </p>
        <ul>
          {genres.map((genre, index) => {
            return <li key={index}>{genre}</li>
          })}
        </ul>
      </div>
    })}
  </div>;
}

export default Movies;
