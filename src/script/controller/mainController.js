angular.module('myApp')
	.controller('mainController', ['$http', 'cache', 'dict', '$scope', function($http, cache, dict, $scope) {
		$scope.list = [];
		// pagination
		$scope.rows = 6;
		$scope.next = 1;
		$scope.max = 1;
		// infinite-scroll disable swtich
		$scope.busy = false;
		// infinite-scroll function
		$scope.nextPage = function(){

			if ($scope.busy) return;
    		$scope.busy = true;
			// fetch data
			$http.get($scope.backendUrlBase+'/houseList.do?rows='+$scope.rows+'&page='+$scope.next)
			.then(function(res) {
				$scope.max = res.data.maxPage;
				for(var i=0;i<res.data.list.length;i++){
					$scope.list.push(res.data.list[i]);
				}
				$scope.next = parseInt($scope.list.length/$scope.rows)+1;
				//console.log( $scope.next, $scope.max );
				if($scope.next<=$scope.max){
					$scope.busy = false;
				}
				else{
					$scope.busy = true;
				}
			})
			.then(function(err) {
				// handle err
			});
		}
		$scope.filterObj = {
			methodId: cache.getObj('method')['id']
		};
		$scope.methodList = dict.method;
		$scope.sClick = function(id, name) {
			cache.put('method', {
				id: id,
				name: name,
			});
			// update method filter
			$scope.filterObj = {
				methodId: cache.getObj('method')['id']
			};
			// broadcast event to head directive
			$scope.$broadcast('updateMethod');
		}
	}]);