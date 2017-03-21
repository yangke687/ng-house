angular.module('myApp')
	.filter('filterByObj', function() {
		return function(list, filterObj) {
			var result = [];
			angular.forEach(list, function(item) {
				var isEqual = true;
				for (var e in filterObj) {
					if (filterObj[e] !== item[e]) {
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