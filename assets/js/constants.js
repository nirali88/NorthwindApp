require(['app'], function (app) {

    app.register.constant('config', {
        appName: 'NorthWind App',
        appVersion: 2.0,
        apiUrl: 'http://localhost/NWAPI/api/'
    });

});