var map;
(function () {
    "use strict";
    angular.module('app')
        .controller('customersController', customersController);

    function customersController($scope, dashboardService) {
        var vm = this;

        vm.data = [[2, 6, 7, 10],[7, 5, 3, 2]];

        vm.chartOptions = {
            title:'CUSTOMERS',
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
            
            highlighter: { show: false }
        };
        $scope.$on('getcountry', function (event, args) {
            alert('Received COuntry' + args.country);
        });
    }
})();