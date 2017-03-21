angular.module('myApp')
	.directive('appHeadBar', [function() {
		return {
			restrict: 'A',
			templateUrl: 'view/template/headBar.html',
			scope: {
				text: '='
			},
			link: function(scope) {
				scope.back = function() {
					window.history.go(-1);
				}
			}
		};
	}]);