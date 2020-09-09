(function(){
	'use strict';
	angular.module('MyFirstApp',[])
	.controller('Control',function($scope){
		//$scope.name = "";
		$scope.hello = function(){
			$scope.message = "hi"
			var str = $scope.name;
			var words = str.split(',');
			$scope.test1 = words.length;
			if($scope.name == "")
			{
				$scope.message = "Please enter data first";
			}
			else {
			if (words.length >= 1 && words.length <= 3) {
					$scope.message = "Enjoy!";
			}
			else if (words.length == 0 || $scope.name=="n") {
					$scope.message = "Please enter data first";
			}
			else if (words.length>3) {
					$scope.message = "Too much!";
			}
		}

		};
	});
})();
