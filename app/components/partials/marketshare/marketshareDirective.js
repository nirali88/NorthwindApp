(function () {
    "use strict";
    angular.module('app')
        .directive('marketShareDirective', marketshareDirective);

    function marketshareDirective() 
    {
        return {
            restrict:'E',
            scope:{},            
            templateUrl:'app/components/partials/marketshare/marketshareDirective.html',
            controller:'marketshareController',
            controllerAs: 'vm'
        }
     }
})();