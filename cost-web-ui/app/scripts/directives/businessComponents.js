'use strict';
angular.module('costAnalysisApp')
  .directive('loginForm', function () {
    return {
      restrict: "E",
      templateUrl: "../../views/template/loginForm.html",
      controller: ['$scope', '$attrs', '$location', 'LoginService', 'validator', 'Spinner', '$cookieStore',
        function ($scope, $attrs, $location, loginService, validator, Spinner, $cookieStore) {
          $scope.dataModel = {
            username: $cookieStore.get('username') || '',
            password: $cookieStore.get('password') || '',
            isRemember: $cookieStore.get('isRemember') || false
          };
          $scope.login = function ($event) {
            $scope.validate(['username', 'password']);
            if (!$scope.isValid) {
              return;
            }
            var target = $($event.target).parents('.modal-block');
            Spinner.show(target);
            console.log("Invoke Login");
            loginService.login($scope.dataModel)
              .then(function (result) {
                if (result.data.data) {
                  if ($scope.dataModel.isRemember === true) {
                    loginService.setUserInfoInCookie($scope.dataModel);
                  } else {
                    loginService.removeUserInfoInCookie();
                  }
                  $location.path("users");
                }
                else {
                  $scope.loginFailed = true;
                }
              })
              .finally(function () {
                Spinner.hide(target);
              });
          };

          validator.registerErrorListener($scope, {
            email: {
              methods: ['validateNotEmpty', 'validateEmailPattern'],
              dataModel: 'dataModel.email',
              action: true
            },
            password: {
              methods: 'validateNotEmpty',
              dataModel: 'dataModel.password',
              action: true
            }
          });

          $scope.validate = function (properties) {
            if (angular.isString(properties)) {
              properties = [properties];
            }
            validator.clearError(properties);
            validator.validate(properties);
          };
        }]
    }
  });
