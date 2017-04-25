angular.module('myApp')
	.run(function($rootScope){
		$rootScope.backendUrlBase = 'http://gfwy.wyglpt.com/shop/rentSellHouse';
	})
	.value('dict', {})
	.run(['dict', '$http', 'cache', 'localStorageService','$rootScope', function(dict, $http, cache, localStorageService, $rootScope) {
		$http.get($rootScope.backendUrlBase+'/districtList.do')
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
		$http.get($rootScope.backendUrlBase+'/priceTypeList.do')
			.then(function(res) {
				dict.price = res.data;
			}, function(err) {
				// error handling...
			});
		$http.get($rootScope.backendUrlBase+'/houseTypeList.do')
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