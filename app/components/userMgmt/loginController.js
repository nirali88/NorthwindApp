define("loginController", ['app'], function (app) {
    "use strict";

    app.register.controller('loginController', ['$rootScope', '$location', 'authService', '$window', loginController]);

    function loginController($rootScope, $location, authService, $window) {

        var vm = this;
        vm.login = login;

        authService.ClearCredentials();

        function login() {
            authService.Login(vm.username, vm.password, function (response) {
                if (response.success) {
                    authService.SetCredentials(vm.username, vm.password);
                    // $location.path('/');
                    $window.location='/';
                }
                else {
                    alert('Invalid UserName / password found');
                }
            });
        }
    }
});
