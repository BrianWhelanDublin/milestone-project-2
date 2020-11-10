/*---------- google maps and places api------------
code used and edited from google maps documentation and google code labs more details and link in readme */

// Global Variables
let map;
let bounds;
let infoWindow;
let currentInfoWindow;
let service;
let infoPane;
let markers = [];
let markerCluster

// Function to render map onto page for each destination area.
const renderMap = (area) => {
  const mapArea = {
    center: area,
    zoom: 10,
  };
  map = new google.maps.Map(document.getElementById("map"), mapArea);
};

/* Function to search for different places in each area using Google places nearbySearch and a keyword */
const placesSearch = (keyword) => {
  let request = {
    bounds: map.getBounds(),
    keyword: keyword,
  };
  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callBack);
};

/*Callback function that will call the createMarkers if the request was succsessful */
//
const callBack = (results, status) => {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    createMarkers(results);
     markerCluster = new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
  } else {
    alert(
      "Something went wrong. Please contact us so we can look into this issue."
    );
  }
 
};

/* Function to create markers for the search */

const createMarkers = (places) => {
  places.forEach((place) => {
    let marker = new google.maps.Marker({
      position: place.geometry.location,
      map: map,
      title: place.name,
      animation: google.maps.Animation.DROP,
    });
    markers.push(marker);
  });
};

/* Event listeners for each booton to make the search */
document.getElementById("shopping-btn").addEventListener("click", () => {
  //event.preventDefault();

  placesSearch("shopping");
});
