angular.module('myApp')
	.directive('appHouseExtra', [function() {
		return {
			restrict: 'A',
			replace: true,
			templateUrl: 'view/template/houseExtra.html'
		};
	}]);