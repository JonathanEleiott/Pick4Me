angular.module('pick4me', [
  'pick4me.auth',
  'ngRoute'
])
.config(function($routeProvider){
  $routeProvider
    .when('/signin', {
      templateUrl: 'app/auhorization/signin.html',
      controller: 'authController',
      authorization: false
    })
    .when('/signup', {
      templateUrl: 'app/authorization/signup.html',
      controller: 'authController',
      authorization: false
    })
    .otherwise({redirectTo: '/signup'});
});