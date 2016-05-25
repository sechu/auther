'use strict';

app.controller('LoginCtrl', function ($scope, AuthFactory, $state) {

  $scope.submitLogin = function() {
  	var login = {
  		email: $scope.loginEmail,
  		password: $scope.loginPassword
  	}
    AuthFactory.login(login)
    .then(function(user) {
    	$state.go('home');	
    });
  }

});
