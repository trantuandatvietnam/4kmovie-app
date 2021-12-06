const apiConfig = {
    baseUrl: "https://api.themoviedb.org/3/",
    apiKey: "92f1e6742a71a42560ce0af78ac6ddd4",
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;