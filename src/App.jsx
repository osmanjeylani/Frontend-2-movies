import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PickMovie } from './components/PickMovie'
import Movie from './class/Movie'
import { Seat } from './components/seat'


// const movies = [
//   new Movie("Fast and Furious 13", 100),
//   new Movie("Rush Hour 1", 50),
//   new Movie("Rush Hour 2", 70),
//   new Movie("Rush Hour 3", 40)
// ]

function App() {
  const [movies, setMovies] = useState([]);
  const [count, setCount] = useState(0)
  const [ticketPrice, setTicketPrice] = useState(0)

  const totalPrice = count * ticketPrice;

  useEffect(() => {
    console.log(count);
    
  }, [count])

  function handleCount(boolean) {

    let osman = boolean;
    
    if(osman){
      setCount(currentCount => currentCount - 1)

    }else{
      setCount(currentCount => currentCount + 1)

    }
    
  }

  useEffect(() => {

    const getData = async () => {
      const response = await fetch("https://localhost:7049/api/Movies");

      // console.log(response);

      const data = await response.json();

      console.log(data);

      const movieObjects = data.map(m => new Movie(m.title, m.price))
      
      setMovies(movieObjects)

    }

    getData()

  }, [])

  return (
    <>
      <div className="movie-container">
      <PickMovie movies={movies} onMovieChange={setTicketPrice} />
    </div>
    <ul className="showcase">
      <li>
        <div className="seat"></div>
        <small>N/A</small>
      </li>
      <li>
        <div className="seat selected"></div>
        <small>Selected</small>
      </li>
      <li>
        <div className="seat occupied"></div>
        <small>Occupied</small>
      </li>
    </ul>
    <div className="container">
      <div className="screen"></div>
      <div className="row">
        <div className="seat occupied"></div>
        <div className="seat occupied"></div>
        <Seat handleCount={handleCount}/>
        <Seat handleCount={handleCount}/>
        <Seat handleCount={handleCount}/>
        <div className="seat occupied"></div>
        <div className="seat occupied"></div>
        <Seat handleCount={handleCount}/>
      </div>
      <div className="row">
        <Seat handleCount={handleCount}/>
        <Seat handleCount={handleCount}/>
        <div className="seat occupied"></div>
        <div className="seat occupied"></div>
        <div className="seat occupied"></div>
        <Seat handleCount={handleCount}/>
        <div className="seat occupied"></div>
        <Seat handleCount={handleCount}/>
      </div>
      <div className="row">
        <Seat handleCount={handleCount}/>
        <Seat handleCount={handleCount}/>
        <Seat handleCount={handleCount}/>
        <Seat handleCount={handleCount}/>
        <Seat handleCount={handleCount}/>
        <Seat handleCount={handleCount}/>
        <Seat handleCount={handleCount}/>
        <Seat handleCount={handleCount}/>
      </div>
      <div className="row">
        <Seat handleCount={handleCount}/>
        <Seat handleCount={handleCount}/>
        <Seat handleCount={handleCount}/>
        <Seat handleCount={handleCount}/>
        <Seat handleCount={handleCount}/>
        <Seat handleCount={handleCount}/>
        <Seat handleCount={handleCount}/>
        <Seat handleCount={handleCount}/>
      </div>
      <div className="row">
        <Seat handleCount={handleCount}/>
        <Seat handleCount={handleCount}/>
        <Seat handleCount={handleCount}/>
        <Seat handleCount={handleCount}/>
        <Seat handleCount={handleCount}/>
        <Seat handleCount={handleCount}/>
        <Seat handleCount={handleCount}/>
        <Seat handleCount={handleCount}/>
      </div>
      <div className="row">
        <Seat handleCount={handleCount}/>
        <Seat handleCount={handleCount}/>
        <Seat handleCount={handleCount}/>
        <Seat handleCount={handleCount}/>
        <Seat handleCount={handleCount}/>
        <div className="seat occupied"></div>
        <div className="seat occupied"></div>
        <div className="seat occupied"></div>
      </div>
    </div>
    <p className="text">
      You have selected <span>{count}</span> seats for a price of SEK 
      <span>{totalPrice}</span>
    </p>
      
    </>
  )
}

export default App
