// (function () {
//     'use strict';
//     angular.module('app').config(RouteConfig);

//     function RouteConfig($routeProvider) {
//         $routeProvider
//             .when("/", {
//                 template: "Hello World",
//                 //                templateUrl: "./app/components/dashboard/dashboard.html",
//                 //controller: "dashboardController",
//                 //controllerAs: "vm"
//             })
//             .when("/dashboard", {
//                 templateUrl: "./app/components/dashboard/dashboard.html",
//                 controller: "dashboardController",
//                 controllerAs: "vm"
//             })
//             .when("/orders", {
//                 template: "Orders Page"
//                 // controller: "dashboardController",
//                 // controllerAs: "vm"
//             });
//     }
// })();


define('', ['angular'], function (angular) {
    angular.module('app').config(RouteConfig);
    function RouteConfig($routeProvider) {
        $routeProvider
            .when("/", {
                template: "Hello World",
                //                templateUrl: "./app/components/dashboard/dashboard.html",
                //controller: "dashboardController",
                //controllerAs: "vm"
            })
            .when("/dashboard", {
                templateUrl: "./app/components/dashboard/dashboard.html",
                controller: "dashboardController",
                controllerAs: "vm"
            })
            .when("/orders", {
                template: "Orders Page"
                // controller: "dashboardController",
                // controllerAs: "vm"
            });
    }
});