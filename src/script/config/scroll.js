angular.module('myApp')
	.run(['$rootScope', '$anchorScroll', function($rootScope, $anchorScroll) {
		$rootScope.$on('$locationChangeSuccess', function() {
			$anchorScroll();
		});
	}]);