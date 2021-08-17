import React from 'react';

import { Link } from 'react-router-dom';

export default function MovieList(props) {
  const { movies } = props;

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <div key={movie.id}>
          <Link to={`/movies/${movie.id}`} >
            <MovieDetails key={movie.id} movie={movie} />
          </Link>
        </div>
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;

  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
