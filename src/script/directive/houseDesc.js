angular.module('myApp')
	.directive('appHouseDesc', [function() {
		return {
			restrict: 'A',
			replace: true,
			templateUrl: 'view/template/houseDesc.html',
		};
	}]);