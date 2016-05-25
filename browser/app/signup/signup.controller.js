'use strict';

app.controller('SignupCtrl', function ($scope, AuthFactory, $state) {

  $scope.createLogin = function() {
  	var login = {
  		email: $scope.loginEmail,
  		password: $scope.loginPassword
  	}
    AuthFactory.signup(login)
    .then(function() {
      $state.go('stories');
    });
    // $scope.reset(login);
  }

});
