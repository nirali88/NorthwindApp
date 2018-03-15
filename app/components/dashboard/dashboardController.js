var map;
(function () {
    "use strict";
    angular.module('app').controller('dashboardController', dashboardController);

    function dashboardController() {
        var vm = this;
        
        vm.initialize=initialize;

        function initialize() {
            var myOptions = {
                zoom: 2,
                center: new google.maps.LatLng(10, 0),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            // initialize the map
            map = new google.maps.Map(document.getElementById('map-canvas'),
                myOptions);

            // these are the map styles
            var styles = [
                {
                    stylers: [
                        { hue: "red" },
                        { saturation: -20 }
                    ]
                },
                {
                    featureType: "landscape",
                    stylers: [
                        { hue: "#ffff66" },
                        { saturation: 100 }
                    ]
                }, {
                    featureType: "road",
                    stylers: [
                        { visibility: "off" }
                    ]
                }, {
                    featureType: "administrative.land_parcel",
                    stylers: [
                        { visibility: "off" }
                    ]
                }, {
                    featureType: "administrative.locality",
                    stylers: [
                        { visibility: "off" }
                    ]
                }, {
                    featureType: "administrative.neighborhood",
                    stylers: [
                        { visibility: "off" }
                    ]
                }, {
                    featureType: "administrative.province",
                    stylers: [
                        { visibility: "off" }
                    ]
                }, {
                    featureType: "landscape.man_made",
                    stylers: [
                        { visibility: "off" }
                    ]
                }, {
                    featureType: "landscape.natural",
                    stylers: [
                        { visibility: "off" }
                    ]
                }, {
                    featureType: "poi",
                    stylers: [
                        { visibility: "off" }
                    ]
                }, {
                    featureType: "transit",
                    stylers: [
                        { visibility: "off" }
                    ]
                }
            ];

            map.setOptions({ styles: styles });

            // Initialize JSONP request
            var script = document.createElement('script');
            var url = ['https://www.googleapis.com/fusiontables/v1/query?'];
            url.push('sql=');
            var query = 'SELECT name, kml_4326 FROM ' +
                '1foc3xO9DyfSIF6ofvN0kp2bxSfSeKog5FbdWdQ';
            var encodedQuery = encodeURIComponent(query);
            url.push(encodedQuery);
            url.push('&callback=drawMap');
            url.push('&key=AIzaSyAm9yWCV7JPCTHCJut8whOjARd7pwROFDQ');
            script.src = url.join('');
            var body = document.getElementsByTagName('body')[0];
            body.appendChild(script);
        }

        vm.initialize()
        // google.maps.event.addDomListener(window, 'load', vm.initialize);
    }
}
)();