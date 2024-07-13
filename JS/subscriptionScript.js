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

// subscribe button
const allSubscribeButtons = document.querySelectorAll(
  ".subscription_subject_button_container, .subscription_detail_button_container"
);
allSubscribeButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    alert("This package has been subscribed!");
  });
});

// display detail
const itemDetailModals = document.querySelectorAll(".detail");
function closeHandler(content, detail) {
  detail.style.display = "none";
  content.preventDefault();
}
function detailClickHandler(content, detail) {
  if (content.target === detail) {
    detail.style.display = "none";
  }
}
itemDetailModals.forEach(function (detail) {
  const closeIcon = detail.querySelector(".detail_container .close_icon");

  closeIcon.addEventListener("click", function (content) {
    closeHandler(content, detail);
  });

  detail.addEventListener("click", function (content) {
    detailClickHandler(content, detail);
  });
});

const itemDetailButtons = document.querySelectorAll(
  ".subscription_detail_content_container"
);
function handleClick(content, index) {
  const itemDetailModal = document.querySelector(`#item_detail_${index + 1}`);
  itemDetailModal.style.display = "flex";
  content.preventDefault();
}
itemDetailButtons.forEach(function (btn, index) {
  btn.addEventListener("click", function (content) {
    handleClick(content, index);
  });
});
