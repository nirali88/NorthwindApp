define("ordersMainController", ['app'], function (app) {
    "use strict";

    app.register.controller('ordersMainController',
        ['ordersMainService', '$scope', '$uibModal', ordersMainController]);

    function ordersMainController(ordersMainService, $scope, $uibModal) {
        var vm = this;
        vm.getMainOrdersList = getMainOrdersList;
        $scope.openOrderDetail = openOrderDetail;

        $scope.gridOptions = {
            data: [],
            enableFiltering: true,
            paginationPageSizes: [25, 50, 75],
            paginationPageSize: 25,
            columnDefs: [
                {
                    field: 'OrderID', displayName: 'Order #', cellTemplate: '<div>' +
                        '<a ng-href="" ng-click="grid.appScope.openOrderDetail(COL_FIELD)" >{{row.entity.OrderID}}</a>' +
                        '</div>'
                },
                { field: 'OrderDate', displayName: 'Order Date', type: 'date', cellFilter: 'date:\'yyyy-MM-dd\'' },
                { field: 'ShippedDate', displayName: 'Shipped Date', type: 'date', cellFilter: 'date:\'yyyy-MM-dd\'' },
                // { field: 'ShipName', displayName: 'Ship Name' },
                { field: 'ShipCountry', displayName: 'Ship Country' },
                { field: 'CustomerName', displayName: 'Customer Name' },
                { field: 'ShipperName', displayName: 'Shipper Name' },
                {
                    field: 'EmployeeName', displayName: 'Order Placed By', cellTemplate: '<div>' +
                        '<a target="_blank" href="#!/teameff/{{row.entity.EmployeeID}}">{{row.entity.EmployeeName}}</a>' +
                        '</div>'
                },
                { field: 'EmployeeID', displayName: 'Employee ID', visible: false },
                { field: 'CustomerID', displayName: 'Customer ID', visible: false },
                { field: 'ShipVia', displayName: 'Ship Via', visible: false }
            ]
        };

        getMainOrdersList();
        function getMainOrdersList() {
            ordersMainService.GetMainOrdersList().then(function (data) {
                if (data == null || data == undefined)
                    return;
                $scope.gridOptions.data = data;
            });
        }

        function openOrderDetail(orderID) {
            //alert(orderID);
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