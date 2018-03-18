(function () {
    "use strict";
    angular.module('app')
        .controller('revenueController', revenueController);

    function revenueController($scope, dashboardService) {
        var vm = this;

        vm.data = [[2, 6, 7, 10]];

        vm.chartOptions = {
            title: 'REVENUE',
            // Only animate if we're not using excanvas (not in IE 7 or IE 8)..
            animate: !$.jqplot.use_excanvas,
            seriesDefaults: {
                renderer: $.jqplot.BarRenderer,
                pointLabels: { show: true }
            },
            axes: {
                xaxis: {
                    renderer: $.jqplot.CategoryAxisRenderer,
                    ticks: ['a', 'b', 'c', 'd']
                }
            },
            highlighter: { show: true }
        };



        $scope.$on('getcountry', function (event, args) {
            alert('Received COuntry' + args.country);
        });
    }
})();