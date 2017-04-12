
angular.module('app').controller('step3Ctrl', function($scope, factory, $location){
        $scope.arrayData = factory.arrayData;
        $scope.data = factory.data;
        $scope.sortType = null;
        $scope.sortReverse = false;

        $scope.cellName = function(prop, name){
            if (name === 'id'){
                name = '_id';
            }
            return prop[name];
        };

        $scope.backStep = function(){
            $location.path('/step2');
        };

        $scope.sortColumn = function(name){
            $scope.sortType = name;
            $scope.sortReverse = !$scope.sortReverse;
        }

    });
