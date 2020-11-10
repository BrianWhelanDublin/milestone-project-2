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
let markerCluster;

// Function to render map onto page for each destination area.
const renderMap = (area) => {
// to desplay info when markers are clicked
  infoWindow = new google.maps.InfoWindow();
  currentInfoWindow = infoWindow;
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

/* Function to create markers for the search taken from the google documentation and google codelab tutorials*/

const createMarkers = (places) => {
  places.forEach((place) => {
    let marker = new google.maps.Marker({
      position: place.geometry.location,
      map: map,
      title: place.name,
      animation: google.maps.Animation.DROP,
    });
    /* From stack overflow push markers into an array to be used in the markerClusterer function */
    markers.push(marker);
    /* adds and event listener for each marker to show its details */
    google.maps.event.addListener(marker, "click", () => {
      let request = {
        placeId: place.place_id,
        fields: [
          "name",
          "formatted_address",
          "geometry",
          "rating",
          "website",
          "photos",
        ],
      };
      service.getDetails(request, (placeResult, status) => {
        showDetails(placeResult, marker, status);
      });
    });
  });
};

const showDetails = (placeResult, marker, status) => {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    let placeInfowindow = new google.maps.InfoWindow();
    let rating = "None";
    if (placeResult.rating) {
      rating = placeResult.rating;
    }
    placeInfowindow.setContent(
      `<div class="dark-text"><strong> ${placeResult.name} </strong><br> Rating:${rating}</div>`
    );
    placeInfowindow.open(marker.map, marker);
    currentInfoWindow.close();
    currentInfoWindow = placeInfowindow;
  } else {
    console.log("showDetails failed: " + status);
  }
};

/* Event listeners for each button to make the search */
document.getElementById("shopping-btn").addEventListener("click", () => {
  placesSearch("shopping");
});
document.getElementById("attraction-btn").addEventListener("click", () => {
  placesSearch("tourist attraction");
});
document.getElementById("parks-btn").addEventListener("click", () => {
  placesSearch("parks");
});
document.getElementById("restaurant-btn").addEventListener("click", () => {
  placesSearch("restaurant");
});
document.getElementById("bars-btn").addEventListener("click", () => {
  placesSearch("bar");
});



