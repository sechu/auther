'use strict';

app.factory('Login', function ($http, $log) {
  function submitLogin (formObj) {
    return $http.post('/api/login', formObj)
    .then(function(response) {
      console.log('submit login returns this', response);
      return response.data
    })
    .catch($log);
  }

  return {
    submitLogin: submitLogin
  };

});
