'use strict';

app.factory('AuthFactory', function ($http, $log, $rootScope) {
  function signup (formObj) {
    return $http.post('/api/users', formObj)
    .then(function(response) {
      getCurrentUser();
      return response.data;
    })
    .catch($log);
  }

  function login (formObj) {
    return $http.post('/auth', formObj)
    .then(function(response) {
      getCurrentUser();
      return response.data
    })
    .catch($log);
  }

  function logout() {
    return $http.delete('/auth')
    .then(function(response) {
      getCurrentUser();
    });
  }

  function getCurrentUser() {
    return $http.get('/auth')
    .then(function(response) {
      console.log('current user is', response.data);
      $rootScope.currentUser = response.data;
      return response.data;
    })
    .catch($log);
  }

  return {
    signup: signup,
    login: login,
    logout: logout,
    getCurrentUser: getCurrentUser
  };
  
});







