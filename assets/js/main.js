/* Code to open and close the navigation menu*/

let menu = document.querySelector(".hamburger");
let navigation = document.querySelector(".navigation");
let link = document.querySelectorAll(".navigation-item");

menu.addEventListener("click", () => {
  navigation.classList.toggle("change");
});

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
