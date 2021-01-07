/*to switch between content on the same section on whole beans nav.
function ShowContent(content) {
  document.getElementById("houseblend").style.display = "none";
  document.getElementById("singleorigin").style.display = "none";
  document.getElementById("supercoffee").style.display = "none";
  document.getElementById(content).style.display = "block";
}

//to make sure that house blend button is clicked on page load
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("beandefault").click();
});

//jQuery for navigation button animation for whole beans section
$(document).on("click", "nav ul li", function () {
  $(this).addClass("active").siblings().removeClass("active");
});*/

//Nav Begin
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  //Animate Links
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });

  //Hamburger Animation
  hamburger.classList.toggle("toggle");
});

//top Navbar script
window.addEventListener("scroll", function () {
  const header = document.querySelector("nav");
  header.classList.toggle("sticky", window.scrollY > 0);
});
