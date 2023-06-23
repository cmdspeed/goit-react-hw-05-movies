import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieInfo } from '../../API/api';
import NoInfo from '../../NoInfo/NoInfo';

const PLACEHOLDER_PHOTO_URL = `https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=200&t=st=1687362525~exp=1687363125~hmac=0b38e340921c7c42beb3fc2b7370fa7a73acf9815fd13471f441ff07e6ae0246`;

const Cast = () => {
  const { movieId } = useParams();
  const [castData, setCastData] = useState([]);

  useEffect(() => {
    movieInfo(movieId, '/credits').then(data => {
      setCastData(data.cast);
    });
  }, [movieId]);

  if (castData.length) {
    return (
      <div>
        <ul>
          {castData.map(({ cast_id, name, profile_path, character }) => (
            <li key={cast_id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p//w200/${profile_path}`
                    : PLACEHOLDER_PHOTO_URL
                }
                alt={`${name}`}
              />
              <h3>{name}</h3>
              <p>charakter: {character}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return <NoInfo site="cast"></NoInfo>;
};

export default Cast;
