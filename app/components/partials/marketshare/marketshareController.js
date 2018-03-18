var map;
(function () {
    "use strict";
    angular.module('app')
        .controller('marketshareController', marketshareController);

    function marketshareController($scope, dashboardService) {
        var vm = this;

        vm.data = [[['a', 25], ['b', 14], ['c', 7]]];

        vm.chartOptions = {
            title:'Market Share',
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
            }
        };

        $scope.$on('getcountry', function (event, args) {
            alert('Received COuntry' + args.country);
        });
    }
})();