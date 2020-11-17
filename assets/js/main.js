window.onload = () => document.body.classList.remove("preload");

/* Code to open and close the navigation menu
Code from Code and create tutorial I've edited this code as the tutorial only opened and closed when you clicked the hambrger so i've changed it to close once a navigation item is clicked more details in readme*/

let menu = document.querySelector(".hamburger");
let navigation = document.querySelector(".navigation");
let link = document.querySelectorAll(".navigation-item");

/* Code for screen reader on nav button */
const changeAriaSettings = () => {
  let screenReader = document.getElementById("menu-sr");
  if (navigation.classList.contains("change")) {
    menu.setAttribute("aria-expanded", true);
    screenReader.innerHTML = "Close Menu";
  } else {
    menu.setAttribute("aria-expanded", false);
    screenReader.innerHTML = "Open Menu";
  }
};

menu.addEventListener("click", () => {
  navigation.classList.toggle("change");
  changeAriaSettings();
});

/* Adds an event listener to each navigation item to close the navigation menu when the link is clicked*/
link.forEach((item) => {
  item.addEventListener("click", () => {
    navigation.classList.toggle("change");
    changeAriaSettings();
  });
});

/* Code to fade elements in upon scrolling
Code inspired by dev Ed tutorial details in readme I've changed the code to work for more than one element by using querySelectorAll() and the using forEach on it */
const animationOnScroll = () => {
  let animationElement = document.querySelectorAll(".animation-element");
  animationElement.forEach((element) => {
    // Code taken from the tutorian
    let position = element.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.2;
    if (position < screenPosition) {
      element.classList.add("animation-active");
    }
  });
};
// call function when window is scrolled
window.addEventListener("scroll", animationOnScroll);

