import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Movie from './class/movies'
import { PickMovie } from './components/PickMovie'


// const movies = [
//   new Movie("Fast and Furious 13", 100),
//   new Movie("Rush Hour 1", 50),
//   new Movie("Rush Hour 2", 70),
//   new Movie("Rush Hour 3", 40)
// ]

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {

    const getData = async () => {
      const response = await fetch("https://localhost:7049/api/Movies");

      // console.log(response);

      const data = await response.json();

      console.log(data);
      
      setMovies(data)

    }

    getData()

  }, [])

  return (
    <>
      <div class="movie-container">
      <PickMovie movies={movies} />
    </div>
    <ul class="showcase">
      <li>
        <div class="seat"></div>
        <small>N/A</small>
      </li>
      <li>
        <div class="seat selected"></div>
        <small>Selected</small>
      </li>
      <li>
        <div class="seat occupied"></div>
        <small>Occupied</small>
      </li>
    </ul>
    <div class="container">
      <div class="screen"></div>
      <div class="row">
        <div class="seat occupied"></div>
        <div class="seat occupied"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat occupied"></div>
        <div class="seat occupied"></div>
        <div class="seat"></div>
      </div>
      <div class="row">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat occupied"></div>
        <div class="seat occupied"></div>
        <div class="seat occupied"></div>
        <div class="seat"></div>
        <div class="seat occupied"></div>
        <div class="seat"></div>
      </div>
      <div class="row">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
      </div>
      <div class="row">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
      </div>
      <div class="row">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
      </div>
      <div class="row">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat occupied"></div>
        <div class="seat occupied"></div>
        <div class="seat occupied"></div>
      </div>
    </div>
    <p class="text">
      You have selected <span id="count">0</span> seats for a price of SEK<span
        id="total"
        >0</span>
    </p>
      
    </>
  )
}

export default App
