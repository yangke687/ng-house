angular.module('myApp')
	.directive('appHouseMap', [function() {
		return {
			restrict: 'A',
			replace: true,
			templateUrl: 'view/template/houseMap.html'
		};
	}]);