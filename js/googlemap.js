window.onload = function () {
    var latitude = 59.3472002;
    var longitude = 18.0469845;
    var mapOptions = {
        center: new google.maps.LatLng(latitude, longitude),
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };
    var map = new google.maps.Map(document.getElementById("mapbild"), mapOptions);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(latitude, longitude),
        map: map,
        title: "Vi är här",
        animation: google.maps.Animation.BOUNCE,
    });
}
