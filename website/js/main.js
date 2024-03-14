// Mobile Menu
const  hamburger = document.querySelector(".navbar-toggler");
const  navMenu = document.querySelector(".navbar-collapse");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");   
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

