angular.module('myApp')
	.controller('searchController', ['dict', '$http', '$scope', function(dict, $http, $scope) {
		$scope.tabList = [{
			id: 'district',
			name: '区域',
		}, {
			id: 'price',
			name: '售价'
		}, {
			id: 'type',
			name: '房型'
		}];
		$scope.sheet = {
			visible: false
		};
		$scope.tClick = function(id, name) {
			$scope.sheet.visible = true;
		}
	}]);