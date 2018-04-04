require(['app'], function (app) {
    "use strict";
    
    app.register.directive('customerDirective', customersDirective);

    function customersDirective() {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'app/components/partials/customers/customersDirective.html',
            controller: 'customersController',
            controllerAs: 'vm'
        }
    }
});