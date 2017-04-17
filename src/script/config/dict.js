angular.module('myApp')
	.run(function($rootScope){
		$rootScope.backendUrlBase = 'http://192.168.17.159/shop/rentSellHouse';
	})
	.value('dict', {})
	.run(['dict', '$http', 'cache', 'localStorageService','$rootScope', function(dict, $http, cache, localStorageService, $rootScope) {
		$http.get('/data/district.json')
			.then(function(res) {
				dict.district = res.data;
			}, function() {})
			.catch(function(e) {
				console.log("Error:", e);
				throw e;
			})
			.finally(function() {
				console.log("Finaly Block");
			});
		$http.get('/data/price.json')
			.then(function(res) {
				dict.price = res.data;
			}, function(err) {
				// error handling...
			});
		$http.get('/data/houseType.json')
			.then(function(res) {
				dict.type = res.data;
			}, function(err) {
				// error handling...
			});
		$http.get($rootScope.backendUrlBase+'/methodTypeList.do')
			.then(function(res) {
				dict.method = res.data;
				cache.put('method', dict.method[0]);
			}, function() {
				// error handling...
			});
		//
		if (localStorageService.isSupported) {
			if (!localStorageService.get('history'))
				localStorageService.set('history', []);
		}
	}]);