/*---------- google maps and places api------------
code used and edited from google maps documentation  */

// Global Variables 
let map;
let bounds;
let infoWindow;
let currentInfoWindow;
let service;
let infoPane;
var userPosition;
var markers = [];

// Function to render map onto page for each destination area.
const renderMap = (area) =>{
  const mapArea = {
        center: area,
        zoom: 12
    }
     map = new google.maps.Map(document.getElementById("map"), mapArea)
}