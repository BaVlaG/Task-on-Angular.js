
angular.module('app').controller('step2Ctrl', function($scope, factory, $location){

    $scope.arrayData = factory.arrayData;

    $scope.selectAll = function(){
        angular.forEach($scope.arrayData, function(elem){
            elem.checked = true;
        });
    };

    $scope.clearAll = function(){
        angular.forEach($scope.arrayData, function(elem){
            elem.checked = false;
        });
    };

    $scope.moveStep3 = function(){
        $location.path('/step3');
    };



});
