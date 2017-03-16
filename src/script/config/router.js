angular.module('myApp')
	.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
		$stateProvider.state('main',{
			url: '/main',
			templateUrl: 'view/main.html',
			controller: 'mainController',
		});
		$urlRouterProvider.otherwise('main');
	}]);