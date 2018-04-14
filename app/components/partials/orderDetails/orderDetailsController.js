require(['app', 'ordersMainService'], function (app) {
    "use strict";

    app.register.controller('orderDetailsController', ['$scope', 'ordersMainService', '$uibModalInstance','orderID', orderDetailsController]);

    function orderDetailsController($scope, ordersMainService, $uibModalInstance,orderID) {
        // var vm = this;

        $scope.orderID = orderID;
        $scope.getOrdersDetails = getOrdersDetails;
        $scope.data = [];

        getOrdersDetails(orderID);

        $scope.ok = function () {
            $uibModalInstance.close('');
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

        function getOrdersDetails(orderID) {
            ordersMainService.GetOrdersDetails(orderID).then(function (data) {
                if (data == null || data == undefined)
                    return;
                $scope.data = data;
            });
        }

        // $scope.myData = [
        //     {
        //         firstName: "Cox",
        //         lastName: "Carney",
        //         company: "Enormo",
        //         employed: true
        //     },
        //     {
        //         firstName: "Lorraine",
        //         lastName: "Wise",
        //         company: "Comveyer",
        //         employed: false
        //     },
        //     {
        //         firstName: "Nancy",
        //         lastName: "Waters",
        //         company: "Fuelton",
        //         employed: false
        //     }
        // ];
    }
});