angular.module('myApp')
	.directive('appHouseDesc', [function() {
		return {
			restrict: 'A',
			templateUrl: 'view/template/houseDesc.html',
		};
	}]);