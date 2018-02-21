
//setting of our app
angular.module('myApp', ['angularMoment']);


//setting of the main controller
angular.module('myApp').controller('mainCtrl', function($scope, MyModel, moment){
	console.log('tout va bien');


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

});

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
// put the key as a parameter in .env? // voir le passer dans les headers: 
//en profiter pour faire un forK sur github
// improve css - clean file: DONE
// set up a sass / gulp task
// improve menu display and font size: DONE
// check wether i can solve cross origin
// make usable the bottom filter
// voir avec Ali si on peut parametrer bWs en choisissant le navigateur
// prepare a read me explaining my difficulties and how i have solved them, 
//plus linked towards tutos, and push to Git
