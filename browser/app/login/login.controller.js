'use strict';

app.controller('LoginCtrl', function ($scope, Login, $state, $rootScope) {

  $scope.submitLogin = function() {
  	var login = {
  		email: $scope.loginEmail,
  		password: $scope.loginPassword
  	}
    Login.submitLogin(login)
    .then(function(user) {
    	console.log("THIS IS THE RESPONSE", user);
    	$rootScope.$broadcast('loggedIn', user);
    });
    $state.go('stories');    
  }

});
