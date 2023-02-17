const toggleButton = document.querySelector(".toggle-button");
const navbarLinks = document.querySelector(".nav-menu");
const title= document.querySelector(".title");


toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
    title.classList.toggle("active");
    toggleButton.classList.toggle("active");
    })

document.querySelectorAll(".nav-item").forEach(n => n.addEventListener("click", () => {
    toggleButton.classList.remove("active");
    navbarLinks.classList.remove("active");
    title.classList.remove("active");
}))
