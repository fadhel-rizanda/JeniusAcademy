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

// subscription content
const exploreMoreElementaryButtons = document.getElementById('explore_more_elementary_button');
exploreMoreElementaryButtons.addEventListener('click', function() {
  window.location.href = "../HTML/subscription.html#elementary_subscription";
});

const exploreMoreJuniorButtons = document.getElementById('explore_more_junior_button');
exploreMoreJuniorButtons.addEventListener('click', function() {
  window.location.href = "../HTML/subscription.html#junior_subscription";
});

const exploreMoreSeniorButtons = document.getElementById('explore_more_senior_button');
exploreMoreSeniorButtons.addEventListener('click', function() {
  window.location.href = "../HTML/subscription.html#senior_subscription";
});



// best selling
const bestSellingElementaryButtons = document.getElementById('best_selling_elementary_button');
bestSellingElementaryButtons.addEventListener('click', function() {
  window.location.href = "../HTML/subscription.html#elementary_basic_subscription";
});

const bestSellingJuniorButtons = document.getElementById('best_selling_junior_button');
bestSellingJuniorButtons.addEventListener('click', function() {
  window.location.href = "../HTML/subscription.html#junior_standard_subscription";
});

const bestSellingSeniorButtons = document.getElementById('best_selling_senior_button');
bestSellingSeniorButtons.addEventListener('click', function() {
  window.location.href = "../HTML/subscription.html#senior_premium_subscription";
});

// testimony content 
const exploreMoreTestimony = document.querySelectorAll('.testimony_content');
exploreMoreTestimony.forEach(function(button){
  button.addEventListener('click', function(){
    window.location.href = "../HTML/testimony.html#testimony_title_container";
  });
});

