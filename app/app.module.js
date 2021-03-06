define('app', ['angular'], function (angular) {
    "use strict";

    var app = angular.module('app', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'ui.chart', 'angular-loading-bar', 'ui.grid', 'ui.grid.pagination']);

    app.init = init;
    app.run(['$rootScope', '$location', '$window', '$http', Run]);
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
                        require(['dashboardController'], function () {
                            $rootScope.$apply(function () {
                                deferred.resolve();
                            });
                        });
                        return deferred.promise;
                    }]
                }
            })
            .when("/teameff/:id?", {
                templateUrl: "./app/components/teamEff/teameff.html",
                controller: "teameffController",
                controllerAs: "vm",
                resolve: {
                    resolver: ['$q', '$rootScope', function ($q, $rootScope) {
                        var deferred = $q.defer();
                        require(['teameffController'], function () {
                            $rootScope.$apply(function () {
                                deferred.resolve();
                            });
                        });
                        return deferred.promise;
                    }]
                }
            })
            .when("/orders", {
                templateUrl: "./app/components/ordersMain/ordersMain.html",
                controller: "ordersMainController",
                controllerAs: "vm",
                resolve: {
                    resolver: ['$q', '$rootScope', function ($q, $rootScope) {
                        var deferred = $q.defer();
                        require(['ordersMainController'], function () {
                            $rootScope.$apply(function () {
                                deferred.resolve();
                            });
                        });
                        return deferred.promise;
                    }]
                }
            })
            .when("/login", {
                templateUrl: "./app/components/userMgmt/login.html",
                controller: "loginController",
                controllerAs: "vm",
                resolve: {
                    resolver: ['$q', '$rootScope', function ($q, $rootScope) {
                        var deferred = $q.defer();
                        require(['loginController'], function () {
                            $rootScope.$apply(function () {
                                deferred.resolve();
                            });
                        });
                        return deferred.promise;
                    }]
                }
            })
            .when("/register", {
                templateUrl: "./app/components/userMgmt/register.html",
                controller: "registerController",
                controllerAs: "vm",
                resolve: {
                    resolver: ['$q', '$rootScope', function ($q, $rootScope) {
                        var deferred = $q.defer();
                        require(['registerController'], function () {
                            $rootScope.$apply(function () {
                                deferred.resolve();
                            });
                        });
                        return deferred.promise;
                    }]
                }
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

    function Run($rootScope, $location, $window, $http) {
        $rootScope.commanData = {};

        $rootScope.commanData.startDate = new Date('1996-01-01');
        $rootScope.commanData.endDate = new Date('1998-01-01');
        $rootScope.commanData.country = 'United States';

        $rootScope.globals = JSON.parse($window.sessionStorage.getItem('globals')) || {};

        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page

            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;

            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }

        });
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