/* Destinations */
//array of all the city destinations
let cityDestinations = [
  {
    id: "c0",
    name: "Dubai",
    image: "assets/images/cities/dubai.jpg",
    bgImage: "assets/images/cities/dubai-bg.jpg",
    country: "united arab emirates",
    latLng: {
      center: { lat: 25.2048, lng: 55.2708 },
      zoom: 11,
    },
    about:
      "A Modern city built in the middle of a dessert. Enjoy the city of huge skyscraers, huge shooping malls or relax on Atlantis, a resort built on an artificial island.",
    packages: [
      {
        id: "p1",
        type: "3 Star",
        nights: "4 Nights Weekend Break",
        price: "€499",
      },
      {
        id: "p2",
        type: "4 Star",
        nights: "4 Nights Weekend Break",
        price: "€549",
      },
      {
        id: "p3",
        type: "5 Star",
        nights: "4 Nights Weekend Break",
        price: "€699",
      },
    ],
  },
  {
    id: "c1",
    name: "Kyoto",
    image: "assets/images/cities/kyoto.jpg",
    bgImage: "assets/images/cities/kyoto-bg.jpg",
    country: "japan",
    latLng: {
      center: {
        lat: 35.0116,
        lng: 135.7681,
      },
      zoom: 11,
    },
    about:
      "Once the home of the Japanese emperor Kyoto is steeped in history. Enjoy the hundreds of ancient temples and shrines in this UNESCO world heritage site.",
    packages: [
      {
        id: "p1",
        type: "3 Star",
        nights: "5 Nights Weekend Break",
        price: "€599",
      },
      {
        id: "p2",
        type: "4 Star",
        nights: "5 Nights Weekend Break",
        price: "€649",
      },
      {
        id: "p3",
        type: "5 Star",
        nights: "5 Nights Weekend Break",
        price: "€799",
      },
    ],
  },
  {
    id: "c2",
    name: "London",
    image: "assets/images/cities/london.jpg",
    bgImage: "assets/images/cities/london-bg.jpg",
    country: "united kingdom",
    latLng: {
      center: {
        lat: 51.5074,
        lng: -0.1278,
      },
      zoom: 12,
    },
    about:
      "The heart of the U.K enjoy all this great city has to offer from, Buckiingham Palace, Big ben, a west end show, or enjoy the world class shopping.",
    packages: [
      {
        id: "p1",
        type: "3 Star",
        nights: "3 Nights Weekend Break",
        price: "€199",
      },
      {
        id: "p2",
        type: "4 Star",
        nights: "3 Nights Weekend Break",
        price: "€249",
      },
      {
        id: "p3",
        type: "5 Star",
        nights: "3 Nights Weekend Break",
        price: "€399",
      },
    ],
  },
  {
    id: "c3",
    name: "Madrid",
    image: "assets/images/cities/madrid.jpg",
    bgImage: "assets/images/cities/madrid-bg.jpg",
    country: "spain",
    latLng: {
      center: {
        lat: 40.4168,
        lng: -3.7038,
      },
      zoom: 11,
    },
    about:
      "Madrid the capital of Spain know for its Art Museams and elegant boulevards. Spend the day marveling at historic artworks followed by an evening of great tappas.",
    packages: [
      {
        id: "p1",
        type: "3 Star",
        nights: "3 Nights Weekend Break",
        price: "€199",
      },
      {
        id: "p2",
        type: "4 Star",
        nights: "3 Nights Weekend Break",
        price: "€249",
      },
      {
        id: "p3",
        type: "5 Star",
        nights: "3 Nights Weekend Break",
        price: "€399",
      },
    ],
  },
  {
    id: "c4",
    name: "New York",
    image: "assets/images/cities/new-york.jpg",
    bgImage: "assets/images/cities/new-york-bg.jpg",
    country: "usa",
    latLng: {
      center: {
        lat: 40.7128,
        lng: -74.006,
      },
      zoom: 11,
    },
    about:
      "The city that never sleeps. New york has something for everyone, from shopping on 5th avenue, strooling through centeral park, or taking in the view from the top of the empire state building.",
    packages: [
      {
        id: "p1",
        type: "3 Star",
        nights: "4 Nights Weekend Break",
        price: "€599",
      },
      {
        id: "p2",
        type: "4 Star",
        nights: "4 Nights Weekend Break",
        price: "€749",
      },
      {
        id: "sp",
        type: "4 star Special",
        nights: "4 Nights Weekend Break",
        price: "€499",
      },
    ],
  },
  {
    id: "c5",
    name: "Paris",
    image: "assets/images/cities/paris.jpg",
    bgImage: "assets/images/cities/paris-bg.jpg",
    country: "france",
    latLng: {
      center: {
        lat: 48.8566,
        lng: 2.3522,
      },
      zoom: 12,
    },
    about:
      "The worlds most romantic city. Stroll down the Champs-Elysees, spend the afternoon in the louvre and watch the Eiffel Tower illuminate at night.",
    packages: [
      {
        id: "p1",
        type: "3 Star",
        nights: "3 Nights Weekend Break",
        price: "€249",
      },
      {
        id: "p2",
        type: "4 Star",
        nights: "3 Nights Weekend Break",
        price: "€399",
      },
      {
        id: "sp",
        type: "4 Star Special",
        nights: "3 Nights Weekend Break",
        price: "€299",
      },
    ],
  },
  {
    id: "c6",
    name: "Prague",
    image: "assets/images/cities/prague.jpg",
    bgImage: "assets/images/cities/prague-bg.jpg",
    country: "czech republic",
    latLng: {
      center: {
        lat: 50.0755,
        lng: 14.4378,
      },
      zoom: 13,
    },
    about:
      "Prague is know for it's Old Town Square, with beautiful baroque buildings. Strool around the city at day and then enjoy the lively night life come nightfall.",

    packages: [
      {
        id: "p1",
        type: "3 Star",
        nights: "3 Nights Weekend Break",
        price: "€249",
      },
      {
        id: "p2",
        type: "4 Star",
        nights: "3 Nights Weekend Break",
        price: "€299",
      },
      {
        id: "p3",
        type: "5 Star",
        nights: "3 Nights Weekend Break",
        price: "€349",
      },
    ],
  },
  {
    id: "c7",
    name: "Rome",
    image: "assets/images/cities/rome.jpg",
    bgImage: "assets/images/cities/rome-bg.jpg",
    country: "italy",
    latLng: {
      center: {
        lat: 41.9028,
        lng: 12.4964,
      },
      zoom: 13,
    },
    about:
      "Dating back to the roman empire rome is steep in history. Enjoy the collusem or take a visit to vatican city.",
    packages: [
      {
        id: "p1",
        type: "3 Star",
        nights: "3 Nights Weekend Break",
        price: "€249",
      },
      {
        id: "p2",
        type: "4 Star",
        nights: "3 Nights Weekend Break",
        price: "€349",
      },
      {
        id: "p3",
        type: "5 Star",
        nights: "3 Nights Weekend Break",
        price: "€499",
      },
    ],
  },
  {
    id: "c8",
    name: "Singapore",
    image: "assets/images/cities/singapore.jpg",
    bgImage: "assets/images/cities/singapore-bg.jpg",
    country: "singapore",
    latLng: {
      center: {
        lat: 1.3521,
        lng: 103.8198,
      },
      zoom: 11,
    },
    about:
      "Singapore is a modern asian city. Enjoy the tradition market food and wash it all down with a singapore sling at Raffles Hotel. The gardens at the bay is a must see for any trip to this city.",
    packages: [
      {
        id: "p1",
        type: "3 Star",
        nights: "5 Nights Weekend Break",
        price: "€699",
      },
      {
        id: "p2",
        type: "4 Star",
        nights: "5 Nights Weekend Break",
        price: "€749",
      },
      {
        id: "p3",
        type: "5 Star",
        nights: "5 Nights Weekend Break",
        price: "€899",
      },
    ],
  },
  {
    id: "c9",
    name: "Tokyo",
    image: "assets/images/cities/tokyo.jpg",
    bgImage: "assets/images/cities/tokyo-bg.jpg",
    country: "japan",
    latLng: {
      center: {
        lat: 35.6804,
        lng: 139.769,
      },
      zoom: 12,
    },
    about:
      "Tokyo the city of the future. A city for foodies enjoy world class food in the city with the most Michelin Stars in the world.",
    packages: [
      {
        id: "p1",
        type: "3 Star",
        nights: "5 Nights Weekend Break",
        price: "€749",
      },
      {
        id: "p2",
        type: "4 Star",
        nights: "5 Nights Weekend Break",
        price: "€849",
      },
      {
        id: "p3",
        type: "5 Star",
        nights: "5 Nights Weekend Break",
        price: "€999",
      },
    ],
  },
];
// Array of all the beach destinations
let beachDestinations = [
  {
    id: "b0",
    name: "Antigua",
    image: "assets/images/beaches/antigua.jpg",
    bgImage: "assets/images/beaches/antigua-bg.jpg",
    country: "antigua",
    latLng: {
      center: {
        lat: 17.0747,
        lng: -61.8175,
      },
      zoom: 11,
    },
    about:
      "One of two major islands that make up Antigua and Barbuda. This island is ringed with anazing coral reefs and know for its white sandy beaches.",
    packages: [
      {
        id: "p1",
        type: "3 Star",
        nights: "7 nights All Enclusive",
        price: "€1099",
      },
      {
        id: "p2",
        type: "4 Star",
        nights: "7 nights All Enclusive",
        price: "€1249",
      },
      {
        id: "p3",
        type: "5 Star",
        nights: "7 nights All Enclusive",
        price: "€1399",
      },
    ],
  },
  {
    id: "b1",
    name: "Bali",
    image: "assets/images/beaches/bali.jpg",
    bgImage: "assets/images/beaches/bali-bg.jpg",
    country: "indonesia",
    latLng: {
      center: {
        lat: -8.3405,
        lng: 115.092,
      },
      zoom: 9,
    },
    about:
      "A volcanic indonesian island bali is know for its coral reefs and amazing beaches. Enjoy the busteling night life in kuta or get away from it all in the gilly islands",
    packages: [
      {
        id: "p1",
        type: "3 Star",
        nights: "7 nights All Enclusive",
        price: "€999",
      },
      {
        id: "p2",
        type: "4 Star",
        nights: "7 nights All Enclusive",
        price: "€1149",
      },
      {
        id: "p3",
        type: "5 Star",
        nights: "7 nights All Enclusive",
        price: "€1299",
      },
    ],
  },
  {
    id: "b2",
    name: "Capri",
    image: "assets/images/beaches/capri.jpg",
    bgImage: "assets/images/beaches/capri-bg.jpg",
    country: "italy",
    latLng: {
      center: {
        lat: 40.5532,
        lng: 14.2222,
      },
      zoom: 13.5,
    },
    about:
      "An Italian island capri is famous for its upsacle hotels and designer shopping or enjoy the crystal clear waters of the mediteranian sea.",
    packages: [
      {
        id: "p1",
        type: "3 Star",
        nights: "7 nights Hotel",
        price: "€699",
      },
      {
        id: "p2",
        type: "4 Star",
        nights: "7 nights Hotel",
        price: "€749",
      },
      {
        id: "p3",
        type: "5 Star",
        nights: "7 nights Hotel",
        price: "€899",
      },
    ],
  },
  {
    id: "b3",
    name: "Fiji",
    image: "assets/images/beaches/fiji.jpg",
    bgImage: "assets/images/beaches/fiji-bg.jpg",
    country: "fiji",
    latLng: {
      center: {
        lat: -17.7134,
        lng: 178.065,
      },
      zoom: 9,
    },
    about:
      "Made of more the 300 islands Fiji is famous for its tropical palm-lined beaches and stunning coral reefs..",
    packages: [
      {
        id: "p1",
        type: "3 Star",
        nights: "10 nights Hotel",
        price: "€1299",
      },
      {
        id: "p2",
        type: "4 Star",
        nights: "10 nights Hotel",
        price: "€1449",
      },
      {
        id: "p3",
        type: "5 Star",
        nights: "10 nights Hotel",
        price: "€1599",
      },
    ],
  },
  {
    id: "b4",
    name: "Koh Phi Phi",
    image: "assets/images/beaches/koh-phi-phi.jpg",
    bgImage: "assets/images/beaches/koh-phi-phi-bg.jpg",
    country: "thailand",
    latLng: {
      center: {
        lat: 7.7407,
        lng: 98.7784,
      },
      zoom: 12,
    },
    about:
      "Koh Phi Phi is one of the most famous thai islands. Famous for its crystal clear waters and limestone outcrops a tropical oasis.",
    packages: [
      {
        id: "p1",
        type: "3 Star",
        nights: "7 nights Hotel",
        price: "€899",
      },
      {
        id: "p2",
        type: "4 Star",
        nights: "7 nights Hotel",
        price: "€949",
      },
      {
        id: "p3",
        type: "5 Star",
        nights: "7 nights Hotel",
        price: "€1099",
      },
    ],
  },
  {
    id: "b5",
    name: "Maldives",
    image: "assets/images/beaches/maldives.jpg",
    bgImage: "assets/images/beaches/maldives-bg.jpg",
    country: "maldives",
    latLng: {
      center: {
        lat: 4.1755,
        lng: 73.5093,
      },
      zoom: 12,
    },
    about:
      "A series of islands in the indian ocean the maldives is a tropical oasis with prestine beaches and crystal clear waters. A real favorite with honeymooners",
    packages: [
      {
        id: "p1",
        type: "3 Star",
        nights: "7 nights All Enclusive",
        price: "€1499",
      },
      {
        id: "p2",
        type: "4 Star",
        nights: "7 nights All Enclusive",
        price: "€1649",
      },
      {
        id: "p3",
        type: "5 Star",
        nights: "7 nights All Enclusive",
        price: "€1999",
      },
    ],
  },
  {
    id: "b6",
    name: "Seychelles",
    image: "assets/images/beaches/seychelles.jpg",
    bgImage: "assets/images/beaches/seychelles-bg.jpg",
    country: "seychelles",
    latLng: {
      center: {
        lat: -4.6796,
        lng: 55.492,
      },
      zoom: 11,
    },
    about:
      "A group of islands in the indian ocean the Seychelles is home to neumerous beaches, nature reserves and coral reefs. The Seychelles is a popular honneymoon spot.",
    packages: [
      {
        id: "p1",
        type: "3 Star",
        nights: "7 nights All Enclusive",
        price: "€1299",
      },
      {
        id: "p2",
        type: "4 Star",
        nights: "7 nights All Enclusive",
        price: "€1349",
      },
      {
        id: "p3",
        type: "5 Star",
        nights: "7 nights All Enclusive",
        price: "€1499",
      },
    ],
  },
  {
    id: "b7",
    name: "Philippines",
    image: "assets/images/beaches/philippines.jpg",
    bgImage: "assets/images/beaches/philippines-bg.jpg",
    country: "philippines",
    latLng: {
      center: {
        lat: 12.8797,
        lng: 121.7704,
      },
      zoom: 6,
    },
    about:
      "Situated in the pacific ocean the Philippines is a series of tropical islands home to amazing beaches and stunning corals.",
    packages: [
      {
        id: "p1",
        type: "3 Star",
        nights: "10 nights Hotel",
        price: "€999",
      },
      {
        id: "p2",
        type: "4 Star",
        nights: "10 nights Hotel",
        price: "€1149",
      },
      {
        id: "p3",
        type: "5 Star",
        nights: "10 nights Hotel",
        price: "€1299",
      },
    ],
  },
  {
    id: "b8",
    name: "Tulum",
    image: "assets/images/beaches/tulum.jpg",
    bgImage: "assets/images/beaches/tulum-bg.jpg",
    country: "mexico",
    latLng: {
      center: {
        lat: 20.2114,
        lng: -87.4654,
      },
      zoom: 13,
    },
    about:
      "Tulum is a hidden gem in Mexicos caribbean coast. Known for its beaches and ruins of an ancient Mayan city.",
    packages: [
      {
        id: "p1",
        type: "3 Star",
        nights: "7 nights All Enclusive",
        price: "€1399",
      },
      {
        id: "p2",
        type: "4 Star",
        nights: "7 nights All Enclusive",
        price: "€1549",
      },
      {
        id: "p3",
        type: "5 Star",
        nights: "7 nights All Enclusive",
        price: "€1799",
      },
    ],
  },
  {
    id: "b9",
    name: "Santorini",
    image: "assets/images/beaches/santorini.jpg",
    bgImage: "assets/images/beaches/santorini-bg.jpg",
    country: "greece",
    latLng: {
      center: {
        lat: 36.3932,
        lng: 25.4615,
      },
      zoom: 11,
    },
    about:
      "One of the most stunning Greek islands Santorini is know for its white buildings and blue roofs. Perfect for a romatic getaway or a peaceful retreat.",
    packages: [
      {
        id: "p1",
        type: "3 Star",
        nights: "7 nights Hotel",
        price: "€1099",
      },
      {
        id: "p2",
        type: "4 Star",
        nights: "7 nights Hotel",
        price: "€1249",
      },
      {
        id: "sp",
        type: "5 star Special",
        nights: "7 nights Hotel",
        price: "€1199",
      },
    ],
  },
];

