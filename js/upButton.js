const goTopBtn = document.querySelector(".back__to__top");

window.addEventListener("scroll", trackScroll);
goTopBtn.addEventListener("click", backToTop);

function trackScroll() {
  const scrolled = window.pageYOffset;
  const coords = document.documentElement.clientHeight;
  if (scrolled > coords) {
    goTopBtn.classList.add("back__to__top-show");
  }
  if (scrolled < coords) {
    goTopBtn.classList.remove("back__to__top-show");
  }
}

function backToTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -80);
    setTimeout(backToTop, 20);
  }
}
