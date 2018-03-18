var map;
(function () {
    "use strict";
    angular.module('app')
        .controller('marketshareController', marketshareController);

    function marketshareController($scope, dashboardService) {
        var vm = this;

        $scope.$on('getcountry', function (event, args) {
            alert('Received COuntry' + args.country);
        });
    }
})();