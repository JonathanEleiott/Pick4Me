angular.module('pick4me.auth', [])

.controller('authController', function($scope) {
  $scope.user = {};
  $scope.username = 'BOB';

  console.log('click');

  $scope.randomUsername = function() {
    $scope.username = 'BobTheBuildersBigBrotherBen';
  };

  // $scope.signin = function() {
  //   console.log('clicked');
  // };

  $scope.signup = function() {
    $scope.randomUsername = function() {
      console.log('clicked2');
      $scope.username = 'BobTheBuildersBigBrotherBen';
    };
    console.log('clicked');
  };
  
});
