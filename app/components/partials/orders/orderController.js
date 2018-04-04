require(['app'], function (app) {
    "use strict";
    // angular.module('app') 
    app.register.controller('orderController', ['$rootScope', 'dashboardService', orderController]);

    function orderController($rootScope, dashboardService) {
        var vm = this;
        vm.orders = 0;
        vm.getOrdersByCountry = getOrdersByCountry;

        vm.chartOptions = {
            //title:'ORDERS',
            // Only animate if we're not using excanvas (not in IE 7 or IE 8)..
            animate: !$.jqplot.use_excanvas,
            seriesDefaults: {
                renderer: $.jqplot.BarRenderer,
                pointLabels: { show: true }
            },
            axes: {
                xaxis: {
                    renderer: $.jqplot.CategoryAxisRenderer,
                    ticks: vm.ticks// ['a', 'b', 'c', 'd']
                }
            },
            highlighter: { show: false }
        };

        getOrdersByCountry();

        $rootScope.$on('loadData', function () {
            getOrdersByCountry();
        });

        function getOrdersByCountry() {
            var startDateStr = getDateStr($rootScope.commanData.startDate);
            var endDateStr = getDateStr($rootScope.commanData.endDate);

            dashboardService.GetOrdersByCountry($rootScope.commanData.country, startDateStr, endDateStr)
                .then(function (data) {
                    if (data == null || data == undefined)
                        return;
                    var arrDates = [], arrOrders = [];

                    _.forEach(data, function (el, index, arr1) {
                        var arr = el.split('|');
                        arrDates.push(arr[0]);
                        arrOrders.push(arr[1]);
                    });

                    vm.orders = arrOrders.length;

                    vm.data = [arrOrders];
                    vm.ticks = arrDates;
                });
        }
    }
});

// (function () {
//     "use strict";
//     angular.module('app')
//         .controller('orderController', orderController);

//     function orderController($rootScope, dashboardService) {
//         var vm = this;
//         vm.orders = 0;
//         vm.getOrdersByCountry = getOrdersByCountry;

//         vm.chartOptions = {
//             //title:'ORDERS',
//             // Only animate if we're not using excanvas (not in IE 7 or IE 8)..
//             animate: !$.jqplot.use_excanvas,
//             seriesDefaults: {
//                 renderer: $.jqplot.BarRenderer,
//                 pointLabels: { show: true }
//             },
//             axes: {
//                 xaxis: {
//                     renderer: $.jqplot.CategoryAxisRenderer,
//                     ticks: vm.ticks// ['a', 'b', 'c', 'd']
//                 }
//             },
//             highlighter: { show: false }
//         };

//         getOrdersByCountry();

//         $rootScope.$on('loadData', function () {
//             getOrdersByCountry();
//         });

//         function getOrdersByCountry() {
//             var startDateStr = getDateStr($rootScope.commanData.startDate);
//             var endDateStr = getDateStr($rootScope.commanData.endDate);

//             dashboardService.GetOrdersByCountry($rootScope.commanData.country, startDateStr, endDateStr)
//                 .then(function (data) {
//                     if (data == null || data == undefined)
//                         return;
//                     var arrDates = [], arrOrders = [];

//                     _.forEach(data, function (el, index, arr1) {
//                         var arr = el.split('|');
//                         arrDates.push(arr[0]);
//                         arrOrders.push(arr[1]);
//                     });

//                     vm.orders = arrOrders.length;

//                     vm.data = [arrOrders];
//                     vm.ticks = arrDates;
//                 });
//         }
//     }
// })();