/* Code to open and close the navigation menu*/ 

let menu = document.querySelector(".hamburger");
let navigation = document.querySelector(".navigation");

menu.addEventListener("click", () => {
    navigation.classList.toggle("change")
});