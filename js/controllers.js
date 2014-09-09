angular.module("myApp.controllers", [])

    .controller("indexctrl", function ($scope) {
        $scope.text = "mon texte que voici";
    })

    .controller('LoginCtrl', function($scope, $auth) {
        $scope.authenticate = function(provider) {
            $auth.authenticate(provider);
        };
    })
;

