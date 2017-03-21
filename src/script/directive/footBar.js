angular.module('myApp')
	.directive('appFootBar', [function() {
		return {
			restrict: 'A',
			templateUrl: 'view/template/footBar.html',
		};
	}]);