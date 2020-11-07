/*--code from css tricks to fix bug of transitions happining on page load using javaScript to remove the preload class from the body after the page has loaded*/
window.onload = () => document.body.classList.remove("preload");

/* Code to open and close the navigation menu*/

let menu = document.querySelector(".hamburger");
let navigation = document.querySelector(".navigation");
let link = document.querySelectorAll(".navigation-item");

menu.addEventListener("click", () => {
  navigation.classList.toggle("change");
});

/* Adds an event listener to each navigation item to close the navigation menu when the link is clicked*/
link.forEach((item) => {
  item.addEventListener("click", () => {
    navigation.classList.toggle("change");
  });
});

/* Code to fade elements in upon scrolling */

const animationOnScroll = () => {
  let animationElement = document.querySelectorAll(".animation-element");
  animationElement.forEach((element) => {
    let position = element.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.2;
    if (position < screenPosition) {
      element.classList.add("animation-active");
    }
  });
};

window.addEventListener("scroll", animationOnScroll);

/* Destinations */

let cityDestinations = [
  {
    id: "c0",
    name: "dubai",
    image: "assets/images/cities/dubai.jpg",
    bgImage: "assets/images/cities/dubai-bg.jpg",
    country: "united arab emirates",
    latLng: { lat: 25.2, lng: 55.2 },
    about:
      "A Modern city built in the middle of a dessert. Enjoy the city of huge skyscraers, huge shooping malls or relax on Atlantis, a resort built on an artificial island.",
  },
  {
    id: "c1",
    name: "kyoto",
    image: "assets/images/cities/kyoto.jpg",
    bgImage: "assets/images/cities/kyoto-bg.jpg",
    country: "japan",
    latLng: { lat: 35, lng: 135.7 },
    about:
      "Once the home of the Japanese emperor Kyoto is steeped in history. Enjoy the hundreds of ancient temples and shrines in this UNESCO world heritage site.",
  },
  {
    id: "c2",
    name: "london",
    image: "assets/images/cities/london.jpg",
    bgImage: "assets/images/cities/london-bg.jpg",
    country: "united kingdom",
    latLng: { lat: 51.5, lng: -0.12 },
    about:
      "The heart of the U.K enjoy all this great city has to offer from, Buckiingham Palace, Big ben, a west end show, or enjoy the world class shopping.",
  },
  {
    id: "c3",
    name: "madrid",
    image: "assets/images/cities/madrid.jpg",
    bgImage: "assets/images/cities/madrid-bg.jpg",
    country: "spain",
    latLng: { lat: 40.4, lng: -3.7 },
    about:
      "Madrid the capital of Spain know for its Art Museams and elegant boulevards. Spend the day marveling at historic artworks followed by an evening of great tappas.",
  },
  {
    id: "c4",
    name: "new york",
    image: "assets/images/cities/new-york.jpg",
    bgImage: "assets/images/cities/new-york-bg.jpg",
    country: "usa",
    latLng: { lat: 40.7, lng: -74.0 },
    about:
      "The city that never sleeps. New york has something for everyone, from shopping on 5th avenue, strooling through centeral park, or taking in the view from the top of the empire state building.",
  },
  {
    id: "c5",
    name: "paris",
    image: "assets/images/cities/paris.jpg",
    bgImage: "assets/images/cities/paris-bg.jpg",
    country: "france",
    latLng: { lat: 48.85, lng: 2.35 },
    about:
      "The worlds most romantic city. Stroll down the Champs-Elysees, spend the afternoon in the louvre and watch the Eiffel Tower illuminate at night.",
  },
  {
    id: "c6",
    name: "prague",
    image: "assets/images/cities/prague.jpg",
    bgImage: "assets/images/cities/prague-bg.jpg",
    country: "czech republic",
    latLng: { lat: 50.07, lng: 14.43 },
    about:
      "Prague is know for it's Old Town Square, with beautiful baroque buildings. Strool around the city at day and then enjoy the lively night life come nightfall.",
  },
  {
    id: "c7",
    name: "rome",
    image: "assets/images/cities/rome.jpg",
    bgImage: "assets/images/cities/rome-bg.jpg",
    country: "italy",
    latLng: { lat: 41.9, lng: 12.49 },
    about:
      "Dating back to the roman empire rome is steep in history. Enjoy the collusem or take a visit to vatican city.",
  },
  {
    id: "c8",
    name: "singapore",
    image: "assets/images/cities/singapore.jpg",
    bgImage: "assets/images/cities/singapore-bg.jpg",
    country: "singapore",
    latLng: { lat: 1.35, lng: 103.8 },
    about:
      "Singapore is a modern asian city. Enjoy the tradition market food and wash it all down with a singapore sling at Raffles Hotel. The gardens at the bay is a must see for any trip to this city.",
  },
  {
    id: "c9",
    name: "tokyo",
    image: "assets/images/cities/tokyo.jpg",
    bgImage: "assets/images/cities/tokyo-bg.jpg",
    country: "japan",
    latLng: { lat: 35.68, lng: 139.76 },
    about:
      "Tokyo the city of the future. A city for foodies enjoy world class food in the city with the most Michelin Stars in the world.",
  },
];
let beachDestinations = [
  {
    id: "b0",
    name: "antigua",
    image: "assets/images/beaches/antigua.jpg",
    bgImage: "assets/images/beaches/antigua-bg.jpg",
    country: "antigua",
    latLng: { lat: 17.07, lng: -61.81 },
    about:
      "One of two major islands that make up Antigua and Barbuda. This island is ringed with anazing coral reefs and know for its white sandy beaches.",
  },
  {
    id: "b1",
    name: "bali",
    image: "assets/images/beaches/bali.jpg",
    bgImage: "assets/images/beaches/bali-bg.jpg",
    country: "indonesia",
    latLng: { lat: -8.45, lng: 115.188 },
    about:
      "A volcanic indonesian island bali is know for its coral reefs and amazing beaches. Enjoy the busteling night life in kuta or get away from it all in the gilly islands",
  },
  {
    id: "b2",
    name: "capri",
    image: "assets/images/beaches/capri.jpg",
    bgImage: "assets/images/beaches/capri-bg.jpg",
    country: "italy",
    latLng: { lat: 40.54, lng: 14.19 },
    about:
      "An Italian island capri is famous for its upsacle hotels and designer shopping or enjoy the crystal clear waters of the mediteranian sea.",
  },
  {
    id: "b3",
    name: "fiji",
    image: "assets/images/beaches/fiji.jpg",
    bgImage: "assets/images/beaches/fiji-bg.jpg",
    country: "fiji",
    latLng: { lat: -16.49, lng: 174.96 },
    about:
      "Made of more the 300 islands Fiji is famous for its tropical palm-lined beaches and stunning coral reefs..",
  },
  {
    id: "b4",
    name: "koh phi phi",
    image: "assets/images/beaches/koh-phi-phi.jpg",
    bgImage: "assets/images/beaches/koh-phi-phi-bg.jpg",
    country: "thailand",
    latLng: { lat: 7.73, lng: 98.7 },
    about:
      "Koh Phi Phi is one of the most famous thai islands. Famous for its crystal clear waters and limestone outcrops a tropical oasis.",
  },
  {
    id: "b5",
    name: "maldives",
    image: "assets/images/beaches/maldives.jpg",
    bgImage: "assets/images/beaches/maldives-bg.jpg",
    country: "maldives",
    latLng: { lat: 4.09, lng: 69.68 },
    about:
      "A series of islands in the indian ocean the maldives is a tropical oasis with prestine beaches and crystal clear waters. A real favorite with honeymooners",
  },
  {
    id: "b6",
    name: "seychelles",
    image: "assets/images/beaches/seychelles.jpg",
    bgImage: "assets/images/beaches/seychelles-bg.jpg",
     country: "seychelles",
    latLng: { lat: -7.05, lng: 46.68 },
    about:
      "A group of islands in the indian ocean the Seychelles is home to neumerous beaches, nature reserves and coral reefs. The Seychelles is a popular honneymoon spot.",
    
  },
  {
    id: "b7",
    name: "philippines",
    image: "assets/images/beaches/philippines.jpg",
    bgImage: "assets/images/beaches/philippines-bg.jpg",
     country: "philippines",
    latLng: { lat: 11.57, lng: 113.57 },
    about:
      "Situated in the pacific ocean the Philippines is a series of tropical islands home to amazing beaches and stunning corals.",
  },
  {
    id: "b8",
    name: "tulum",
    image: "assets/images/beaches/tulum.jpg",
    bgImage: "assets/images/beaches/tulum-bg.jpg",
     country: "mexico",
    latLng: { lat: 20.21, lng: -87.53 },
    about:
      "Tulum is a hidden gem in Mexicos caribbean coast. Known for its beaches and ruins of an ancient Mayan city.",
  },
  {
    id: "b9",
    name: "santorini",
    image: "assets/images/beaches/santorini.jpg",
    bgImage: "assets/images/beaches/santorini-bg.jpg",
     country: "greece",
    latLng: { lat: 36.4, lng: 25.35 },
    about:
      "One of the most stunning Greek islands Santorini is know for its white buildings and blue roofs. Perfect for a romatic getaway or a peaceful retreat.",
  },
];

