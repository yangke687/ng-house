angular.module('myApp')
	.controller('meController', ['$http', 'localStorageService', '$scope', function($http, localStorageService, $scope) {
		$scope.list = [];
		if (localStorageService.isSupported) {
			$scope.list = localStorageService.get('history');
		}
	}]);