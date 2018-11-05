var app = angular.module('meuApp', []);
app.controller('meuController', function ($scope) {
	$scope.numero_1 = 0;
	$scope.numero_2 = 0;
	$scope.resultado = 0;
	$scope.som = function(){
		$scope.resultado = $scope.numero_1 + $scope.numero_2;
	}
	$scope.sub = function(){
		$scope.resultado = $scope.numero_1 - $scope.numero_2;
	}
	$scope.mul = function(){
		$scope.resultado = $scope.numero_1 * $scope.numero_2;
	}
	$scope.div = function(){
		if($scope.numero_2 == 0){
			$scope.resultado = "Impossível dividir por zero..."
		}else{
			$scope.resultado = $scope.numero_1 / $scope.numero_2;
		}
	}
});