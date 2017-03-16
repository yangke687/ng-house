angular.module('myApp')
	.directive('appFoot',[function(){
		return {
			restrict: 'A',
			replace: true,
			templateUrl: 'view/template/foot.html',
			link: function(scope){
				
			}
		};
	}]);