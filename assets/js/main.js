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
    let screenPosition = window.innerHeight / 1.4;
    if (position < screenPosition) {
      element.classList.add("animation-active");
    }
  });
};

window.addEventListener("scroll", animationOnScroll);

/* Destinations */

let cityDestinations = [
  { id: "c0", name: "berlin", image: "assets/images/cities/berlin.jpg" },
  { id: "c1", name: "dubai", image: "assets/images/cities/dubai.jpg" },
  { id: "c2", name: "kyoto", image: "assets/images/cities/kyoto.jpg" },
  { id: "c3", name: "london", image: "assets/images/cities/london.jpg" },
  { id: "c4", name: "madrid", image: "assets/images/cities/madrid.jpg" },
  { id: "c5", name: "new york", image: "assets/images/cities/new-york.jpg" },
  { id: "c6", name: "paris", image: "assets/images/cities/paris.jpg" },
  {
    id: "c7",
    name: "san francisco",
    image: "assets/images/cities/san-francisco.jpg",
  },
  { id: "c8", name: "shanghai", image: "assets//images/cities/shanghai.jpg" },
  { id: "c10", name: "singapore", image: "assets/images/cities/singapore.jpg" },
  { id: "c11", name: "tokyo", image: "assets/images/cities/tokyo.jpg" },
];
let beachDestinations = [
  { id: "b0", name: "bali", image: "assets/images/beaches/bali.jpg" },
  { id: "b1", name: "barbados", image: "assets/images/beaches/barbados.jpg" },
  { id: "b2", name: "cannes", image: "assets/images/beaches/cannes.jpg" },
  { id: "b3", name: "capri", image: "assets/images/beaches/capri.jpg" },
  {
    id: "b4",
    name: "cinqu terre",
    image: "assets/images/beaches/cinque-terre.jpg",
  },
  {
    id: "b5",
    name: "koh phi phi",
    image: "assets/images/beaches/koh-phi-phi.jpg",
  },
  { id: "b6", name: "maldives", image: "assets/images/beaches/maldives.jpg" },
  { id: "b7", name: "mauritius", image: "assets/images/beaches/mauritius.jpg" },
  { id: "b8", name: "santorini", image: "assets/images/beaches/santorini.jpg" },
];

/* Renders li elements from destinations array's */

const renderDestination = (destination, sliderName) => {
  const markup = `
    <li class="destination-card">
      <img src="${destination.image}" alt="image of ${destination.name}" class="card-img">
        <div class="card-content">
          <h2 class="card-title">${destination.name}</h2>
          <a href="#" class="card-btn">Find Out More</a>
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

let reviewers = document.querySelectorAll(".reviewer");
let review = document.querySelectorAll(".review");

// Removes the reviews from view
const clearReviews = () => {
  review.forEach((el) => {
    el.classList.add("hidden");
  });
};
// removes the actice class from the reviewers details
const removeActiveClass = () => {
  reviewers.forEach((el) => {
    el.classList.remove("active");
  });
};
/* adds an event listener to each reviewer and then shows the review when its clicked and changes the active class */
reviewers.forEach((e) => {
  e.addEventListener("click", () => {
    clearReviews();
    removeActiveClass();
    review.forEach((el) => {
      if (
        e.classList.contains("reviewer-1") &&
        el.classList.contains("review-1")
      ) {
        el.classList.remove("hidden");
        e.classList.add("active");
      } else if (
        e.classList.contains("reviewer-2") &&
        el.classList.contains("review-2")
      ) {
        el.classList.remove("hidden");
        e.classList.add("active");
      } else if (
        e.classList.contains("reviewer-3") &&
        el.classList.contains("review-3")
      ) {
        el.classList.remove("hidden");
        e.classList.add("active");
      }
    });
  });
});
