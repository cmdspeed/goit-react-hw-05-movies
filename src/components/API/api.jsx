const API_KEY = '3ff6f99473ad32775432a3dc640480bc';

export const trendingDay = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
  );
  const data = await response.json();

  return data;
};

export const movieInfo = async id => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
};
