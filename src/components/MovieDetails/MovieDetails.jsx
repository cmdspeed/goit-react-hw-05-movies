import { Link, Outlet, useParams } from 'react-router-dom';
import { movieInfo } from '../API/api';
import React, { useState, useEffect } from 'react';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState([]);
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    movieInfo(movieId).then(data => {
      setDetails(data);
      setGenres(data.genres);
    });
  });

  return (
    <>
      <Link to="/">
        <button>⬅ Go back</button>
      </Link>
      <div className={css.detailsContainer}>
        <img
          src={`https://image.tmdb.org/t/p//w300/${details.poster_path}`}
          alt={`${details.title}`}
        ></img>
        <div>
          <h1 className={css.title}>{details.title}</h1>
          <p className={css.userScore}>
            User Score: {details.vote_average * 10}%
          </p>
          <h3 className={css.title}>Overview</h3>
          <p className={css.overview}>{details.overview}</p>
          <h3 className={css.title}>Genres</h3>
          <ul className={css.genres}>
            {genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
          <p className={css.additional}>Additional information</p>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default MovieDetails;
