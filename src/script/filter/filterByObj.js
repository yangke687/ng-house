angular.module('myApp')
	.filter('filterByObj', function() {
		return function(list, filterObj) {
			var result = [];
			angular.forEach(list, function(item) {
				var isEqual = true;
				for (var e in filterObj) {
					console.log('filter: ', filterObj[e], item[e]);
					if (typeof item[e] !== 'undefined' && filterObj[e] !== item[e]) {
						isEqual = false;
					}
				}
				if (isEqual) {
					result.push(item);
				}
			});
			return result;
		}
	});