
var app = angular.module('myApp', [] );

app.controller('MyController',['$scope',function($scope){

	$scope.show = true;
	$scope.toggle = function(){
		console.log('THIS MESSAGE WILL PRINT WHEN YOU CLICK MY BUTTON');
		$scope.show = !$scope.show;

	}

}]);



app.controller('superHeroes',['$scope',function($scope){

	$scope.heroes = true;
	$scope.hideHeroes = function(){
		$scope.heroes = !$scope.heroes;



	}

}]);
