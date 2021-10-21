mapboxgl.accessToken = 'pk.eyJ1IjoiaGFyc2hnOTAiLCJhIjoiY2t2MG9remN0MDhwdjJ1cDd6NTVlN3gzaiJ9.X9aNHXsSHLD-3QtQbTk0Ig';

navigator.geolocation.getCurrentPosition(success, error, { enableHighAccuracy: true })

function success(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
}

function error() {
    setupMap([-0.127758, 51.507351])
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: center, // starting position [lng, lat]
        zoom: 15 // starting zoom
    });
    map.addControl(new mapboxgl.NavigationControl()); //zoom control on top-right
    map.addControl(new MapboxDirections({ accessToken: mapboxgl.accessToken }), 'top-left'); //navigation
    map.addControl(
        new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            // When active the map will receive updates to the device's location as it changes.
            trackUserLocation: true,
            // Draw an arrow next to the location dot to indicate which direction the device is heading.
            showUserHeading: true
        })
    );
}
