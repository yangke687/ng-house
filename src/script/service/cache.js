angular.module('myApp').service('cache', ['$cookies', function($cookies) {
	this.put = function(key, value) {
		if (typeof(value) === 'object')
			$cookies.putObject(key, value);
		else
			$cookies.put(key, value);
	};
	this.getObj = function(key) {
		return $cookies.getObject(key);
	};
	this.get = function(key) {
		return $cookies.get(key);
	};
	this.remove = function(key) {
		$cookies.remove(key);
	};
}]);