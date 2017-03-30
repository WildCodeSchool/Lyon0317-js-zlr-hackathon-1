let appli = new Vue({
  el: '#app',
  data: {
    Search: []
  }
});


$.getJSON("http://www.omdbapi.com/?t=c&y=2001", function( data ) {
	appli.Search = data;
	console.log(data);
});