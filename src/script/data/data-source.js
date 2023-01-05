class DataSource {
  static searchMovie(keyword) {
    return fetch(`https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=1d82a043739161e50e4f1812d4b5ea91&language=en-US&page=1`)
    .then(response => {
      return response.json()
    })
    .then(responseJson => {
      if (responseJson.results) {
        return Promise.resolve(responseJson.results);
      } else {
        return Promise.reject(`${keyword} is not found`);
      }
    });
  }
  static getMovie() {
    return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=1d82a043739161e50e4f1812d4b5ea91&language=en-US&page=1`)
    .then(response => {
      return response.json()
    })
    .then(responseJson => {
      if (responseJson.results) {
        return Promise.resolve(responseJson.results);
      } else {
        return Promise.reject(`API is not found`);
      }
    });
  }
}

export default DataSource