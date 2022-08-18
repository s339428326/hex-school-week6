"use strict";

var swiper = new Swiper(".swiper-container", {
  pagination: ".swiper-pagination",
  //   slidesPerView: 10,
  breakpoints: {
    991: {
      slidesPerView: 10,
      spaceBetween: 40
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 50
    },
    0: {
      slidesPerView: 3,
      spaceBetween: 10
    }
  },
  paginationClickable: true,
  //   spaceBetween: 30,
  freeMode: true
});
//# sourceMappingURL=all.js.map
