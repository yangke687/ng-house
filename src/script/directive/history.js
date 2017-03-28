angular.module('myApp')
	.directive('appHistory', [function() {
		return {
			restrict: 'A',
			templateUrl: 'view/template/history.html',
			replace: true,
			scope: {
				data: '='
			}
		};
	}]);