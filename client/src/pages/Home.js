import React from 'react'
import { useEffect, useState } from "react";

function Home() {
  const [movies, setMovies] = useState([]);

useEffect(() => {
  const fetchAllMovies = async () => {
    const response = await fetch("getAllMovies");
    const json = await response.json();
    if (response.ok) {
      setMovies(json)
;    }
  };

  fetchAllMovies(); 
}, [])

  return (
    <div>
     { movies.map((movie) => (
      {movie.id}, 
      {movie.name}
     ))}
      
    </div>
  )
}

export default Home