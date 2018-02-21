angular.module('myApp').service('MyModel', function($http) {
	console.log('hello');
	return {
		getArticles: function(){
			// return $http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=51b7ea8331de4ca6b9005606885940c7');
			return $http.get('https://newsapi.org/v2/top-headlines?country=fr&category=technology&apiKey=51b7ea8331de4ca6b9005606885940c7')
		}
	}
});

