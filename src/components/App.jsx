import { lazy, Suspense, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { trendingDay } from './API/api';

const Home = lazy(() => import('./Home/Home'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Reviews = lazy(() => import('./MovieDetails/Reviews/Reviews'));
const Cast = lazy(() => import('./MovieDetails/Cast/Cast'));
const Movies = lazy(() => import('./Movies/Movies'));

export const App = () => {
  const [films, setFilms] = useState([]);

  const getFilms = async () => {
    const data = await trendingDay();
    setFilms(data.results);
  };

  getFilms();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home data={films} />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="revies" element={<Reviews />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
