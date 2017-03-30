let appli = new Vue({
  el: '#app',
  data: {
  	keyword: '',
    Search: []
  },

  methods: {
  	rechercher: function(item){
	let url = `https://www.omdbapi.com/?s=${this.keyword}`;

	$.getJSON(url, function( data ) {
		 appli.Search = data.Search;
		 console.log(data.Search);
		});


}
}

});





