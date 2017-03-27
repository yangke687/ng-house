angular.module('myApp')
	.value('dict', {})
	.run(['dict', '$http', 'cache', 'localStorageService', function(dict, $http, cache, localStorageService) {
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
		$http.get('/data/method.json')
			.then(function(res) {
				dict.method = res.data;
				cache.put('method', dict.method[0]);
			}, function() {
				// error handling...
			});
		//
		if (localStorageService.isSupported) {
			if (!localStorageService.get('history'))
				localStorageService.set('history', {});
		}
	}]);