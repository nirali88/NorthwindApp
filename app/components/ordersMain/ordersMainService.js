define("ordersMainService", ['app'], function (app) {
    "use strict";

    app.register.service('ordersMainService', ['$http', 'config', ordersMainService]);

    function ordersMainService($http, config) {
        this.GetMainOrdersList = GetMainOrdersList;

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
    }
});