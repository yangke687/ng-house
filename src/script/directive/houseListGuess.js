angular.module('myApp')
	.directive('appHouseListGuess', [function() {
		return {
			restrict: 'A',
			replace: true,
			templateUrl: 'view/template/houseListGuess.html',
			link: function(scope) {
				scope.numLimit = 2;
			}
		};
	}]);