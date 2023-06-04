const movieRoutes = {
  fetchTrending: {
    order: 1,
    category: 'Trending Now',
    url: '/trending/tv/week?language=en-US&api_key=bdcc179edca60ac2505ff94508eca47d'
  },
  fetchNetflixOriginals: {
    order: 2,
    category: 'Netflix Originals',
    type: 'tv',
    url: '/discover/tv?with_networks=213&api_key=bdcc179edca60ac2505ff94508eca47d'
  },
  fetchTopRated: {
    order: 3,
    category: 'Top Rated',
    type: 'movie',
    url: '/movie/top_rated?api_key=bdcc179edca60ac2505ff94508eca47d&language=en-US'
  },
  fetchActionMovies: {
    order: 4,
    category: 'Action Movies',
    type: 'movie',
    url: '/discover/movie?with_genres=28&api_key=bdcc179edca60ac2505ff94508eca47d'
  },
  fetchComedyMovies: {
    order: 5,
    category: 'Comedies',
    type: 'movie',
    url: '/discover/movie?with_genres=35&api_key=bdcc179edca60ac2505ff94508eca47d'
  },
  fetchHorroMovies: {
    order: 6,
    category: 'Horror Films',
    type: 'movie',
    url: '/discover/movie?with_genres=27&api_key=bdcc179edca60ac2505ff94508eca47d'
  },
  fetchRomanceMovies: {
    order: 7,
    category: 'Love & Romance',
    type: 'movie',
    url: '/discover/movie?with_genres=10749&api_key=bdcc179edca60ac2505ff94508eca47d'
  }
};

export default movieRoutes;