require(['app'], function (app) {

    app.register.constant('config', {
        appName: 'NorthWind App123',
        appVersion: 2.0,
        apiUrl: 'http://localhost/NWAPI/api/'
    });

});