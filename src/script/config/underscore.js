angular.module('myApp')
	.factory('_', ['$window', function($window) {
		return $window._;
	}]);