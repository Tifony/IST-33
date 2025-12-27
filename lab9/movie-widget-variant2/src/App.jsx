import React, { useState, useEffect } from 'react';
import MovieCard from './components/MovieCard';
import { movies } from './data/movies';

function App() {
  const [currentMovie, setCurrentMovie] = useState(null);

  useEffect(() => {
    // Sequential logic: 
    // 1. Get previous index from storage
    // 2. Increment
    // 3. Save new index

    // Default to -1 so first load becomes 0
    let lastIndex = parseInt(localStorage.getItem('lab9_movie_sequence_index') || '-1');

    // Calculate next index
    let nextIndex = lastIndex + 1;
    if (nextIndex >= movies.length) {
      nextIndex = 0;
    }

    // Save and set
    localStorage.setItem('lab9_movie_sequence_index', nextIndex.toString());
    setCurrentMovie(movies[nextIndex]);
  }, []);

  return (
    <div className="app-container">
      {currentMovie && <MovieCard movie={currentMovie} />}
    </div>
  );
}

export default App;
