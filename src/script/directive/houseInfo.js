angular.module('myApp')
	.directive('appHouseInfo', [function() {
		return {
			restrict: 'A',
			templateUrl: 'view/template/houseInfo.html',
		};
	}]);