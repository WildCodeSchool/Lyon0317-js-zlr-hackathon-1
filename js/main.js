$(document).ready(function () {

	$('#search_button').click(function () {
		let movie = $('#film').val();
		let url = 'https://www.omdbapi.com/?s=' + movie;


		$.get(url, function (data) {
			let results = data.Search
			for (let i = 0; i < results.length; i++) {
				$('#affichage').append(`<li>${results[i].Title}</li>`);
				$('#affichage').append(`<li>${results[i].Type}</li>`);
				$('#affichage').append(`<li>${results[i].Year}</li>`);
				$('#affichage').append(`<li>${results[i].imdbID}</li>`);
				$('#affichage').append(`<li>${results[i].Image}</li>`);
			}

		});

	});

});