import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

export default function MovieList(props) {
  console.log("MovieList = ", props.movies)
  // props.movies.map( m => {
  //   console.log(m.id)
  // });

  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;
  const { url } = useRouteMatch();
  // url =  url + ''
  console.log("items.js: url = ", url)

  return (
    <div className="movie-card">
      <Link to={`${url}movies/${props.movie.id}`}>
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      </Link>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
