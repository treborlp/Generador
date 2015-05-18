angular.module("app", [])
.controller("controller",function($scope){

	 $scope.items = [];

        $scope.add = function () {
          $scope.items.push({ 
            inlineChecked: true,
            question: "",
            questionPlaceholder: "foo",
            text: ""
          });
        };
});