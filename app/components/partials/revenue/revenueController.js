require(['app'], function (app) {
    "use strict";
    app.register
        .controller('revenueController', ['$rootScope', 'dashboardService', revenueController]);

    function revenueController($rootScope, dashboardService) {
        var vm = this;

        vm.revenue = 0;
        vm.getRevenuesByCountry = getRevenuesByCountry;
        vm.chartOptions = {
            animate: !$.jqplot.use_excanvas,
            seriesDefaults: {
                renderer: $.jqplot.BarRenderer,
                pointLabels: { show: true }
            },
            axes: {
                xaxis: {
                    renderer: $.jqplot.CategoryAxisRenderer,
                    ticks: vm.ticks
                }
            }
        };

        $rootScope.$on('loadData', function () {
            getRevenuesByCountry();
        });

        getRevenuesByCountry();

        function getRevenuesByCountry() {
            var startDateStr = getDateStr($rootScope.commanData.startDate);
            var endDateStr = getDateStr($rootScope.commanData.endDate);

            dashboardService.GetRevenuesByCountry($rootScope.commanData.country, startDateStr, endDateStr)
                .then(function (data) {
                    if (data == null || data == undefined)
                        return;
                    var arrDates = [], arrRev = [];

                    _.forEach(data, function (el, index, arr1) {
                        var arr = el.split('|');
                        arrDates.push(arr[0]);
                        arrRev.push(arr[1]);
                    });

                    vm.revenue = _.reduce(arrRev, function (total, num) {
                        return parseFloat(total) + parseFloat(num);
                    }, 0);

                    vm.data = [arrRev];
                    vm.ticks = arrDates;

                });
        }
    }
});