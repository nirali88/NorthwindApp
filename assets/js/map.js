 
    function drawMap(data) {
        var rows = data['rows'];
        for (var i in rows) {
            if (rows[i][0] != 'Antarctica') {
                var newCoordinates = [];
                var geometries = rows[i][1]['geometries'];
                if (geometries) {
                    for (var j in geometries) {
                        newCoordinates.push(constructNewCoordinates(geometries[j]));
                    }
                } else {
                    newCoordinates = constructNewCoordinates(rows[i][1]['geometry']);
                }
                var country = new google.maps.Polygon({
                    paths: newCoordinates,
                    strokeColor: '#ff9900',
                    strokeOpacity: 1,
                    strokeWeight: 0.3,
                    fillColor: '#ffff66',
                    fillOpacity: 0,
                    name: rows[i][0]
                });
                google.maps.event.addListener(country, 'mouseover', function () {
                    this.setOptions({ fillOpacity: 0.4 });
                });
                google.maps.event.addListener(country, 'mouseout', function () {
                    this.setOptions({ fillOpacity: 0 });
                });
                google.maps.event.addListener(country, 'click', function () {
                    //alert(this.name);
                    angular.element(document.getElementById("mapDirective")).scope().$$childHead.vm.setCountry(this.name);
                });
    
                country.setMap(map);
            }
        }
    }
    
    function constructNewCoordinates(polygon) {
        var newCoordinates = [];
        var coordinates = polygon['coordinates'][0];
        for (var i in coordinates) {
            newCoordinates.push(
                new google.maps.LatLng(coordinates[i][1], coordinates[i][0]));
        }
        return newCoordinates;
    }


