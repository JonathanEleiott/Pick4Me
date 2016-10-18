angular.module('pick4me.auth', [])

.controller('authController', ['$scope', function($scope) {

  $scope.randomUsername = function() {
    $scope.username = 'BobTheBuildersBigBrotherBen';
  };

  $scope.signin = function() {
    console.log('clicked');
  };

  $scope.signup = function() {
    $scope.randomUsername = function() {
      $scope.username = 'BobTheBuildersBigBrotherBen';
    };
    console.log('clicked');
  };
  
}]);