/* Renders li elements from destinations array's */

const renderDestination = (destination, sliderName) => {
  const markup = `
    <li class="destination-card">
      <img src="${destination.image}" alt="image of ${destination.name}" class="card-img">
        <div class="card-content">
          <h2 class="card-title">${destination.name}</h2>
          <a href="destination.html#${destination.id}" class="destination-link link">Find Out More</a>
        </div>
      <div class="gradient"></div>
    </li>
    `;
  document.getElementById(sliderName).insertAdjacentHTML("beforeend", markup);
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

/* Code to change reviews when you click on a reviewers details */

let customerList = document.querySelectorAll(".reviewer");
let reviewList = document.querySelectorAll(".review");

// Removes the reviews from view
const clearReviews = () => {
  reviewList.forEach((review) => {
    review.classList.add("hidden");
  });
};
// removes the actice class from the reviewers details
const removeActiveClass = () => {
  customerList.forEach((customer) => {
    customer.classList.remove("active");
  });
};
/* adds an event listener to each reviewer and then shows the review when its clicked and changes the active class */
customerList.forEach((customer) => {
  customer.addEventListener("click", () => {
    clearReviews();
    removeActiveClass();
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

// destination page
/*
const getId =()=>{
    let id = window.location.hash.replace("#", "");
    console.log(id)
}*/
const getDestination = () => {
  let destinationId = window.location.hash.replace("#", "");
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

const renderDestinationHeading = () => {
  let destination = getDestination();
  let image = document.querySelector(".des-background-img");
  let title = document.querySelector(".des-page-title");
  image.style.cssText = ` 
  background: url(${destination.bgImage}) no-repeat center center scroll; 
  background-size:cover;`;

  title.innerHTML = destination.name;
};

$(document).ready(() => {
  if ($("body").hasClass("destination-page")) {
    renderDestinationHeading();
  }
});
