var map;
(function () {
    "use strict";
    angular.module('app')
        .controller('customersController', customersController);

    function customersController($scope, dashboardService) {
        var vm = this;
        $scope.$on('getcountry', function (event, args) {
            alert('Received COuntry' + args.country);
        });
    }
})();