$(document).ready(function () {

	$('#search_button').click(function () {
		let movie = $('#film').val();
		let url = 'https://www.omdbapi.com/?s=' + movie;


		$.get(url, function (data) {
			let results = data.Search
			for (let i = 0; i < results.length; i++) {

			}

		});

	});

});