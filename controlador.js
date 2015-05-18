angular.module("app", [])
.controller("controller",function($scope){

	 
	$scope.infoGeneral=[];

	$scope.areas=[];
	$scope.Observaciones=[];
	$scope.Costos=[];
	$scope.Pasos=[];

	//$scope.test={titulo : "Lugo"};

	$scope.agregarArea=function(){
		$scope.areas.push({
			area : "",
		});
	};
	$scope.agregarObs=function(){
		$scope.Observaciones.push({
			observacion : "",
		});
	};
	$scope.agregarCosto=function(){
		$scope.Costos.push({
			costo : "S/. ",
		});
	};
	$scope.agregarPasos=function(){
		$scope.Pasos.push({
			pasos : "",
		});
	};

	$scope.test=function(){
		
		$scope.infoGeneral.push({
			titulo : $scope.titulo,
			arrayArea: $scope.areas,
			arrayObs: $scope.Observaciones,
			arayCostos : $scope.Costos,
			arrayPasos : $scope.Pasos
		});
		console.log($scope.infoGeneral);

		console.log($scope.infoGeneral[0]);
		//console.log($scope.infoGeneral[0].arrayArea[0].area);
		//console.log($scope.infoGeneral[0].arrayArea.length);
		/*
		var longitud = $scope.infoGeneral[0].arrayArea.length;
		for(var i=0 ; i< longitud; i++){
			console.log($scope.infoGeneral[0].arrayArea[i].area);
		}*/
	
	};
	/*$scope.items = [];

	$scope.test=function(){

		};

        $scope.add = function () {
          $scope.items.push({ 
            inlineChecked: true,
            question: "",
            questionPlaceholder: "foo",
            text: ""
          });

          console.log($scope.items);
        };*/
});