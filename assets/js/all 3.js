"use strict";

var swiper = new Swiper(".swiper-container", {
  pagination: ".swiper-pagination",
  breakpoints: {
    991: {
      slidesPerView: 10,
      spaceBetween: 16
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 16
    },
    0: {
      slidesPerView: 3,
      spaceBetween: 10
    }
  },
  paginationClickable: true,
  freeMode: true
});
var swiper_1 = new Swiper(".swiper_slider", {
  spaceBetween: 30,
  effect: "fade",
  // 分頁
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  // 左右箭頭
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev"
  },
  // 滾動條
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true
  }
});
//# sourceMappingURL=all.js.map
