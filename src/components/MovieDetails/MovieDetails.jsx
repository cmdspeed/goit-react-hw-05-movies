import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  return <div>Now showing film {movieId}</div>;
};
export default MovieDetails;
