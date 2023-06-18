import { Link } from 'react-router-dom';
const Home = data => {
  const films = data.data;
  return (
    <section>
      <h2>Trending today</h2>
      <ul>
        {films.map(film => {
          return (
            <li key={film.id}>
              <Link to={`/movies/${film.id}`}>
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
