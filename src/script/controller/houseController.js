angular.module('myApp')
	.controller('houseController', ['$http', '$stateParams', 'cache', '$scope',
		function($http, $stateParams, cache, $scope) {
			$scope.id = $stateParams.id;
			$scope.numLimit = 2;
			$scope.mapOpts = {
				lng: 102.73333,
				lat: 25.05000,
			};
			$http.get('/data/houseList.json')
				.then(function(res) {
					$scope.list = res.data;
				}, function() {});
			$http.get('/data/house-' + $scope.id + '.json')
				.then(function(res) {
					$scope.house = res.data;
				}, function() {});
		}
	]);