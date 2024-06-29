$(".top-puja-slider .owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: false,
  smartSpeed: 1500,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
});
$(".bottom-puja-slider .owl-carousel").owlCarousel({
  rtl: true,
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: false,
  smartSpeed: 1500,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
});

const showMore = document.querySelector("#show-more");
const showLess = document.querySelector("#show-less");
const extraPreWorks = document.querySelectorAll(".extra-preworks");

showMore.addEventListener("click", () => {
  extraPreWorks.forEach((item) => {
    if (item.classList.contains("d-none")) {
      item.classList.remove("d-none");
    }
  });
  showMore.classList.add("d-none");
  showLess.classList.remove("d-none");
});

showLess.addEventListener("click", () => {
  extraPreWorks.forEach((item) => {
    item.classList.add("d-none");
  });
  showMore.classList.remove("d-none");
  showLess.classList.add("d-none");
});
