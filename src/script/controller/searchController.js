angular.module('myApp')
	.controller('searchController', ['dict', '$http', 'cache', '$location','$scope', function(dict, $http, cache,$location,$scope) {
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
			list: [],
			visible: false
		};
		$scope.filterObj = {
			methodId: cache.getObj('method')['id']
		};
		$scope.priceFilterObj = {
			methodId: cache.getObj('method')['id']
		}
		var tabId;
		$scope.tClick = function(id, name) {
			tabId = id;
			$scope.sheet.list = dict[id];
			$scope.sheet.visible = true;
		}
		$scope.sClick = function(id, name) {
			if (id) {
				angular.forEach($scope.tabList, function(item) {
					if (item.id === tabId) {
						item.name = name;
						//$scope.filterObj[tabId + 'Id'] = id;
						$location.search(tabId+'Id',id);
					}
				});
			} else {
				//delete $scope.filterObj[tabId + 'Id'];
				$location.search(tabId+'Id',null);

				angular.forEach($scope.tabList, function(item) {
					if (item.id === tabId)
						switch (item.id) {
							case 'district':
								item.name = '区域';
								break;
							case 'price':
								item.name = '售价';
								break;
							case 'type':
								item.name = '房型';
								break;
						}
				});
			}
		}
		$scope.search = function() {
			var url = $scope.backendUrlBase+'/houseList.do';
			var params = '';
			for(var key in $location.search()){
				params += key+'='+$location.search()[key]+'&';
			}
			if(params){
				url += '?'+params;
			}
			//
			$http.get(url)
				.then(function(res) {
					$scope.list = res.data;
				}, function(err) {
					// errro handling...
				});
		}
		$scope.search();
		$scope.$on('$locationChangeSuccess',function(){
			$scope.search();
		});
	}]);