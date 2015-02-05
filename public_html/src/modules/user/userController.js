(function () {
	var app = angular.module('userModule', []);
 
	app.controller('userController', ['$scope', function ($scope) {
			$scope.user = {};
			$scope.showForm = false;
			this.showForm = function () {
				$scope.showForm = true;
			};
			this.save = function () {
                            document.getElementById("submit").innerHTML="Guardado: El usuario " + $scope.user.firstName + " " + $scope.user.lastName+" nacido el "+$scope.user.date.getDay()+" del mes "+$scope.user.date.getMonth()+" de "+$scope.user.date.getFullYear();;
			};
		}]);
 
	app.directive('userForm', [function () {
			return {
				restrict: 'E',
				templateUrl: 'src/modules/user/userTemplates.html'
			};
		}]);
})();
