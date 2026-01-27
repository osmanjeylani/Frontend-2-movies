import React, { useEffect } from "react";
import { Seat } from "./seat";
import Movie from "../class/Movie";
export const PickMovie = ({ movies, onMovieChange }) => {



  return (
    <>
      <label htmlFor="movie">Pick a movie:</label>
      <select name="movie" id="movie" onChange={(e) => onMovieChange(Number(e.target.value))}>

        {movies.map((movie, index) => (
          <option key={index} value={movie.price}>
            {movie.title} ({movie.price} kr)
          </option>
        ))}
      </select>
    </>
  );
};