/* Renders li elements from destinations array's */
const renderDestination = (destination, sliderName) => {
  const destinationCard = `
    <li class="destination-card">
      <img src="${destination.image}" alt="image of ${destination.name}" class="card-img">
        <div class="card-content">
          <h2 class="card-title">${destination.name}</h2>
          <a href="destination.html?${destination.id}" class="destination-link link">Find Out More</a>
        </div>
      <div class="gradient"></div>
    </li>
    `;
  document
    .getElementById(sliderName)
    .insertAdjacentHTML("beforeend", destinationCard);
};

/* Literates through destination list and for each destination renders a li element */
const getDestinationElement = (destinations, sliderName) => {
  destinations.forEach((destination) => {
    renderDestination(destination, sliderName);
  });
};

/* Makes destinations list upon loading website using light slider library and jQuery*/
$(document).ready(() => {
  /*used code from stack overflow to fix bug of this loading on the destinations page more details in my readme file.
    ie. if(element.length){carry out function}*/
  if ($("#cities-slider").length) {
    getDestinationElement(cityDestinations, "cities-slider");
    $("#cities-slider").lightSlider({
      autoWidth: true,
      loop: true,
      slideMargin: 30,
      easing: "cubic-bezier(0.25, 0, 0.25, 1)",
      speed: 600,
    });
  }
  if ($("#beach-slider").length) {
    getDestinationElement(beachDestinations, "beach-slider");
    $("#beach-slider").lightSlider({
      autoWidth: true,
      loop: true,
      slideMargin: 30,
      easing: "cubic-bezier(0.25, 0, 0.25, 1)",
      speed: 600,
    });
  }
});

