class MovieItem extends HTMLElement {
  constructor() {
    super()
    this.shadowDOM = this.attachShadow({mode:'open'})
  }

  set movie(movie) {
    this._movie = movie
    this.render()
  }

  render() {
    let moviekey;
    if (this._movie.poster_path) {
      moviekey = `https://image.tmdb.org/t/p/w500${this._movie.poster_path}`
    } else {
      moviekey = `https://nbcpalmsprings.com/wp-content/uploads/sites/8/2021/12/BEST-MOVIES-OF-2021.jpeg`
    }
    this.shadowDOM.innerHTML = `
    <style>
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :host {
    display: inline-block;
    width: 500px;
    margin: 18px;
    margin-bottom: 18px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    overflow: hidden;
    background-color: #AD8E70;
  }
  
  .fan-art-movie {
    width: 100%;
    max-height: 300px;
    object-fit: cover;
    object-position: center;
  }
  
  .movie-info {
    padding: 24px;
  }
  
  .movie-info > h2 {
    font-weight: lighter;
  }
  
  .movie-info > p {
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 10; /* number of lines to show */
  }
  @media only screen and (max-width: 600px) {
    :host {
      width: 320px;
      margin: 0;
      margin-bottom: 32px;
    } 
  }
    </style>
          <img class="fan-art-movie" src="${moviekey}" alt="Fan Art">
          <div class="movie-info">
            <h2>${this._movie.title}</h2>
            <p>release : ${this._movie.release_date}</p>
          </div>
        `
  }
}

customElements.define('movie-item', MovieItem)