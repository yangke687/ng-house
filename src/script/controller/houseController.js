angular.module('myApp')
	.controller('houseController', ['$http', '$scope', function($http, $scope) {
		$scope.numLimit = 2;
		$http.get('/data/houseList.json')
			.then(function(res) {
				$scope.list = res.data;
			}, function() {});
	}]);