'use strict';

<<<<<<< HEAD
app.directive('navbar', function ($state, $location, AuthFactory, $rootScope) {
=======
app.directive('navbar', function ($state, $location, AuthFactory) {
>>>>>>> 1a23a597bb436d2f29d61a90a2a0d9743c06e822
  return {
    restrict: 'E',
    templateUrl: '/browser/components/navbar/navbar.html',
    link: function (scope) {
      scope.pathStartsWithStatePath = function (state) {
        var partial = $state.href(state);
        var path = $location.path();
        return path.startsWith(partial);
      };

      scope.logout = AuthFactory.logout;
<<<<<<< HEAD
      scope.currentUser = AuthFactory.getCurrentUser();

    }
=======
      scope.getCurrentUser = AuthFactory.getCurrentUser();
    },
    // controller: function($scope, $rootScope) {
    //   $rootScope.$on('loggedIn', function() {
    //     $scope.sessionActive = true;
    //   })
    // }
>>>>>>> 1a23a597bb436d2f29d61a90a2a0d9743c06e822
  }
});
