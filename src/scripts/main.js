
//setting of our app
angular.module('myApp', ['angularMoment']);


//setting of the main controller
// need to declare the name of the objects so that minification task enable browser to retreive them.
angular.module('myApp').controller('mainCtrl', ['$scope', 'MyModel', 'moment', function($scope, MyModel, moment){
	console.log('hello from the main controller');



	var listOfArticles;
	listOfArticles = $scope.listOfArticles;

	MyModel.getArticles().then(function(response){
		if (response.status == 200) {
			$scope.listOfArticles = response.data;
			console.log('here is the list of articles', response);

		}
		else alert('We are anable to provide the list of articles at current time')
	});

	console.log( 'listOfArticles', listOfArticles);

}]);

//creation of a filter to shorten the URL
angular.module('myApp').filter('urlShortener', function(){
	return function(urlLong){
		var urlShort = urlLong.split('/');
		return urlShort[2];
	}
})

// TODO

// creation of a filter to shorten the urls: DONE
// check parameter to display other news: DONE
// improve css - clean file: DONE
// improve menu display and font size: DONE
// set up gulp task to reload browserSync automatically: DONE
// change browserSync browser from Chrome to FIREFOX: DONE
// set up a sass / gulp task: DONE
// prepare a read me explaining my difficulties and how i have solved them, 
//plus linked towards tutos: DONE
//solve the browsersync pb with style watch task: DONE


//next:

// make usable the bottom filter
// number of news should be increased
// put the key as a parameter in .env? // voir le passer dans les headers: 
// check wether i can solve cross origin
//implement usage of BABEL: make a fork and rewrite the code in ES6 + use BABEL

