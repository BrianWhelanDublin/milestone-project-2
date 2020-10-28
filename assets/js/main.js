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

let cityDestination = [
  {id="c0", name: "berlin", image: "../images/cities/berlin.jpg"},
  {id="c1", name: "dubai", image: "../images/cities/dubai.jpg"},
  {id="c2",name: "kyoto", image: "../images/cities/kyoto.jpg"},
  {id="c3",name: "london", image: "../images/cities/london.jpg"},
  {id="c4",name: "madrid", image: "../images/cities/madrid.jpg"},
  {id="c5",name: "new york", image: "../images/cities/new-york.jpg"},
  {id="c6",name: "paris", image: "../images/cities/paris.jpg"},
  {id="c7",name: "san francisco", image: "../images/cities/san-francisco.jpg"},
  {id="c8",name: "shanghai", image: "../images/cities/shanghai.jpg"},
  {id="c10",name: "singapore", image: "../images/cities/singapore.jpg"},
  {id="c11",name: "tokyo", image: "../images/cities/tokyo.jpg"}
];
let beachDestinations =[
     {id="b0", name: "bali", image: "../images/beaches/beaches.jpg"},
     {id="b1", name: "barbados", image: "../images/beaches/barbados.jpg"},
     {id="b2", name: "cannes", image: "../images/beaches/cannes.jpg"},
     {id="b3", name: "capri", image: "../images/beaches/capri.jpg"},
     {id="b4", name: "cinqu terre", image: "../images/beaches/cinque-terre.jpg"},
     {id="b5", name: "koh phi phi", image: "../images/beaches/koh-phi-phi.jpg"},
     {id="b6", name: "maldives", image: "../images/beaches/maldives.jpg"},
     {id="b7", name: "mauritius", image: "../images/beaches/mauritius.jpg"},
     {id="b8", name: "santorini", image: "../images/beaches/santorini.jpg"}
]