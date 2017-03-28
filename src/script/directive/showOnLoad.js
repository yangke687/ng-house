angular.module("myApp")
	.directive("showOnLoad", function() {
		return {
			link: function(scope, element) {
				element.on("load", function() {
					scope.$apply(function() {
						scope.visible = true;
					});
				});
			}
		};
	});