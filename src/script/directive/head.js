angular.module('myApp')
	.directive('appHead',[function(){
		return {
			restrict: 'A',
			replace: true,
			templateUrl: 'view/template/head.html',
			link: function(scope){

			}
		};
	}]);