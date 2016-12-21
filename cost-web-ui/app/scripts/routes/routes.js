"use strict";

angular.module('costAnalysisApp')
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('users', {
      templateUrl: 'views/users/main.html',
      controller: 'UsersCtrl',
      url: "/users"
    });

    $stateProvider
      .state('home', {
        url: "/home",
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .state('users', {
        url: "/users",
        templateUrl: 'views/users/main.html',
        controller: 'UsersCtrl'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/template/loginForm.html',
        controller: 'loginCtrl'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'views/template/registerForm.html',
        controller: 'registerCtrl'
      });
  });
