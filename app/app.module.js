(function () {
    "use strict";
    angular.module('app', ['ngRoute', 'ui.chart', 'ngAnimate', 'ui.bootstrap']);
    angular.module('app').run(function ($rootScope) {
        $rootScope.commanData = {};
        
        $rootScope.commanData.startDate = new Date('1996-01-01');
        $rootScope.commanData.endDate = new Date('1998-01-01');
        $rootScope.commanData.country = 'United States';
    })
})();
