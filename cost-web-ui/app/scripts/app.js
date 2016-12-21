'use strict';

/**
 * @ngdoc overview
 * @name stockWebUiApp
 * @description
 * # stockWebUiApp
 *
 * Main module of the application.
 */
angular
    .module('costAnalysisApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ui.router'
    ]).run(['$rootScope', function ($rootScope) {
        $rootScope.$safeApply = function safeApply(operation) {
            var phase = this.$root.$$phase;
            if (phase !== '$apply' && phase !== '$digest') {
                this.$apply(operation);
                return;
            }

            if (operation && typeof operation === 'function') {
                operation();
            }
        };
    }]);

