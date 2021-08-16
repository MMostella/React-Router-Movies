import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MovieDeets from './MovieCard';

import {
  useParams,
  useRouteMatch,
  Link
} from 'react-router-dom';

export default function Movie(props) {
  const { items } = props;

  const { itemId } = useParams();
  const { path, url } = useRouteMatch();

  const [movie, setMovie] = useState();

  // let id = 1;
  const id = items.find(item => item.id === parseInt(itemId))
  // Change ^^^ that line and use a hook to obtain the :id parameter from the URL

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`) // Study this endpoint with Postman
      .then(response => {
        // console.log(response);
        setMovie(response);
        // Study this response with a breakpoint or log statements
        // and set the response data as the 'movie' slice of state
      })
      .catch(error => {
        console.error(error);
      });
    // This effect should run every time time
    // the `id` changes... How could we do this?
  });

  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = evt => { }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;

  return (
    <div className="save-wrapper">
      <Link path={`${url}/movies/${movie.id}`} >
      <div className="movie-card">
      {/* <Link path={`${url}/movies/${movie.id}`} > */}
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>
        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div className="save-button">Save</div>
      </Link>
    </div>
  );
}
