var app = angular.module('deep-web-game', []);
app.controller('deep-web-ctrl', function($scope) {
  $scope.fullWidth = window.width;
  $scope.fullHeight = window.height;
});