/* Code to change which review is being displayed when you click on a customers details */

let customerList = document.querySelectorAll(".reviewer");
let reviewList = document.querySelectorAll(".review");

// Removes the review thats currently displayed from view
const clearReviews = () => {
  reviewList.forEach((review) => {
    review.classList.add("hidden");
  });
};
// removes the actice class from the customers detail that currently has it.
const removeActiveClass = () => {
  customerList.forEach((customer) => {
    customer.classList.remove("active");
  });
};
/* adds an event listener to each customer and then shows the review when its clicked and changes the active class */
customerList.forEach((customer) => {
  customer.addEventListener("click", () => {
    clearReviews();
    removeActiveClass();
    //Matches customer whit their review.
    reviewList.forEach((review) => {
      if (
        customer.classList.contains("reviewer-1") &&
        review.classList.contains("review-1")
      ) {
        review.classList.remove("hidden");
        customer.classList.add("active");
      } else if (
        customer.classList.contains("reviewer-2") &&
        review.classList.contains("review-2")
      ) {
        review.classList.remove("hidden");
        customer.classList.add("active");
      } else if (
        customer.classList.contains("reviewer-3") &&
        review.classList.contains("review-3")
      ) {
        review.classList.remove("hidden");
        customer.classList.add("active");
      }
    });
  });
});

