angular.module('myApp')
	.controller('recoController',['localStorageService','$scope',function(localStorageService,$scope){
		$scope.list = [];
		if (localStorageService.isSupported) {
			$scope.list = localStorageService.get('history');
		}
	}]);