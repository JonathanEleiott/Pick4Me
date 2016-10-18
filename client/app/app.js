angular.module('pick4me', [
  pick4me.authorization,
  pick4me.add,
  pick4me.choose,
  pick4me.delete
])

.config(function($routeProvider){
  $routeProvider
    .when('/signin', {
      templateUrl: 'app/auhorization/signin.html',
      controller: 'authorizationController',
      authorization: false
    })
    .when('/signup', {
      templateUrl: 'app/authorization/signup.html',
      controller: 'authorizationController',
      authorization: false
    })
    .otherwise({redirectTo: '/signup'});
});