(function(){
	'use strict';
	angular.module('MyFirstApp',[])
	.controller('Control',function($scope){
		//$scope.name = "";
		$scope.hello = function(){
			var str = $scope.name;
			var words = str.split(',');
			$scope.test1 = words.length;
			if($scope.name == "")
			{
				return "Please enter data first";
			}
			else {
			if (words.length >= 1 && words.length <= 3) {
					return "Enjoy!";
			}
			else if (words.length == 0 || $scope.name=="n") {
					return "Please enter data first";
			}
			else if (words.length>3) {
					return "Too much!";
			}
		}

		};
	});
})();
