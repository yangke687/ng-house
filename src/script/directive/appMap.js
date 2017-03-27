angular.module('myApp')
	.directive("appMap", [function() {
		return {
			restrict: "A",
			replace: true,
			template: "<div id='allMap'></div>",
			scope: {
				options: '='
			},
			link: function($scope, el, attr) {

				var map = new AMap.Map("allMap");
				$scope.$watch("options", function(newValue, oldValue) {
					if ($scope.options && $scope.options.lng && $scope.options.lat) {

						var longitude = $scope.options.lng;
						var latitude = $scope.options.lat;

						map.setZoomAndCenter(14, [longitude, latitude]);

						var mk = new AMap.Marker({
							position: [longitude, latitude],
							map: map
						});

						mk.setLabel({
							offset: new AMap.Pixel(20, 20),
							content: "我在这里",
						});
						mk.setMap(map);

					};

				}, true);
			}
		};
	}]);