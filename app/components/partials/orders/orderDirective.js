(function () {
    "use strict";
    angular.module('app')
        .directive('orderDirective', orderDirective);

    function orderDirective() 
    {
        return {
            restrict:'E',
            scope:{},            
            templateUrl:'app/components/partials/orders/orderDirective.html',
            controller:'orderController',
            controllerAs: 'vm'
        }
     }
})();