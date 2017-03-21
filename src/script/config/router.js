angular.module('myApp')
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$stateProvider.state('main', {
				url: '/main',
				templateUrl: 'view/main.html',
				controller: 'mainController',
			})
			.state('search', {
				url: '/search',
				templateUrl: 'view/search.html',
				controller: 'searchController',
			})
			.state('me', {
				url: '/me',
				templateUrl: 'view/me.html',
				controller: 'meController'
			})
			.state('house', {
				url: '/house/:id',
				templateUrl: 'view/house.html',
				controller: 'houseController'
			});
		$urlRouterProvider.otherwise('main');
	}]);