//---------------destination page-----------------------

// gets the current destination when you click on the page
const getDestination = (destinationId) => {
  // checks through each array to find a match for the id and return it
  let destination;
  cityDestinations.forEach((city) => {
    if (city.id === destinationId) {
      destination = city;
    }
  });
  beachDestinations.forEach((beach) => {
    if (beach.id === destinationId) {
      destination = beach;
    }
  });
  return destination;
};
// fills details in navagation
const renderDestinationNavbar = (destination) => {
  let details = document.getElementById("des-details");
  let map = document.getElementById("des-map");
  let packages = document.getElementById("des-packages");
  let enquiry = document.querySelector(".des-enquiry");
  details.innerHTML = `${destination.name} Details`;
  map.innerHTML = `${destination.name} Map`;
  packages.innerHTML = `${destination.name} Packages`;
  enquiry.innerHTML = `<a href="booking.html?${destination.id}" class="navigation-link">Booking Enquiry</a>`;
};

// Fills the heading of the destination page from the above arrays using the id
const renderDestinationHeading = (destination) => {
  let image = document.querySelector(".des-background-img");
  let title = document.querySelector(".des-page-title");
  // Adds the image as a background in the css
  if (destination) {
    image.style.cssText = ` 
  background: url(${destination.bgImage}) no-repeat center center scroll; 
  background-size:cover;`;
    title.innerHTML = destination.name;
  } else {
    alert("Something has gone wrong please try again");
  }
};

