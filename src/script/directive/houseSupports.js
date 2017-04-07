angular.module('myApp')
	.directive('appHouseSupports',[function(){
		return {
			restrict: 'A',
			replace: true,
			templateUrl: 'view/template/houseSupports.html'
		};
	}]);