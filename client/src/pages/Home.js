import React from 'react'
import { useEffect, useState } from "react";

function Home() {
  const [movies, setMovies] = useState([]);

useEffect(() => {
  const fetchAllMovies = async () => {
    const response = await fetch("http://localhost/4002/getAllMovies");
    const json = await response.json();
    if (response.ok) {
      setMovies(json)
;    }
  };

  fetchAllMovies(); 
}, [])

  return (
    <div className = "container">
     
     { movies.map((movie) => (
     <div key = {movie.id}> 
     <h3>{movie.name} </h3> 
     </div>
     ))}
      
    </div>
  )
}

export default Home