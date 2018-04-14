define("ordersMainService", ['app'], function (app) {
    "use strict";

    app.register.service('ordersMainService', ['$http', 'config', ordersMainService]);

    function ordersMainService($http, config) {
        this.GetMainOrdersList = GetMainOrdersList;
        this.GetOrdersDetails = GetOrdersDetails;

        var API = config.apiUrl;

        //implementation

        function GetMainOrdersList() {
            return $http.get(API + 'GetMainOrdersList')
                .then(function (res) {
                    return res.data;
                })
                .catch(function (res) {
                    return res.data;
                });
        }

        function GetOrdersDetails(orderID) {
            return $http.get(API + 'orderlines/' + orderID)
                .then(function (res) {
                    return res.data;
                })
                .catch(function (res) {
                    return res.data;
                });
        }
    }
});