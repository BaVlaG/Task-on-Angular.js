angular.module('app', ['ngRoute'])

    .config(function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'step1/step1.html',
                controller: 'step1Ctrl'
            })
            .when('/step2', {
                templateUrl: 'step2/step2.html',
                controller: 'step2Ctrl'
            })
            .when('/step3', {
            templateUrl: 'step3/step3.html',
            controller: 'step3Ctrl'
            });
        $routeProvider.otherwise({redirectTo: '/'});

    })

    .factory('factory', function($q, $http){
        return {
           data: null,
           arrayData: [
               {name: 'id', checked: false},
               {name: 'name', checked: false},
               {name: 'isActive', checked: false},
               {name: 'gender', checked: false},
               {name: 'balance', checked: false},
               {name: 'company', checked: false},
               {name: 'picture', checked: false},
               {name: 'email', checked: false},
               {name: 'age', checked: false},
               {name: 'phone', checked: false, class: 'nowrap'},
               {name: 'eyeColor', checked: false},
               {name: 'address', checked: false}
           ],
           getData: function(callback){
               $http.get('http://www.1json-generator.com/api/json/get/bUsRkvEmHm?indent=2')
                   .then(function(res){
                       callback(res);
                   },
                   function(){
                       $http.get('data.json')
                           .then(function(res){
                               callback(res);
                           },
                           function(error){
                               console.log(error);
                               callback(error);
                           });
                   })

           }
       }});



