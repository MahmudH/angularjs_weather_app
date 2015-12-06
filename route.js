//ROUTES
weatherApp.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'mainController'
    })
    .when('/forecast', {
      templateUrl: 'views/forecast.html',
      controller: 'forecastController'
    })
    .when('/forecast/:days', {
      templateUrl: 'views/forecast.html',
      controller: 'forecastController'
    })

});
