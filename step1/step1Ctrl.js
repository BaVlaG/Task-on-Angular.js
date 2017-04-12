
angular.module('app')
    .controller('step1Ctrl', function($scope, factory, $location){
        $scope.factory = factory;
        $scope.showLoader = false;

        $scope.requestData = function(){
            $scope.showLoader = true;

            factory.getData(function(data){
                if (data.status > 199 && data.status < 300) {
                    factory.data = data.data;
                } else {
                    console.log(data);
                }
                $scope.showLoader = false;
                $location.path('/step2');
            });


        }
});
