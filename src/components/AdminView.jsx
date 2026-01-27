import React from "react";
import { PostMovie } from "./PostMovie";
import { DeleteMovie } from "./DeleteMovie";

export const AdminView = ({ movies, setMovies }) => {


  return (
    <div>
      <h2>AdminView</h2>

      <ul>
        {movies.map((movie) => <DeleteMovie key={movie.id} movie={movie} setMovies={setMovies} movies={movies}/>)}
      </ul>
      <PostMovie />

    </div>
  );
};
