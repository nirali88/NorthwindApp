(function () {
    "use strict";
    angular.module('app').controller('dashboardController', dashboardController);

    function dashboardController($rootScope) {

        var vm = this;

        vm.startDate = $rootScope.commanData.startDate;
        vm.endDate = $rootScope.commanData.endDate;
        vm.loadAgain = loadAgain;

        function loadAgain() {
            //broadcast to load all componenets

            $rootScope.commanData.startDate = vm.startDate;
            $rootScope.commanData.endDate = vm.endDate;
            $rootScope.$broadcast('loadData');
        }
    }
}
)();