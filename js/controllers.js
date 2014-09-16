angular.module("myApp.controllers", ["satellizer"])

    .controller("IndexCtrl", function ($scope, $auth) {
        $scope.text = "mon texte que voici";

        $scope.isAuthenticated = function() {
            return $auth.isAuthenticated();
        };

        $scope.authenticate = function(provider) {
            $auth.authenticate(provider)
                .then(function() {

                })
                .catch(function(response) {

                });
        };

        $scope.logout = function() {
            $auth.logout()
                .then(function() {

                });
        };
    })

    .controller('NavbarCtrl', function($scope, $auth) {
        $scope.isAuthenticated = function() {
            return $auth.isAuthenticated();
        };
    })

    .controller('LogoutCtrl', function($auth, $alert) {
        $auth.logout()
            .then(function() {

            });
    })

;

