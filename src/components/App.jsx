import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Header } from './Header/Header';

const Home = lazy(() => import('./Home/Home'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Reviews = lazy(() => import('./MovieDetails/Reviews/Reviews'));
const Cast = lazy(() => import('./MovieDetails/Cast/Cast'));
const Movies = lazy(() => import('./Movies/Movies'));

export const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};
