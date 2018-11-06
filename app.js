function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: { lat: 52.425813, lng: 16.959263 }
  });

  var image = "./assets/img/marker.png";
  var marker = new google.maps.Marker({
    position: { lat: 52.427081, lng: 16.937841 },
    map: map,
    icon: image
  });
}
