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
const preworkWrap = document.querySelector(".preworks-wrap");

showMore.addEventListener("click", () => {
  extraPreWorks.forEach((item) => {
    if (item.classList.contains("d-none")) {
      item.classList.remove("d-none");
      preworkWrap.scrollBy(0, 200);
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

gsap.utils.toArray(".option").forEach((card) => {
  gsap.from(card, {
    scale: 0.5,
    duration: 2,
    scrollTrigger: {
      trigger: card,
      start: "top 80%", // adjust as needed
      end: "bottom 20%", // adjust as needed
      scrub: 0.8,
    },
  });
});

gsap.from(".durga-puja-slogan h1 span", {
  opacity: 0,
  stagger: 0.5, // Stagger animation for each span
  duration: 2,
  ease: "back.out", // Easing function
});

gsap.from(".durga-puja-slogan .img-fluid", {
  scale: 0,
  duration: 5,
  ease: "back.out", // Easing function
});

$("[data-fancybox]").fancybox({
  // Options
  beforeShow: function (instance, slide) {
    var caption = $(slide.opts.$orig).data("caption");
    if (caption) {
      $(".fancybox-caption").text(caption);
    }
  },
});



$(document).ready(function() {
    var mainFolder = 'images/'; // Replace with the path to your main folder

    // Function to recursively fetch images from folder and subfolders
    function fetchImages(folder) {
        $.ajax({
            url: folder,
            success: function(data) {
                $(data).find("a").attr("href", function(i, val) {
                    if( val.match(/\.(jpe?g|png|gif)$/i) ) { // Check for image file extension
                        var imageUrl = folder + val;
                        $('#imageContainer').append(`<a href="${imageUrl}" target="_blank"><img src="${imageUrl}" alt="Image"></a>`);
                    } else if (val.endsWith('/')) { // Check if it's a folder (ends with '/')
                        fetchImages(folder + val); // Recursively fetch images from subfolder
                    }
                });
            }
        });
    }

    // Initiate fetching images from the main folder
    fetchImages(mainFolder);
});


