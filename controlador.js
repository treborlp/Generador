angular.module("app", [])
.controller("controller",function($scope){

	 
	$scope.vista=false;
	$scope.infoGeneral=[{titulo: ""}];

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
			titulo :  angular.uppercase($scope.titulo),
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

	$scope.vista=true;
	
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

      $scope.generarId=function() {
      	var titulo=angular.lowercase($scope.infoGeneral[0].titulo);
      	var i=0;
      	var up=true;
      	var codigo="";
      	 while(i<titulo.length){

      	 	var temp =titulo.charAt(i);
	      	 	if(!angular.equals(temp," ")) {
	      	 		if(up){
	      	 			codigo=codigo+angular.uppercase(temp);
	      	 			up=false;
	      	 		}else{
	      	 			codigo=codigo+temp;
	      	 		};
      	 		}else {
      	 			up = true;
      	 		};
      	 
      	 	i++;
      	 };

      	console.log(codigo.quitarAcentos());
      };


      String.prototype.quitarAcentos=function(){
		var __r = 
		{

			'À':'A','Á':'A','Â':'A','Ã':'A','Ä':'A','Å':'A','Æ':'E',

			'È':'E','É':'E','Ê':'E','Ë':'E',

			'Ì':'I','Í':'I','Î':'I',

			'Ò':'O','Ó':'O','Ô':'O','Ö':'O',

			'Ù':'U','Ú':'U','Û':'U','Ü':'U',

			'Ñ':'N'

		};
		return this.replace(/[ÀÁÂÃÄÅÆÈÉÊËÌÍÎÒÓÔÖÙÚÛÜÑ]/gi, function(m)
		{

			var ret = __r[m.toUpperCase()];

			if (m === m.toLowerCase())
				ret = ret.toLowerCase();


			return ret;
		});

	   };


});