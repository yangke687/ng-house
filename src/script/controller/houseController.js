angular.module('myApp')
	.controller('houseController', ['$http', '$stateParams', 'localStorageService', '_', '$scope',

		function($http, $stateParams, localStorageService, _, $scope) {
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
					// put current house obj in localStorage
					if (localStorageService.isSupported) {
						var history = localStorageService.get('history');
						if (!_.findWhere(history, {
								id: res.data.id
							})) {
							history.push(res.data);
							localStorageService.set('history', history);
						}
					}
				}, function(err) {});
		}
	]);