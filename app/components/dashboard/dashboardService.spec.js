'use strict';

describe('Dash-Board Services', function () {

    var dashboardService, $q, $httpBackend;

    //Add API end point
    var API = 'http://localhost/NWAPI/api/';

    // Before each test load our api module
    beforeEach(angular.mock.module('app'));

    // Before each test set our injected dashboard service (_dashBoardService_) to our local dashBoardService variable

    beforeEach(inject(function (_dashboardService_, _$q_, _$httpBackend_) {
        dashboardService = _dashboardService_;
        $q = _$q_;// Inject $q and $httpBackend for testing HTTP requests
        $httpBackend = _$httpBackend_;
    }));

    // A simple test to verify the Dashboard Service exists

    it('should exist', function () {
        expect(dashboardService).toBeDefined();
    });

    //GetCustomerNamesByCountry test cases
    describe('.GetCustomerNamesByCountry', function () {
        var result = [];
        var RESPONSE_SUCCESS = ["ritesh", "Bottom-Dollar Markets", "Laughing Bacchus Wine Cellars", "Mère Paillarde"];
        var RESPONSE_ERROR = 'Not Found';

        beforeEach(function () {
            // Initialize our local result object to an empty object before each test
            result = [];

            // Spy on our service call but allow it to continue to its implementation
            spyOn(dashboardService, "GetCustomerNamesByCountry").and.callThrough();
        });

        //A simple test to verify the method GetCustomerNamesByCountry exists
        it('should exist', function () {
            expect(dashboardService.GetCustomerNamesByCountry).toBeDefined();
        });

        // it('should return undefined if no records found', function () {
        //     expect(dashboardService.GetCustomerNamesByCountry('canada')).not.toBeDefined();
        // })

        it('should return a list of names when called with valid country', function () {
            var search = 'usa';

            $httpBackend.whenGET(API + 'GetCustomerNamesByCountry/' + search)
                .respond(200, $q.when(RESPONSE_SUCCESS));

            expect(dashboardService.GetCustomerNamesByCountry).not.toHaveBeenCalled();
            expect(result).toEqual([]);

            dashboardService.GetCustomerNamesByCountry(search).then(
                function (res) {
                    result = res;
                });

            //Flush peding HTTP request
            $httpBackend.flush();

            expect(dashboardService.GetCustomerNamesByCountry).toHaveBeenCalledWith(search);
            expect(result).toContain('ritesh');
        });

        // it('should return a 404 when called with invalid country', function () {
        //     var search = 'india';


        //     $httpBackend.whenGET(API + 'GetCustomerNamesByCountry/' + search)
        //         .respond(404, $q.reject(RESPONSE_ERROR));

        //     expect(dashboardService.GetCustomerNamesByCountry).not.toHaveBeenCalled();
        //     expect(result).toEqual([]);

        //     dashboardService.GetCustomerNamesByCountry(search).catch(
        //         function (res) {
        //             result=res.data;
        //         });

        //     //Flush peding HTTP request
        //     $httpBackend.flush();

        //     expect(dashboardService.GetCustomerNamesByCountry).toHaveBeenCalledWith(search);
        //     expect(result).toEqual('Not Found');
        // });
    });

    //GetCustomersByCountry test cases
    describe('.GetCustomersByCountry', function () {

        var result=[];
        var RESPONSE_SUCCESS = ["1/1/1997|3", "1/1/1998|1", "10/1/1997|5", "11/1/1997|4", "12/1/1997|3", "2/1/1997|2", "3/1/1997|3", "4/1/1997|2", "5/1/1997|3", "6/1/1997|4", "7/1/1997|6", "8/1/1997|2", "9/1/1997|5"];
        var RESPONSE_ERROR = 'Not Found';

        beforeEach(function () {
            // Initialize our local result object to an empty object before each test
            result = [];

            // Spy on our service call but allow it to continue to its implementation
            spyOn(dashboardService, "GetCustomersByCountry").and.callThrough();
        });


        //A simple test to verify the method GetCustomersByCountry exists
        it('should exist', function () {
            expect(dashboardService.GetCustomersByCountry).toBeDefined();
        });

        it('should return a list of total of customers with duration when called with valid country', function () {
            var country = 'usa', startDate = '1997-01-01', endDate = '1998-01-01';

            $httpBackend.whenGET(API + 'GetCustomersByCountry/' + country + '/' + startDate + '/' + endDate)
                .respond(200, $q.when(RESPONSE_SUCCESS));

            expect(dashboardService.GetCustomersByCountry).not.toHaveBeenCalled();
            expect(result).toEqual([]);

            dashboardService.GetCustomersByCountry(country, startDate, endDate).then(
                function (res) {
                    result = res;
                });

            //Flush peding HTTP request
            $httpBackend.flush();

            expect(dashboardService.GetCustomersByCountry).toHaveBeenCalledWith(country, startDate, endDate);
            expect(result).toContain('1/1/1998|1');
        });
    });

    //GetOrdersByCountry test cases
    describe('.GetOrdersByCountry', function () {

        var result=[];
        var RESPONSE_SUCCESS =["1/1/1997|3","1/1/1998|1","10/1/1997|11","11/1/1997|5","12/1/1997|3","2/1/1997|3","3/1/1997|4","4/1/1997|2","5/1/1997|3","6/1/1997|6","7/1/1997|10","8/1/1997|2","9/1/1997|8"];
        var RESPONSE_ERROR = 'Not Found';

        beforeEach(function () {
            // Initialize our local result object to an empty object before each test
            result = [];

            // Spy on our service call but allow it to continue to its implementation
            spyOn(dashboardService, "GetOrdersByCountry").and.callThrough();
        });


        //A simple test to verify the method GetOrdersByCountry exists
        it('should exist', function () {
            expect(dashboardService.GetOrdersByCountry).toBeDefined();
        });

        it('should return a list of total of orders with duration when called with valid country', function () {
            var country = 'usa', startDate = '1997-01-01', endDate = '1998-01-01';

            $httpBackend.whenGET(API + 'GetOrdersByCountry/' + country + '/' + startDate + '/' + endDate)
                .respond(200, $q.when(RESPONSE_SUCCESS));

            expect(dashboardService.GetOrdersByCountry).not.toHaveBeenCalled();
            expect(result).toEqual([]);

            dashboardService.GetOrdersByCountry(country, startDate, endDate).then(
                function (res) {
                    result = res;
                });

            //Flush peding HTTP request
            $httpBackend.flush();

            expect(dashboardService.GetOrdersByCountry).toHaveBeenCalledWith(country, startDate, endDate);
            expect(result).toContain('11/1/1997|5');
        });        
    });

    //GetRevenuesByCountry test cases
    describe('.GetRevenuesByCountry', function () {

        var result=[];
        var RESPONSE_SUCCESS =["1/1/1997|3","1/1/1998|1","10/1/1997|11","11/1/1997|5","12/1/1997|3","2/1/1997|3","3/1/1997|4","4/1/1997|2","5/1/1997|3","6/1/1997|6","7/1/1997|10","8/1/1997|2","9/1/1997|8"];
        var RESPONSE_ERROR = 'Not Found';

        beforeEach(function () {
            // Initialize our local result object to an empty object before each test
            result = [];

            // Spy on our service call but allow it to continue to its implementation
            spyOn(dashboardService, "GetRevenuesByCountry").and.callThrough();
        });

        //A simple test to verify the method GetRevenuesByCountry exists
        it('should exist', function () {
            expect(dashboardService.GetRevenuesByCountry).toBeDefined();
        });

        it('should return a list of total of revenues with duration when called with valid country', function () {
            var country = 'usa', startDate = '1997-01-01', endDate = '1998-01-01';

            $httpBackend.whenGET(API + 'GetRevenuesByCountry/' + country + '/' + startDate + '/' + endDate)
                .respond(200, $q.when(RESPONSE_SUCCESS));

            expect(dashboardService.GetRevenuesByCountry).not.toHaveBeenCalled();
            expect(result).toEqual([]);

            dashboardService.GetRevenuesByCountry(country, startDate, endDate).then(
                function (res) {
                    result = res;
                });

            //Flush peding HTTP request
            $httpBackend.flush();

            expect(dashboardService.GetRevenuesByCountry).toHaveBeenCalledWith(country, startDate, endDate);
            expect(result).toContain('11/1/1997|5');
        });
    });

    //GetSalesByCountry test cases
    describe('.GetSalesByCountry', function () {

        var result=[];
        var RESPONSE_SUCCESS = ["122698|660376"];
        var RESPONSE_ERROR = 'Not Found';

        beforeEach(function () {
            // Initialize our local result object to an empty object before each test
            result = [];

            // Spy on our service call but allow it to continue to its implementation
            spyOn(dashboardService, "GetSalesByCountry").and.callThrough();
        });

        //A simple test to verify the method GetSalesByCountry exists
        it('should exist', function () {
            expect(dashboardService.GetSalesByCountry).toBeDefined();
        });

        it('should return sales for country with total sales  when called with valid country', function () {
            var country = 'usa', startDate = '1997-01-01', endDate = '1998-01-01';

            $httpBackend.whenGET(API + 'GetSalesByCountry/' + country + '/' + startDate + '/' + endDate)
                .respond(200, $q.when(RESPONSE_SUCCESS));

            expect(dashboardService.GetSalesByCountry).not.toHaveBeenCalled();
            expect(result).toEqual([]);

            dashboardService.GetSalesByCountry(country, startDate, endDate).then(
                function (res) {
                    result = res;
                });

            //Flush peding HTTP request
            $httpBackend.flush();

            expect(dashboardService.GetSalesByCountry).toHaveBeenCalledWith(country, startDate, endDate);
            expect(result).toContain('122698|660376');
        });
    });
});