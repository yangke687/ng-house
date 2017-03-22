angular.module('myApp')
	.directive('appSheet', [function() {
		return {
			restrict: 'A',
			templateUrl: 'view/template/sheet.html',
			replace: true,
			scope: {
				isVisible: '=',
				list: '=',
				select: '&',
				filterObj: '='
			},
			link: function(scope) {

			}
		};
	}]);