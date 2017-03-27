angular.module('myApp')
	.controller('meController', ['$http', 'localStorageService', '$scope', function($http, localStorageService, $scope) {
		console.log(localStorageService.get('history'));
	}]);