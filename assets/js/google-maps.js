function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 37.367761, lng: -122.083551};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Saint Francis High School' // Title Location
    });
}