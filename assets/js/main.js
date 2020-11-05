/*--code from css tricks to fix bug of transitions happining on page load using javaScript to remove the preload class from the body after the page has loaded*/
window.onload = () => document.body.classList.remove("preload")

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
  },
  {
    id: "c1",
    name: "kyoto",
    image: "assets/images/cities/kyoto.jpg",
    bgImage: "assets/images/cities/kyoto-bg.jpg",
  },
  {
    id: "c2",
    name: "london",
    image: "assets/images/cities/london.jpg",
    bgImage: "assets/images/cities/london-bg.jpg",
  },
  {
    id: "c3",
    name: "madrid",
    image: "assets/images/cities/madrid.jpg",
    bgImage: "assets/images/cities/madrid-bg.jpg",
  },
  {
    id: "c4",
    name: "new york",
    image: "assets/images/cities/new-york.jpg",
    bgImage: "assets/images/cities/new-york-bg.jpg",
  },
  {
    id: "c5",
    name: "paris",
    image: "assets/images/cities/paris.jpg",
    bgImage: "assets/images/cities/paris-bg.jpg",
  },
  {
    id: "c6",
    name: "prague",
    image: "assets/images/cities/prague.jpg",
    bgImage: "assets/images/cities/prague-bg.jpg",
  },
  {
    id: "c7",
    name: "rome",
    image: "assets/images/cities/rome.jpg",
    bgImage: "assets/images/cities/rome-bg.jpg",
  },
  {
    id: "c8",
    name: "singapore",
    image: "assets/images/cities/singapore.jpg",
    bgImage: "assets/images/cities/singapore-bg.jpg",
  },
  {
    id: "c9",
    name: "tokyo",
    image: "assets/images/cities/tokyo.jpg",
    bgImage: "assets/images/cities/tokyo-bg.jpg",
  }
];
let beachDestinations = [
  {
    id: "b0",
    name: "antigua",
    image: "assets/images/beaches/antigua.jpg",
    bgImage: "assets/images/beaches/antigua-bg.jpg",
  },
  {
    id: "b1",
    name: "bali",
    image: "assets/images/beaches/bali.jpg",
    bgImage: "assets/images/beaches/bali-bg.jpg",
  },
  {
    id: "b2",
    name: "capri",
    image: "assets/images/beaches/capri.jpg",
    bgImage: "assets/images/beaches/capri-bg.jpg",
  },
  {
    id: "b3",
    name: "fiji",
    image: "assets/images/beaches/fiji.jpg",
    bgImage: "assets/images/beaches/fiji-bg.jpg",
  },
  {
    id: "b4",
    name: "koh phi phi",
    image: "assets/images/beaches/koh-phi-phi.jpg",
    bgImage: "assets/images/beaches/koh-phi-phi-bg.jpg",
  },
  {
    id: "b5",
    name: "maldives",
    image: "assets/images/beaches/maldives.jpg",
    bgImage: "assets/images/beaches/maldives-bg.jpg",
  },
  {
    id: "b6",
    name: "seychelles",
    image: "assets/images/beaches/seychelles.jpg",
    bgImage: "assets/images/beaches/seychelles-bg.jpg",
  },
  {
    id: "b7",
    name: "philippines",
    image: "assets/images/beaches/philippines.jpg",
    bgImage: "assets/images/beaches/philippines-bg.jpg",
  },
  {
    id: "b8",
    name: "tulum",
    image: "assets/images/beaches/tulum.jpg",
    bgImage: "assets/images/beaches/tulum-bg.jpg",
  },
  {
    id: "b9",
    name: "santorini",
    image: "assets/images/beaches/santorini.jpg",
    bgImage: "assets/images/beaches/santorini-bg.jpg",
  },
];

/* Renders li elements from destinations array's */

const renderDestination = (destination, sliderName) => {
  const markup = `
    <li class="destination-card">
      <img src="${destination.image}" alt="image of ${destination.name}" class="card-img">
        <div class="card-content">
          <h2 class="card-title">${destination.name}</h2>
          <a href="#" class="destination-link link">Find Out More</a>
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
$(document).ready(function () {
  getDestinationElement(cityDestinations, "cities-slider");
  $("#cities-slider").lightSlider({
    autoWidth: true,
    loop: true,
    slideMargin: 30,
    easing: "cubic-bezier(0.25, 0, 0.25, 1)",
    speed: 600,
  });
  getDestinationElement(beachDestinations, "beach-slider");
  $("#beach-slider").lightSlider({
    autoWidth: true,
    loop: true,
    slideMargin: 30,
    easing: "cubic-bezier(0.25, 0, 0.25, 1)",
    speed: 600,
  });
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
