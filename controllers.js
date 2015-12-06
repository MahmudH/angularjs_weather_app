//CONTROLLERS
weatherApp.controller('mainController', ['$scope', '$location', 'cityService', function($scope, $location, cityService){

  $scope.city = cityService.city;

  $scope.forecastSubmit = function() {
    $location.path('/forecast');
  }

  $scope.$watch('city', function(){
    cityService.city = $scope.city;
  });

}]);

weatherApp.controller('forecastController', ['$scope', 'cityService', '$resource', '$routeParams', function($scope, cityService, $resource, $routeParams){

  $scope.city = cityService.city;
  $scope.days = $routeParams.days || '2';

  $scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily?appid=2de143494c0b295cca9337e1e96b00e0', { callback: 'JSON_CALLBACK' }, { get: { method: 'JSONP' }});

  $scope.weatherResult = $scope.weatherAPI.get( { q: $scope.city, cnt: $scope.days } );

  console.log($scope.weatherResult);

  $scope.convertToCelcius = function(degK){
    return Math.round(degK - 273.15);
  }

  $scope.convertToDate = function(dt){
    return new Date(dt * 1000);
  }


}]);

