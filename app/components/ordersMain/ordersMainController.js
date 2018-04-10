define("ordersMainController", ['app'], function (app) {
    "use strict";

    app.register.controller('ordersMainController', ['ordersMainService', ordersMainController]);

    function ordersMainController(ordersMainService) {
        var vm = this;
        vm.getMainOrdersList = getMainOrdersList;

        vm.gridOptions = {
            data: [],
            enableFiltering: true,
            paginationPageSizes: [25, 50, 75],
            paginationPageSize: 25,
            columnDefs: [
                {
                    field: 'OrderID', displayName: 'Order #', cellTemplate: '<div>' +
                        '<a href="#">{{row.entity.OrderID}}</a>' +
                        '</div>'
                },
                { field: 'OrderDate', displayName: 'Order Date', type: 'date', cellFilter: 'date:\'yyyy-MM-dd\'' },
                { field: 'ShippedDate', displayName: 'Shipped Date', type: 'date', cellFilter: 'date:\'yyyy-MM-dd\'' },
                // { field: 'ShipName', displayName: 'Ship Name' },
                { field: 'ShipCountry', displayName: 'Ship Country' },
                { field: 'CustomerName', displayName: 'Customer Name' },
                { field: 'ShipperName', displayName: 'Shipper Name' },
                { field: 'EmployeeName', displayName: 'Order By' },

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
                vm.gridOptions.data = data;
            });
        }
    }
});