var map;
(function () {
    "use strict";
    angular.module('app')
        .controller('marketshareController', marketshareController);

    function marketshareController($scope, dashboardService, $rootScope) {
        var vm = this;

        vm.marketShare = '0%';

        vm.chartOptions = {
            // title: 'MARKET SHARE',
            //  gridPadding: {top:0, bottom:38, left:0, right:0},
            seriesDefaults: {
                renderer: $.jqplot.PieRenderer,
                trendline: { show: false },
                rendererOptions: { padding: 8, showDataLabels: true }
            },
            legend: {
                show: true,
                placement: 'outside',
                rendererOptions: {
                    numberRows: 1
                },
                location: 's',
                marginTop: '15px'
            },
            highlighter: {
                show: true,
                useAxesFormatters: false,
                tooltipFormatString: '%s'
            }
        };

        vm.getSalesByCountry = getSalesByCountry;

        getSalesByCountry();

        $rootScope.$on('loadData', function () {
            getSalesByCountry();
        });

        function getSalesByCountry() {
            var startDateStr = getDateStr($rootScope.commanData.startDate);
            var endDateStr = getDateStr($rootScope.commanData.endDate);

            dashboardService.GetSalesByCountry($rootScope.commanData.country,
                startDateStr, endDateStr)
                .then(function (data) {
                    if (data == null || data == undefined)
                        return;
                    var arr = data[0].split('|');
                    vm.marketShare = parseFloat(parseInt(arr[0]) / parseInt(arr[1]) * 100).toFixed(2) + '%';
                    vm.data = [[[$rootScope.commanData.country, parseInt(arr[0])], ['All', parseInt(arr[1])]]];
                });
        }
    }
})();