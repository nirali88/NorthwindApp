require(['app'], function (app) {
    "use strict";

    app.register.controller('headerController', ['$rootScope', '$scope', '$window', headerController]);

    function headerController($rootScope, $scope, $window) {

        $scope.appName = 'NorthWindApp';
        // alert($rootScope.globals.currentUser.userName);
        $rootScope.globals = JSON.parse($window.sessionStorage.getItem('globals')) || {};

        // if ()
        $scope.loggedIn = $rootScope.globals.currentUser != undefined;

        $scope.logout = logout;

        function logout() {
            alert('logging you out..');
            $window.location='#!/login';
            $window.location.reload();
        }

    }

});