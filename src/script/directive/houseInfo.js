angular.module('myApp')
	.directive('appHouseInfo', [function() {
		return {
			restrict: 'A',
			replace: true,
			templateUrl: 'view/template/houseInfo.html',
		};
	}]);