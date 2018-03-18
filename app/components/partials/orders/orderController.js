(function () {
    "use strict";
    angular.module('app')
        .controller('orderController', orderController);

    function orderController($scope, dashboardService) {
        var vm = this;

        $scope.$on('getcountry', function (event, args) {
            alert('Received COuntry' + args.country);
        });
    }
})();