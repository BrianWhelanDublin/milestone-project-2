/* Code to open and close the navigation menu*/ 

let menu = document.querySelector(".hamburger");
let navigation = document.querySelector(".navigation");
let link = document.querySelectorAll(".navigation-item")

menu.addEventListener("click", () => {
    navigation.classList.toggle("change");
 });

 link.forEach(item=>{
     item.addEventListener("click", ()=>{
     navigation.classList.toggle("change")
    })
 })


