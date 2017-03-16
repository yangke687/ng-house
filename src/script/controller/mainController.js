angular.module('myApp')
	.controller('mainController',['$http','$scope',function($http,$scope){
		$http.get('/data/houseList.json')
			.then(function(res){
				$scope.list = res.data;
			})
			.then(function(err){
				// handle err
			});
	}]);