const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "4800f7f9d22b19a395c7392bba2a489e",
  originalImgage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Imgage: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
