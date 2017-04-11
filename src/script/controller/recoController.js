angular.module('myApp')
	.controller('recoController',['$http','$scope',function($http,$scope){
		$scope.list = [];
		$http.get('/data/houseList.json')
			.then(function(res) {
				$scope.list = res.data;
			})
			.then(function(err) {
				// handle err
			});
	}]);