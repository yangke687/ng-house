angular.module('myApp')
	.directive('appHead', ['cache', function(cache) {
		return {
			restrict: 'A',
			replace: true,
			templateUrl: 'view/template/head.html',
			link: function(scope) {
				scope.methodName = cache.getObj('method')['name'];
				scope.$on('updateMethod', function() {
					scope.methodName = cache.getObj('method')['name'];
				});
			}
		};
	}]);