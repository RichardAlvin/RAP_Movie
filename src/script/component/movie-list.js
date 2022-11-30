import './movie-item.js';
 
class MovieList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set movies(movies){
    this._movies = movies;
    this.render();
  }
 
  render() {
    this.shadowDOM.innerHTML = `
      <style>

      </style>

      <h1>Rated Movie</h1>
    `;

    this._movies.forEach(movie =>{
      const movieItemElement = document.createElement('movie-item');
      movieItemElement.movie = movie;
      this.shadowDOM.appendChild(movieItemElement);
    });
  }
}
 
customElements.define('movie-list', MovieList);