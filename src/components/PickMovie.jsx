import React from "react";

export const PickMovie = ({ movies }) => {
  return (
    <>
      <label for="movie">Pick a movie:</label>
      <select name="movie" id="movie">
        {movies.map((movie, index) => (
          <option key={index} value={movie.price}>
            {movie.title} ({movie.price} kr)
          </option>
        ))}
      </select>
    </>
  );
};
