require.config({
    paths: {
        'angular': '/node_modules/angular/angular.min',
        'ngAnimate': '/node_modules/angular-animate/angular-animate.min',
        'ngSanitize': '/node_modules/angular-sanitize/angular-sanitize.min',
        'ngRoute': '/node_modules/angular-route/angular-route.min',
        'lodash': '/node_modules/lodash/lodash.min',
        'loadingbar': '/node_modules/angular-loading-bar/build/loading-bar.min',
        'ui-bootstrap': '/node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls',
        'app': 'app.module',
        'approute': 'app.routes',
        'ui.chart': 'components/partials/chart/chart',

        // services
        'dashboardService': 'components/dashboard/dashboardService',

        // Controllers

        'dashboardController': 'components/dashboard/dashboardController',
        'mapController': 'components/partials/map/mapController',
        'marketshareController': 'components/partials/marketshare/marketshareController',
        'orderController': 'components/partials/orders/orderController',
        'revenueController': 'components/partials/revenue/revenueController',
        'customersController': 'components/partials/customers/customersController',

        //directives

        'mapDirective': 'components/partials/map/mapDirective',
        'marketshareDirective': 'components/partials/marketshare/marketshareDirective',
        'orderDirective': 'components/partials/orders/orderDirective',
        'revenueDirective': 'components/partials/revenue/revenueDirective',
        'customersDirective': 'components/partials/customers/customersDirective',


        //assets libs load
        'map': '/assets/js/map',
        // 'jquery': '/assets/libs/jquery.min',
        'jqplot': '/assets/libs/jquery.jqplot.min',
        'pieRenderer': '/assets/libs/jqplot.pieRenderer',
        'barRenderer': '/assets/libs/jqplot.barRenderer',
        'categoryAxisRenderer': '/assets/libs/jqplot.categoryAxisRenderer',
        'pointLabels': '/assets/libs/jqplot.pointLabels',
        'highlighter': '/assets/libs/jqplot.highlighter',
        'common': '/assets/js/common',
        'constants': '/assets/js/constants'
    },
    shim: {
        'angular': { exports: 'angular' },
        'ngAnimate': ['angular'],
        'ngSanitize': ['angular'],
        'ngRoute': ['angular'],
        'ui-bootstrap': ['angular'],
        'ui.chart': ['angular'],
        'loadingbar': ['angular'],
        'constants': ['app'],
        'app': ['angular', 'ngRoute', 'ui-bootstrap', 'ngAnimate', 'ui.chart', 'lodash', 'loadingbar'],
        'approute': ['app'],
        // 'map': ['jqplot', 'pieRenderer', 'barRenderer', 'categoryAxisRenderer', 'pointLabels', 'highlighter'],
        'mapController': ['map', 'common', 'ui.chart'],
        'mapDirective': ['mapController'],
        'dashboardController': ['constants', 'mapDirective', 'dashboardService', 'marketshareController', 'marketshareDirective', 'orderController', 'orderDirective', 'revenueController', 'revenueDirective', 'customersController', 'customersDirective']
        // 'marketshareDirective': []
    }
});

//load angular dynamically
require(['app'], function (app) {
    app.init();
});