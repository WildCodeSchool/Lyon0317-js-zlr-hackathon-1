$(document).ready(function () {



	let listMovies = 'http://localhost:3000/inputs';

	// déclencher une fonction avec un laps de temps
	/*			setInterval(function(){
	
					$('ul').empty();
					$.getJSON(listMovies).done(function(reponse){
						for(let item of reponse) {
							$('ul').append(`<li>${item.film}</li>`);
	
						}
					});
				}, 1000);*/


	$('button').click(function () {
		// ajax en POST
		let film = $('#film').val();



		//$.post permet d'envoyer derrière une URL mon nouveau commentaire
		$.post('http:/localhost:3000/inputs', { film: film }).done(function () {


			$('ul').empty();

			let listMovies = 'http://localhost:3000/inputs';

			$.getJSON(listMovies).done(function (reponse) {
				for (let item of reponse) {
					$('ul').append(`<li>${item.film}</li>`);

				}
			});



		});



	});



});
