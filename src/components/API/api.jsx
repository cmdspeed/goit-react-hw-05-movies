const API_KEY = '3ff6f99473ad32775432a3dc640480bc';

export const trendingDay = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
  );
  const data = await response.json();
  console.log(data);
  return data;
};
