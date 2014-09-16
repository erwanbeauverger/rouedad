angular.module("myApp",[
    "myApp.services",
    "myApp.controllers",
    "satellizer",
    'ngResource',
    'ngMessages',
    'ngRoute'
])
.config(function($authProvider) {

    $authProvider.facebook({
        clientId: '405613876249873',
    });

    $authProvider.google({
        clientId: '664015000594-10khlribrcrptvrl06kvhifnjl36pt2v.apps.googleusercontent.com'
    });

})
;