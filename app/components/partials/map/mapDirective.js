define("mapDirective", ['app'], function (app) {

    app.register.directive('mapDirective', mapDirective);

    function mapDirective() {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'app/components/partials/map/mapDirective.html',
            controller: 'mapController',
            controllerAs: 'vm'
        }
    }
});

// (function () {
//     "use strict";
//     angular.module('app')
//         .directive('mapDirective', mapDirective);

//     function mapDirective() {
//         return {
//             restrict: 'E',
//             scope: {},
//             templateUrl: 'app/components/partials/map/mapDirective.html',
//             //   controller:'mapController',
//             controllerAs: 'vm'
//         }
//     }
// })();