angular.module('myApp')
	.directive('appTab', [function() {
		return {
			restrict: 'A',
			templateUrl: 'view/template/tab.html',
			replace: true,
			scope: {
				list: '='
			},
			link: function(scope) {
				scope.click = function(item) {
					scope.selectedId = item.id;
				}
			}
		};
	}]);