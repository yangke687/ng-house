angular.module('myApp')
	.controller('recoController',['$http','$scope',function($http,$scope){
		$scope.list = [];
		$http.get($scope.backendUrlBase+'/houseList.do?rows=15&page=1')
			.then(function(res) {
				$scope.list = res.data.list;
			})
			.then(function(err) {
				// handle err
			});
	}]);