'use strict';

/**
 * @ngdoc function
 * @name portalApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the portalApp
 */
angular.module('costAnalysisApp')
  .controller('HomeCtrl', ['$scope', '$location', 'LoginService', 'messageCN', '$cookieStore',
    function ($scope, $location, LoginService, messageCN, $cookieStore) {
      $scope.navItems = messageCN.nav_items;
      $scope.navIcons = messageCN.nav_icons;

      $scope.getLoginState = function () {
        return $cookieStore.get('isLogged');
      };
      $scope.clearLoginState = function () {
        return $cookieStore.remove('isLogged');
      };
    }]);
