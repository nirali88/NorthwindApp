
require(['app'], function (app) {
    "use strict";
    app.register
        .controller('customersController', ['$rootScope', 'dashboardService', customersController]);

    function customersController($rootScope, dashboardService) {
        var vm = this;

        vm.customers = 0;

        vm.chartOptions = {
            //     title:'CUSTOMERS',
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

        $rootScope.$on('loadData', function () {
            getCustomersByCountry();
        });

        getCustomersByCountry();

        function getCustomersByCountry(country) {
            var startDateStr = getDateStr($rootScope.commanData.startDate);
            var endDateStr = getDateStr($rootScope.commanData.endDate);

            dashboardService.GetCustomersByCountry($rootScope.commanData.country, startDateStr, endDateStr)
                .then(function (data) {
                    if (data == null || data == undefined)
                        return;
                    var arrDates = [], arrCust = [];

                    _.forEach(data, function (el, index, arr1) {
                        var arr = el.split('|');
                        arrDates.push(arr[0]);
                        arrCust.push(arr[1]);
                    });

                    vm.customers = arrCust.length;

                    vm.data = [arrCust];
                    vm.ticks = arrDates;
                });
        }

    }
});