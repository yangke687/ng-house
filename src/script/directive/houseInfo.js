angular.module('myApp')
	.directive('appHouseInfo', [function() {
		return {
			restrict: 'A',
			replace: true,
			templateUrl: 'view/template/houseInfo.html',
			link: function(scope) {
				scope.back = function() {
					window.history.go(-1);
				}
			}
		};
	}]);