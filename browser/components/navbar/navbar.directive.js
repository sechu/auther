'use strict';

app.directive('navbar', function ($state, $location, $rootScope) {
  return {
    restrict: 'E',
    templateUrl: '/browser/components/navbar/navbar.html',
    link: function (scope) {
      scope.pathStartsWithStatePath = function (state) {
        var partial = $state.href(state);
        var path = $location.path();
        return path.startsWith(partial);
      };
    },
    controller: function($scope, $rootScope) {
      $rootScope.$on('loggedIn', function() {
        $scope.sessionActive = true;

      })
    }
  }
});
