import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieInfo } from '../../API/api';

import NoInfo from '../../NoInfo/NoInfo';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviewsData, setReviesData] = useState([]);

  useEffect(() => {
    movieInfo(movieId, '/reviews').then(data => {
      setReviesData(data.results);
    });
  }, [movieId]);
  console.log(reviewsData);
  if (reviewsData.length) {
    return (
      <div>
        <ul>
          {reviewsData.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Author:{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return <NoInfo site="reviews"></NoInfo>;
};

export default Reviews;
