angular.module("myApp").service("MyModel",["$http",function(e){return console.log("Hello from service MyModel"),{getArticles:function(){return e.get("https://newsapi.org/v2/top-headlines?country=fr&category=technology&apiKey=51b7ea8331de4ca6b9005606885940c7")}}}]);