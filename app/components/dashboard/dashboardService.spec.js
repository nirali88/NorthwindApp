'use strict';

describe('Dash-Board Services', function () {

    var dashboardService;

    // Before each test load our api module
    beforeEach(angular.mock.module('app'));

    // Before each test set our injected dashboard service (_dashBoardService_) to our local dashBoardService variable

    beforeEach(inject(function (_dashboardService_) {
        dashboardService = _dashboardService_;
    }));

    // A simple test to verify the Dashboard Service exists

    it('should exist', function () {
        expect(dashboardService).toBeDefined();
    });

});