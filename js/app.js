angular.module("myApp",[
    "myApp.services",
    "myApp.controllers",
    "satellizer"
])
.config(function($authProvider) {

    $authProvider.facebook({
        clientId: '405613876249873',
    });

    $authProvider.google({
        clientId: '631036554609-v5hm2amv4pvico3asfi97f54sc51ji4o.apps.googleusercontent.com'
    });

})
;