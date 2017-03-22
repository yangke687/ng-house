angular.module('myApp')
	.directive('appHouseListNearby', [function() {
		return {
			restrict: 'A',
			templateUrl: 'view/template/houseListNearby.html',
			replace: true,
			link: function(scope) {}
		};
	}]);