let appli = new Vue({
  el: '#app',
  data: {
  	titlekeyword: '',
  	typekeyword: '',
  	yearkeyword:'',
    Search: []
  },

  methods: {
  	rechercher: function(item){
	let url = `https://www.omdbapi.com/?s=${this.titlekeyword}&type=${this.typekeyword}&y=${this.yearkeyword}`;

	$.getJSON(url, function( data ) {
		 appli.Search = data.Search;
		 console.log(data.Search);
		});


}
}

});





