/* Code to open and close the navigation menu*/ 

let menu = document.querySelector(".hamburger");
let navigation = document.querySelector(".navigation");
let hero = document.querySelector(".social-media-links")

menu.addEventListener("click", () => {
    navigation.classList.toggle("change");
    hero.classList.toggle("change")
});