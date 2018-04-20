define("userService", ['app'], function (app) {
    "use strict";
    app.register.service('userService', ['$http', 'config', userService]);

    function userService($http, config) { }
});