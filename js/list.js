$(document).ready(function(){



			let listMovies = 'http://localhost:3000/inputs';

			// déclencher une fonction avec un laps de temps
			setInterval(function(){

				$('ul').empty();
				$.getJSON(listMovies).done(function(reponse){
					for(let item of reponse) {
						$('ul').append(`<li>${item.keyword}</li>`);

					}
				});
			}, 1000);


	$('button').click(function(){
		// ajax en POST
		let keyword = $('#keyword').val();



		//$.post permet d'envoyer derrière une URL mon nouveau commentaire
		$.post('http:/localhost:3000/inputs', {keyword: keyword}).done(function(){


			$('ul').empty();

			let listMovies = 'http://localhost:3000/inputs';

			$.getJSON(listMovies).done(function(reponse){
				for(let item of reponse) {
					$('ul').append(`<li>${item.keyword}</li>`);

				}
			});



		});



	});



	});



/* recherche multicritères

$(document).ready(function(){



			let listMovies = 'http://localhost:3000/inputs';

			// déclencher une fonction avec un laps de temps
			setInterval(function(){

				$('ul').empty();
				$.getJSON(listMovies).done(function(reponse){
					for(let item of reponse) {
						$('ul').append(`<li>${item.keyword} ${item.type} ${item.year}</li>`);

					}
				});
			}, 1000);


	$('button').click(function(){
		// ajax en POST
		let keyword = $('#keyword').val();
		let type = $('#type').val();
		let year = $('#year').val();



		//$.post permet d'envoyer derrière une URL mon nouveau commentaire
		$.post('http:/localhost:3000/inputs', {keyword: keyword, type: type, year: year}).done(function(){


			$('ul').empty();

			let listMovies = 'http://localhost:3000/inputs';

			$.getJSON(listMovies).done(function(reponse){
				for(let item of reponse) {
					$('ul').append(`<li>${item.keyword} ${item.type} ${item.year}</li>`);

				}
			});



		});



	});



	});
*/
