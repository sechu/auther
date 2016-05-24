'use strict';

app.controller('SignupCtrl', function ($scope, Signup, $state) {

  $scope.createLogin = function() {
  	var login = {
  		email: $scope.loginEmail,
  		password: $scope.loginPassword
  	}
    Signup.createLogin(login);
    console.log(login);
    $state.go('stories');
    // $scope.reset(login);
  }

});
