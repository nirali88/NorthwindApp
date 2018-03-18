(function () {
    "use strict";
    angular.module('app')
        .controller('revenueController', revenueController);

    function revenueController($scope, dashboardService) {
        var vm = this;

        $scope.$on('getcountry', function (event, args) {
            alert('Received COuntry' + args.country);
        });
    }
})();