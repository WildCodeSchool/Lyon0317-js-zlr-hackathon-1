$(document).ready(function () {
	let appli = new Vue({
		el: '#app',
		data: {
			"titlekeyword": '',
			"typekeyword": '',
			"yearkeyword": '',
			"idkeyword": '',
			"Search": []
		},

		methods: {
			rechercher: function (item) {
				let url = `https://www.omdbapi.com/?s=${this.titlekeyword}&type=${this.typekeyword}&y=${this.yearkeyword}`;

				$.getJSON(url, function (data) {
					appli.Search = data.Search;
					console.log(data.Search);
				});
			}
		},

		expand: function (item) {
			let url = `https://www.omdbapi.com/?i=${this.idkeyword}`; //cet url en lui-même marche

			$.getJSON(url, function (data) {
				appli.Search = data.Search;
				console.log(data.Search);
			});
		}

	});
});



