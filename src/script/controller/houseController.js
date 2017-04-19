angular.module('myApp')
	.controller('houseController', ['$http', '$stateParams', 'localStorageService', '_', '$scope',

		function($http, $stateParams, localStorageService, _, $scope) {
			$scope.id = $stateParams.id;
			$scope.mapOpts = {
				lng: 102.73333,
				lat: 25.05000,
			};
			$http.get($scope.backendUrlBase + '/houseList.do?rows=5&page=1')
				.then(function(res) {
					$scope.list = res.data.list;
				}, function() {});
			$http.get($scope.backendUrlBase + '/houseDetail.do?id=' + $scope.id)
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