require(['app'], function (app) {
    "use strict";
    app.register
        .directive('orderDirective', orderDirective);

    function orderDirective() {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'app/components/partials/orders/orderDirective.html',
            controller: 'orderController',
            controllerAs: 'vm'
        }
    }
});