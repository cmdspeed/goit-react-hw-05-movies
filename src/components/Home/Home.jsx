import { Link } from 'react-router-dom';
import { trendingDay } from 'components/API/api';

const data = await trendingDay();

const Home = () => {
  const films = data.results;
  return (
    <section>
      <h2>Trending today</h2>
      <ul>
        {films.map(film => {
          return (
            <li key={film.id}>
              <Link to={`/movies/${film.id}`} state={{ from: `/` }}>
                {film.title ? film.title : film.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default Home;
