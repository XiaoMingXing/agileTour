'use strict';

/**
 * @ngdoc function
 * @name portalApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the portalApp
 */
angular.module('costAnalysisApp')
  .controller('NavController', function ($scope, messageCN) {
    $scope.navItems = [
      {text: "主页", state: "home"},
      {text: "用户管理", state: "users"},
      {text: "关于我们", state: "about"}
    ];
    $scope.navIcons = messageCN.nav_icons;
  });
