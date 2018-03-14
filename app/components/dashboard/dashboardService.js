(function () {

    'use strict';
    angular.module('app')
        .service('dashboardService', dashboardService);
   
    function dashboardService($http) {
        this.GetCustomerNamesByCountry = GetCustomerNamesByCountry;
        this.GetCustomersByCountry = GetCustomersByCountry;
        this.GetOrdersByCountry = GetOrdersByCountry;
        this.GetRevenuesByCountry = GetRevenuesByCountry;
        this.GetSalesByCountry = GetSalesByCountry;

        //Add API end point
        var API = 'http://localhost/NWAPI/api/';

        //implementation

        function GetCustomerNamesByCountry(country) {
            return $http.get(API + 'GetCustomerNamesByCountry/' + country)
                .then(function (res) {
                    return res.data;
                })
                .catch(function (res) {
                    return res.data;
                });
        }

        function GetCustomersByCountry(country, startDate, endDate) {
            return $http.get(API + 'GetCustomersByCountry/' + country + '/' + startDate + '/' + endDate)
                .then(function (res) {
                    return res.data;
                })
                .catch(function (res) {
                    return res.data;
                });
        }

        function GetOrdersByCountry(country, startDate, endDate) {
            return $http.get(API + 'GetOrdersByCountry/' + country + '/' + startDate + '/' + endDate)
                .then(function (res) {
                    return res.data;
                })
                .catch(function (res) {
                    return res.data;
                });
        }

        function GetRevenuesByCountry(country, startDate, endDate) {
            return $http.get(API + 'GetRevenuesByCountry/' + country + '/' + startDate + '/' + endDate)
                .then(function (res) {
                    return res.data;
                })
                .catch(function (res) {
                    return res.data;
                });
        }

        function GetSalesByCountry(country, startDate, endDate) {
            return $http.get(API + 'GetSalesByCountry/' + country + '/' + startDate + '/' + endDate)
                .then(function (res) {
                    return res.data;
                })
                .catch(function (res) {
                    return res.data;
                });
        }
    }
})();
