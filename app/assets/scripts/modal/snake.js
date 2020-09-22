var indicator = document.querySelector(".nav-links__indicator");
var items = document.querySelectorAll(".nav-links__item");
var active = document.querySelector(".active");
function handleIndicator(el) {
  indicator.style.width = "".concat(el.offsetWidth, "px");
  console.log("width  : " + indicator.style.width);
  indicator.style.left = "".concat(el.offsetLeft, "px");
  console.log("left : " + indicator.style.left);
  // indicator.style.backgroundColor = el.getAttribute("active-color");

  //   el.style.color = el.getAttribute("active-color");
}

items.forEach(function (item, index) {
  item.addEventListener("mouseover", function (e) {
    console.log(e.target);
    handleIndicator(e.target);
  });
  item.addEventListener("mouseleave", function (e) {
    console.log(e.target);
    handleIndicator(active);
  });

  item.classList.contains("active") && handleIndicator(item);
});
