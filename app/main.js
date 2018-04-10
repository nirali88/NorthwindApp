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
        'ui.grid': '/node_modules/angular-ui-grid/ui-grid.min',

        // services
        'dashboardService': 'components/dashboard/dashboardService',
        'ordersMainService': 'components/ordersMain/ordersMainService',

        'teameffService': 'components/teamEff/teameffService',

        // Controllers

        'dashboardController': 'components/dashboard/dashboardController',
        'ordersMainController': 'components/ordersMain/ordersMainController',

        'teameffController': 'components/teamEff/teameffController',
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
        // 'ui.calendar': '/assets/libs/calendar',
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
        // 'ui.calendar': ['angular'],
        'app': ['angular', 'ngRoute', 'ui-bootstrap', 'ngAnimate', 'ui.chart', 'lodash', 'loadingbar', 'ui.grid'],
        'approute': ['app'],
        'ui.grid': ['angular'],
        'mapController': ['map', 'common', 'ui.chart'],
        'mapDirective': ['mapController'],
        'dashboardController': ['constants', 'mapDirective', 'dashboardService', 'marketshareController', 'marketshareDirective', 'orderController', 'orderDirective', 'revenueController', 'revenueDirective', 'customersController', 'customersDirective'],
        'ordersMainController': ['constants', 'common', 'ordersMainService'],
        'teameffController': ['constants', 'common', 'teameffService']
    }
});

//load angular dynamically
require(['app'], function (app) {
    app.init();
});