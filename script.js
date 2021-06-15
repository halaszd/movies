// Decide whether a movie created before or after 2000.

function logMovieObject(movieObject) {
	console.log(movieObject);
	console.log(movieObject.title);
};


function logMovieTitle(movieTitle) {
	console.log(movieTitle);
};


function createMovieSection(title, year, isOlder) {
	textIsOlder = "This movie was created after:";

	if(isOlder) {
		textIsOlder = "This movie was created before:";
	}

	return `
			<section class="movie">
				<h2>${title}</h2>
				<h3>${textIsOlder} ${year}</h3>
			</section>	
		`;
};


function _load() {
	const rootElement = document.getElementById("root");

	let year = 2000;

	for(let movie of movies) {
		// logMovieTitle(movie.title);
		logMovieObject(movie);
		rootElement.insertAdjacentHTML("beforeend", createMovieSection(movie.title, year, movie.year <= year));
	};
};


window.addEventListener("load", _load);