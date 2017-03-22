angular.module('myApp')
	.controller('mainController', ['$http', 'cache', 'dict', '$scope', function($http, cache, dict, $scope) {
		$http.get('/data/houseList.json')
			.then(function(res) {
				$scope.list = res.data;
			})
			.then(function(err) {
				// handle err
			});
		$scope.filterObj = {
			methodId: cache.getObj('method')['id']
		};
		$scope.methodList = dict.method;
		$scope.sClick = function(id, name) {
			cache.put('method', {
				id: id,
				name: name,
			});
			// update method filter
			$scope.filterObj = {
				methodId: cache.getObj('method')['id']
			};
			// broadcast event to head directive
			$scope.$broadcast('updateMethod');
		}
	}]);