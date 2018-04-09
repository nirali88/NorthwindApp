define("teameffService", ['app'], function (app) {
    "use strict";
    app.register.service('teameffService', ['$http', 'config', teameffService]);

    function teameffService($http, config) {
        this.GetEmployeeNames = GetEmployeeNames;
        this.GetEmployeeDetail = GetEmployeeDetail;

        var API = config.apiUrl;

        //implementation

        function GetEmployeeNames() {
            return $http.get(API + 'GetEmployeeNames')
                .then(function (res) {
                    return res.data;
                })
                .catch(function (res) {
                    return res.data;
                });
        }

        function GetEmployeeDetail(employeeID, startDate, endDate) {
            return $http.get(API + 'GetEmployeeDetail/' + employeeID + '/' + startDate + '/' + endDate)
                .then(function (res) {
                    return res.data;
                })
                .catch(function (res) {
                    return res.data;
                });
        }
    }
});