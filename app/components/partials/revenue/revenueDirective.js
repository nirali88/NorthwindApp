(function () {
    "use strict";
    angular.module('app')
        .directive('revenueDirective', revenueDirective);

    function revenueDirective() 
    {
        return {
            restrict:'E',
            scope:{},            
            templateUrl:'app/components/partials/revenue/revenueDirective.html',
            controller:'revenueController',
            controllerAs: 'vm'
        }
     }
})();