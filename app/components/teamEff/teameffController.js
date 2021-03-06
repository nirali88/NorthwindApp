define("teameffController", ['app'], function (app) {
    "use strict";

    app.register.controller('teameffController', ['$rootScope', 'teameffService', '$routeParams', '$scope', '$uibModal', teameffController]);

    function teameffController($rootScope, teameffService, $routeParams, $scope, $uibModal) {

        var vm = this;
        vm.startDate = $rootScope.commanData.startDate;
        vm.endDate = $rootScope.commanData.endDate;
        // vm.loadAgain = loadAgain;
        vm.teamMembers = [];
        vm.employeeDetail = {};
        vm.totalSales = 0;
        vm.monthlyAvgSales = 0;

        vm.getEmployeeNames = getEmployeeNames;
        vm.getEmployeeDetail = getEmployeeDetail;
        vm.loadEmployeeDetail = loadEmployeeDetail;
        $scope.openOrderDetail = openOrderDetail;


        vm.chartOptions = {
            animate: !$.jqplot.use_excanvas,
            seriesDefaults: {
                renderer: $.jqplot.BarRenderer,
                pointLabels: { show: true }
            },
            axes: {
                xaxis: {
                    renderer: $.jqplot.CategoryAxisRenderer,
                    ticks: ["Jul-96", "Aug-96", "Sep-96", "Oct-96", "Nov-96", "Dec-96", "Jan-97", "Feb-97", "Mar-97", "Apr-97", "May-97", "Jun-97", "Jul-97", "Aug-97", "Sep-97", "Oct-97", "Nov-97", "Dec-97", "Jan-98", "Feb-98", "Mar-98"]
                }
            },
            highlighter: {
                show: true,
                useAxesFormatters: false,
                tooltipFormatString: '%s'
            }
        };

        $scope.gridOptions = {
            data: [],
            enableFiltering: true,
            columnDefs: [{
                field: 'OrderID', displayName: 'Order #', cellTemplate: '<div>' +
                    '<a ng-href="" ng-click="grid.appScope.openOrderDetail(COL_FIELD)" >{{row.entity.OrderID}}</a>' +
                    '</div>'
            },
            { field: 'OrderDate', displayName: 'Order Date', type: 'date', cellFilter: 'date:\'yyyy-MM-dd\'' },
            { field: 'ShipName', displayName: 'Ship Name' },
            { field: 'EmployeeID', displayName: 'Employee ID', visible: false }
            ]
        };

        getEmployeeNames();

        if ($routeParams.id == undefined)
            loadEmployeeDetail(1);
        else
            loadEmployeeDetail($routeParams.id);

        //Defination of functions

        function loadEmployeeDetail(employeeID) {
            getEmployeeDetail(employeeID);
        }

        function getEmployeeNames() {
            teameffService.GetEmployeeNames().then(function (data) {
                if (data == null || data == undefined)
                    return;
                vm.teamMembers = data;
            });
        }

        function getEmployeeDetail(employeeID) {

            teameffService.GetEmployeeDetail(employeeID, '1996-01-01', '1998-03-31').then(function (data) {
                if (data == null || data == undefined)
                    return;
                vm.employeeDetail = data;

                $scope.gridOptions.data = vm.employeeDetail.lstOrders;
                vm.totalSales = _.sumBy(data.lstSales, function (o) { return o.Rep_Sales; });
                vm.monthlyAvgSales = vm.totalSales / data.lstSales.length;
                vm.ticks = ["Jul-96", "Aug-96", "Sep-96", "Oct-96", "Nov-96", "Dec-96", "Jan-97", "Feb-97", "Mar-97", "Apr-97", "May-97", "Jun-97", "Jul-97", "Aug-97", "Sep-97", "Oct-97", "Nov-97", "Dec-97", "Jan-98", "Feb-98", "Mar-98"];//_.map(data.lstSales, 'Duration');
                vm.data = [_.map(data.lstSales, 'Rep_Sales'),
                _.map(data.lstSales, 'Total_Sales')];
            });

        }

        function openOrderDetail(orderID) {
            // alert(1);
            var modalInstance = $uibModal.open({
                templateUrl: 'app/components/partials/orderDetails/orderDetails.html',
                controller: 'orderDetailsController',
                size: 'lg',
                resolve: {
                    orderID: function () {
                        return orderID;
                    }
                }
            });

            modalInstance.result.then(function () {
                //$scope.selected = selectedItem;
            }, function () {
                //$log.info('Modal dismissed at: ' + new Date());
            });
        }
    }
});
