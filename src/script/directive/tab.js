angular.module('myApp')
	.directive('appTab', [function() {
		return {
			restrict: 'A',
			templateUrl: 'view/template/tab.html',
			replace: true,
			scope: {
				list: '=',
				tabClick: '&'
			},
			link: function(scope) {
				scope.click = function(item) {
					scope.selectedId = item.id;
					console.log(item);
					scope.tabClick(item);
				}
			}
		};
	}]);