var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'mainController'
    })
    .when('/second', {
      templateUrl: 'views/second.html',
      controller: 'secondController'
    })
});

myApp.controller('mainController', ['$scope', function($scope) {
  $scope.name = 'Main';
  $scope.person = {
    name: 'John Doe',
    address: 'Ada House'
  }
}]);

myApp.controller('secondController', ['$scope', function($scope) {
  $scope.name = 'Second';
}]);

myApp.directive('searchResult', function(){
  return {
    restrict: 'E',
    templateUrl: 'directives/searchresult.html',
    scope: {
      personObject: '='
    }
  }
});
