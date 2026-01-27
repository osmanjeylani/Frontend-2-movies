import React, { useEffect } from 'react'

export const DeleteMovie = ({movie, setMovies, movies}) => {
    const deleteMovie = async (id) => {
        fetch(`http://localhost:3001/movies/${id}`, {
              method: "DELETE",
            }).then(() => {
              setMovies(movies.filter((movie) => movie.id !== id));
            }).catch(err => console.log(err)
            )
          }

          useEffect(() => {
            console.log("useffect" + movie.id);
            
          }, [])
    
  return (

                

          <li>
            <strong>{movie.title}</strong> - {movie.price} kr
            <button onClick={() => {deleteMovie(movie.id);console.log(movie.id);
            }}>Delete</button>
          </li>
  )
}
