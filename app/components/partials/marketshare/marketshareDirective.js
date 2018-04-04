require(['app'], function (app) {
    "use strict";
    
    app.register.directive('marketShareDirective', marketshareDirective);

    function marketshareDirective() {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'app/components/partials/marketshare/marketshareDirective.html',
            controller: 'marketshareController',
            controllerAs: 'vm'
        }
    }
});

// (function () {
//     "use strict";
//     angular.module('app')
//         .directive('marketShareDirective', marketshareDirective);

//     function marketshareDirective() 
//     {
//         return {
//             restrict:'E',
//             scope:{},            
//             templateUrl:'app/components/partials/marketshare/marketshareDirective.html',
//             controller:'marketshareController',
//             controllerAs: 'vm'
//         }
//      }
// })();