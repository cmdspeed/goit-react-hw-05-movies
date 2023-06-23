import { useEffect, useState } from 'react';
import { movieQuery } from '../API/api';
import { Link, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [inputValue, setInputValue] = useState('');
  const [movieData, setMovieData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [valueQuery, setValueQuery] = useState(searchParams.get('query'));

  const fetchMovie = async query => {
    await movieQuery(query).then(data => {
      setMovieData(data.results);
    });
  };

  useEffect(() => {
    fetchMovie(valueQuery);
    setValueQuery(searchParams.get('query'));
  }, [valueQuery, searchParams]);

  const Search = event => {
    event.preventDefault();
    setSearchParams(`query=${inputValue}`);
    fetchMovie(inputValue);
  };

  if (valueQuery === null) {
    return (
      <form name="form" onSubmit={Search}>
        <input
          type="input"
          name="query"
          onChange={event => setInputValue(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    );
  }

  if (valueQuery.length) {
    return (
      <>
        <form name="form" onSubmit={Search}>
          <input
            type="input"
            name="query"
            onChange={event => setInputValue(event.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        <ul>
          {movieData.map(({ id, title }) => (
            <li key={id}>
              <Link
                to={`/movies/${id}`}
                state={{ from: `/movies?query=${searchParams.get('query')}` }}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
};
export default Movies;
