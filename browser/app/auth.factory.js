'use strict';

app.factory('AuthFactory', function ($http, $log, $rootScope) {


  function login (formObj) { // login
    return $http.post('/api/login', formObj)
    .then(function(response) {
      $rootScope.currentUser = response.data;
      return response.data;
    })
    .catch($log);
  }

  function signup (formObj) { // signup
    return $http.post('/api/users', formObj)
    .then(function(response) {
      $rootScope.currentUser = response.data;
      return response.data;
    })
    .catch($log);
  }

  function logout () {
    $rootScope.currentUser = null;
    return $http.delete('/api/login');
  }

  function setCurrentUser(user) {
    $rootScope.currentUser = user;
  }

  function getCurrentUser() {
    return $http.get('/api/login');
  }


  return {
    login: login,
    signup: signup,
    logout: logout
  };

});
