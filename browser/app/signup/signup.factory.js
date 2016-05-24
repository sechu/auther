'use strict';

app.factory('Signup', function ($http, $log) {
  function createLogin (formObj) {
    return $http.post('/api/users', formObj)
    .then(function(response) {
      return response.data;
    })
    .catch($log);
  }

  return {
    createLogin: createLogin
  };
  
});







