angular.module('myApp')
	.config(function(localStorageServiceProvider) {
		localStorageServiceProvider
			.setPrefix("ngHouse")
			.setStorageType('localStorage');;
	});