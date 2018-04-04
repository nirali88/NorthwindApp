require(['app'], function (app) {
    "use strict";
    app.register
        .directive('revenueDirective', revenueDirective);

    function revenueDirective() {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'app/components/partials/revenue/revenueDirective.html',
            controller: 'revenueController',
            controllerAs: 'vm'
        }
    }
});