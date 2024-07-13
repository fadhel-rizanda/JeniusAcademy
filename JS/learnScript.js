// navbar
const navbarContent = document.querySelector(".navbar_content");
const hamburger = document.getElementById("hamburger_icon");

hamburger.addEventListener("click", function (element) {
  navbarContent.classList.add("active");
  element.preventDefault();
});
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarContent.contains(e.target)) {
    navbarContent.classList.remove("active");
  }
});

// download materials
var viewSummariesExcercise = document.querySelector(
  ".learn_class_description_button"
);
var summaryExcercise = document.querySelector(".summary_excercise_container");
viewSummariesExcercise.addEventListener("click", function () {
  summaryExcercise.classList.toggle("active");
});

// play next video
const nextVideo = document.querySelector(".video_next_container");
nextVideo.addEventListener("click", function () {
  alert("Play next session video");
});

// rate star color
const selectStars = document.querySelectorAll(".star_logo");
selectStars.forEach(function (star) {
  star.addEventListener("click", function () {
    const dataIndex = parseInt(star.getAttribute("data-index"));
    selectStars.forEach(function (element, i) {
      if (i < dataIndex) {
        element.classList.remove("star_logo");
        element.classList.add("star_logo_selected");
      } else {
        element.classList.remove("star_logo_selected");
        element.classList.add("star_logo");
      }
    });
  });
});

// enter thought
const inputRate = document.querySelector(".input_rate");
inputRate.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    alert("Your thoughts has been submitted!");
  }
});

// download material
const downloadMaterial = document.querySelector(".material_button");
downloadMaterial.addEventListener("click", function () {
  alert("The materials and excercises have been downloaded!");
});

// submission
const submitExcercise = document.querySelector(".submission_button");
submitExcercise.addEventListener("click", function () {
  alert("Your answer aready submitted!");
});
