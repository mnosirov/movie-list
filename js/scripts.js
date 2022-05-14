var moviesList = $(".js-movies-list");
var movieTemplate = $("#movie").content;
var moviesSlice = kinolar.slice(0, 100);

var createMovieElement = function (movie) {
  var elNewMovie = movieTemplate.cloneNode(true);

  $(".movie-title", elNewMovie).textContent = movie.title;
  $(".movie-title", elNewMovie).title = movie.title;
  $(".movie-year", elNewMovie).textContent = movie.year;

  for (actor of movie.cast) {
    var actorsName = createElement("li", "list-group-item text-truncate", actor);
    actorsName.title = actor;
    $(".actors-list", elNewMovie).appendChild(actorsName);
  };

  $(".movie-genre", elNewMovie).textContent = movie.genres.join(" , ");
  $(".movie-genre", elNewMovie).title = movie.genres.join(" , ");

  return elNewMovie;
};

var renderKinolar = function (kinolar) {
  moviesList.innerHTML = '';

  var elMovieWrapperFragment = document.createDocumentFragment();
  kinolar.forEach(function (movie) {
    elMovieWrapperFragment.appendChild(createMovieElement(movie));
  });

  moviesList.appendChild(elMovieWrapperFragment);
};

renderKinolar(moviesSlice);