// fill the destination information from destination object
const renderDestinationInfo = (destination) => {
  if (destination) {
    let infoArea = document.querySelector(".about-des");
    infoArea.innerHTML = destination.about;
  } else {
    alert("Something has gone wrong please try again");
  }
};

//fills in destination packages
const renderPackage = (destination, package) => {
  let packageList = document.getElementById("destination-pk-ul");
  let packageLi = `
     	<li class="packages-item">
			<div class="package">
				<h2>${package.type} package</h2>
				<p>${package.nights}</p>
				<p>${package.type} Hotel</p>
				<p>Flights Included</p>
				<p>${package.price}/ person sharing</p>
                <a class="packages-btn link" href="booking.html?${destination.id}+${package.id}">
                Enquire Now</a>
            </div>
        </li>`;
  packageList.insertAdjacentHTML("beforeend", packageLi);
};

// renders destination page error if no destination
const renderEmptyDestination = () => {
  let noDestination = document.querySelectorAll(".no-destination");
  let message = `<p> Opps no destination details have been found. <br> Please go back to our home page to pick a destination</p> 
        <a href="index.html" class="link"><i class="las la-angle-double-left" aria-hidden="true"></i>Home Page</a>`;
  noDestination.forEach((area) => {
    area.innerHTML = message;
  });
};

