define('app', ['angular'], function (angular) {
    "use strict";

    var app = angular.module('app', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'ui.chart', 'angular-loading-bar']);

    app.init = init;
    app.run(['$rootScope', Run]);
    app.config(['$routeProvider', '$controllerProvider', '$compileProvider', '$provide', 'cfpLoadingBarProvider', RouteConfig]);

    return app;

    function init() {
        angular.bootstrap(document, ['app']);
    }

    function RouteConfig($routeProvider, $controllerProvider, $compileProvider, $provide, cfpLoadingBarProvider) {

        app.register = {
            controller: $controllerProvider.register,
            directive: $compileProvider.directive,
            service: $provide.service,
            constant: $provide.constant
        };

        $routeProvider
            .when("/", {
                templateUrl: "./app/components/dashboard/dashboard.html",
                controller: "dashboardController",
                controllerAs: "vm",
                resolve: {
                    resolver: ['$q', '$rootScope', function ($q, $rootScope) {
                        var deferred = $q.defer();
                        require(['dashboardController'], function () {
                            $rootScope.$apply(function () {
                                deferred.resolve();
                            });
                        });
                        return deferred.promise;
                    }]
                }
            })
            .when("/dashboard", {
                templateUrl: "./app/components/dashboard/dashboard.html",
                controller: "dashboardController",
                controllerAs: "vm",
                resolve: {
                    resolver: ['$q', '$rootScope', function ($q, $rootScope) {
                        var deferred = $q.defer();
                        require(['components/dashboard/dashboardController'], function () {
                            $rootScope.$apply(function () {
                                deferred.resolve();
                            });
                        });
                        return deferred.promise;
                    }]
                }
            })
            .when("/orders", {
                template: "Orders Page"
                // controller: "dashboardController",
                // controllerAs: "vm"
            });

        cfpLoadingBarProvider.includeSpinner = false;

    }


    function resolver($q, $rootScope, dependencies) {
        var deferred = $q.defer();
        require(dependencies, function () {
            $rootScope.$apply(function () {
                deferred.resolve();
            });
        });
        return deferred.promise;
    }

    function Run($rootScope) {
        $rootScope.commanData = {};

        $rootScope.commanData.startDate = new Date('1996-01-01');
        $rootScope.commanData.endDate = new Date('1998-01-01');
        $rootScope.commanData.country = 'United States';
    }
});

// (function () {
//     "use strict";
//     angular.module('app', ['ngRoute', 'ui.chart', 'ngAnimate', 'ui.bootstrap']);
//     angular.module('app').run(function ($rootScope) {
//         $rootScope.commanData = {};

//         $rootScope.commanData.startDate = new Date('1996-01-01');
//         $rootScope.commanData.endDate = new Date('1998-01-01');
//         $rootScope.commanData.country = 'United States';
//     })
// })();