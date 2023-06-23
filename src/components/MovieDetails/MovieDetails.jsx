import { Link, Outlet, useParams } from 'react-router-dom';
import { movieInfo } from '../API/api';
import React, { useState, useEffect } from 'react';
import css from './MovieDetails.module.css';

const POSTER_PLACEHOLDER_URL =
  'https://img.freepik.com/free-vector/glitch-style-poster_1284-24645.jpg?w=300&t=st=1687363450~exp=1687364050~hmac=c62699308b0e7656912ddd48d9a5df99c7b5de993d3b5d3b02d749643b6d89c1';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState([]);
  const [genres, setGenres] = useState([]);
  const [status, setStatus] = useState('none');
  useEffect(() => {
    movieInfo(movieId).then(data => {
      setDetails(data);
      setGenres(data.genres);
      if (data !== 'error') {
        setStatus('ok');
      }
    });
  }, [movieId]);

  if (status === 'ok') {
    return (
      <>
        <Link to="/">
          <button>⬅ Go back</button>
        </Link>
        <div className={css.detailsContainer}>
          <img
            src={
              details.poster_path
                ? `https://image.tmdb.org/t/p//w300/${details.poster_path}`
                : POSTER_PLACEHOLDER_URL
            }
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
          </div>
        </div>
        <div className={css.border}>
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
        <Outlet />
      </>
    );
  }
  return <h2>sorry, there is no access to this data yet </h2>;
};
export default MovieDetails;
