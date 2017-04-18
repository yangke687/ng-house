angular.module('myApp')
	.controller('searchController', ['dict', '$http', 'cache', '$location','$scope', function(dict, $http, cache,$location,$scope) {
		$scope.keyword = '';
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
		$scope.list = [];
		// pagination
		$scope.rows = 6;
		$scope.next = 1;
		$scope.max = 1;
		// infinite-scroll disable swtich
		$scope.busy = false;
		$scope.search = function() {
			if ($scope.busy) return;
    		$scope.busy = true;
			// url
			var url = $scope.backendUrlBase+'/houseList.do?rows='+$scope.rows+'&page='+$scope.next+'&';
			var params = '';
			// keyword 
			if($scope.keyword){
				$location.search('name',$scope.keyword);
			}
			else{
				// else remove keyword
				$location.search('name',null);
			}
			
			// compose params
			for(var key in $location.search()){
				params += key+'='+$location.search()[key]+'&';
			}
			if(params){
				url += params;
			}

			// fetch data
			$http.get(url)
				.then(function(res) {
					$scope.max = res.data.maxPage;
					for(var i=0;i<res.data.list.length;i++){
						$scope.list.push(res.data.list[i]);
					}
					$scope.next = parseInt($scope.list.length/$scope.rows)+1;
					if($scope.next<=$scope.max){
						$scope.busy = false;
					}
					else{
						$scope.busy = true;
					}
				}, function(err) {
					// errro handling...
				});
		}
		$scope.$on('$locationChangeSuccess',function(){
			// reset pagination params
			$scope.rows = 6;
			$scope.next = 1;
			$scope.max = 1;
			$scope.list = [];
			console.log('reset');
			$scope.search();
		});
	}]);