//fill the rest of the destination page
const fillDestinationPage = (destinationPageId) => {
  let destinationId;
  if (destinationPageId.includes("#")) {
    let idArray = destinationPageId.split("#");
    destinationId = idArray[0];
  } else {
    destinationId = destinationPageId;
  }
  let destination = getDestination(destinationId);
  if (destination) {
    // fills in navbar
    renderDestinationNavbar(destination);
    // fills in heading
    renderDestinationHeading(destination);
    // gets data from the rest countries api
    getCountryData(destination);
    // fills in about section
    renderDestinationInfo(destination);
    // places the googles map
    renderMap(destination.latLng);
    //renders pakages
    destination.packages.forEach((package) => {
      renderPackage(destination, package);
    });
  } else {
    renderEmptyDestination();
  }
};

// only runs function for destination page
if (document.body.classList.contains("destination-page")) {
  if (window.location.href.includes("?")) {
    let destinationPageIdArray = window.location.href.split("?");
    let destinationPageId = destinationPageIdArray[1];
    if (destinationPageId) {
      fillDestinationPage(destinationPageId);
    }
  } else renderEmptyDestination();
}

//---------Booking Form Page ------------

// fill booking form nav
const renderBookingNavbar = (destination) => {
  let details = document.getElementById("bnav-details");
  let packages = document.getElementById("bnav-packages");
  details.innerHTML = `<a href="destination.html?${destination.id}" class="navigation-link">${destination.name} Page</a>`;
  packages.innerHTML = ` <a href="destination.html?${destination.id}#destination-packages" class="navigation-link">${destination.name} Packages</a>
    `;
};

// fills destination input value
const fillDestinationInputValue = (destination) => {
  let destinationInput = document.getElementById("destination-bf");
  destinationInput.value = destination.name;
};

// fills package input value.
const fillPackageInputValue = (packages, packageId) => {
  let packageInput = document.getElementById("package-bf");
  let package = getPackageDetails(packages, packageId);
  if (package) {
    packageInput.value = package.type;
  } else {
    packageInput.value = "";
  }
};

// get package from the
const getPackageDetails = (destinationPackages, packageId) => {
  let currentPackage;
  destinationPackages.forEach((destinationPackage) => {
    if (destinationPackage.id === packageId) {
      currentPackage = destinationPackage;
    }
  });
  if (currentPackage) {
    return currentPackage;
  }
};

// fills out the booking form details depending on destination.
const renderBookingPage = (bookingPageId) => {
  let destinationId;
  let packageId;
  if (bookingPageId.includes("+")) {
    let idArray = bookingPageId.split("+");
    destinationId = idArray[0];
    packageId = idArray[1];
  } else {
    destinationId = bookingPageId;
  }
  let destination = getDestination(destinationId);
  if (destination) {
    fillDestinationInputValue(destination);
    renderBookingNavbar(destination);
  }
  if (destination && packageId) {
    fillPackageInputValue(destination.packages, packageId);
  }
};

// only runs function for bookingpage
if (document.body.classList.contains("booking-page")) {
  if (window.location.href.includes("?")) {
    let bookingPageIdArray = window.location.href.split("?");
    let bookingPageId = bookingPageIdArray[1];
    if (bookingPageId) {
      renderBookingPage(bookingPageId);
    }
  }
}
