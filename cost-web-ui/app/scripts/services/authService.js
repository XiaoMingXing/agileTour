'use strict';
angular.module('costAnalysisApp')
    .service('LoginService', function ($http, $cookieStore, Constants) {
        return {
            login: function (user) {
                return $http({
                    method: 'POST',
                    data: user,
                    url: Constants.SERVICE_URLS.LOGIN_URL
                });
            },
            setUserInfoInCookie: function (user) {
                $cookieStore.put('user', user);
            },
            removeUserInfoInCookie: function () {
                $cookieStore.remove('user');
            }
        };
    })
    .service('RegisterService', function ($http, Constants) {
        return {
            register: function (user) {
                return $http({
                    method: 'POST',
                    data: user,
                    url: Constants.SERVICE_URLS.REGISTER_URL
                });
            }
        };
    });
