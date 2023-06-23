const API_KEY = '3ff6f99473ad32775432a3dc640480bc';
const SITE_URL = 'https://api.themoviedb.org/3';

export const trendingDay = async () => {
  const response = await fetch(
    `${SITE_URL}/trending/all/day?api_key=${API_KEY}`
  );
  const data = await response.json();

  return data;
};

export const movieInfo = async (id, options) => {
  const response = await fetch(
    `${SITE_URL}/movie/${id}${options}?api_key=${API_KEY}`
  );

  if (response.ok) {
    const data = await response.json();
    return data;
  }
  return 'error';
};
