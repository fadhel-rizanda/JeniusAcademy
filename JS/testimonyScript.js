// navbar
const navbarContent = document.querySelector(".navbar_content");
const hamburger = document.getElementById("hamburger_icon");

hamburger.addEventListener('click', function(element){
  navbarContent.classList.add("active");
  element.preventDefault();
})
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarContent.contains(e.target)) {
    navbarContent.classList.remove("active");
  }
});

