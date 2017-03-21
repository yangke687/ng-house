angular.module('myApp')
	.directive('appHouseList', [function() {
		return {
			restrict: 'A',
			templateUrl: 'view/template/houseList.html',
			replace: true,
			scope: {
				data: '=',
				filterObj: '=',
			},
			link: function(scope) {

			}
		};
	}]);