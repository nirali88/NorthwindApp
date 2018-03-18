(function () {
    "use strict";
    angular.module('app')
        .directive('customerDirective', customersDirective);

    function customersDirective() 
    {
        return {
            restrict:'E',
            scope:{},            
            templateUrl:'app/components/partials/customers/customersDirective.html',
            controller:'customersController',
            controllerAs: 'vm'
        }
     }
})();