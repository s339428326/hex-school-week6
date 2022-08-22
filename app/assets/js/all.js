var swiper = new Swiper(".swiper-container", {
  pagination: ".swiper-pagination",
  slidesPerView: "auto",
  spaceBetween: 16,
  paginationClickable: false,
  freeMode: true,
});

const swiper_1 = new Swiper(".swiper_slider", {
  spaceBetween: 30,
  effect: "fade",
  // 分頁
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // 左右箭頭
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  // 滾動條
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});

var courseSwiper = new Swiper(".course-swiper", {
  pagination: ".swiper-pagination",
  slidesPerView: "auto",
  spaceBetween: 16,
  paginationClickable: false,
  freeMode: true,
});

const list = document.querySelector(".list");
const handle = document.querySelector(".handle");

handle.addEventListener("click", (e) => {
  list.classList.toggle("list--active");
});

import Datepicker from "../../../node_modules/vanillajs-datepicker/js/Datepicker.js";
const elem = document.querySelector(".date");
// const datepicker = new Datepicker(elem, {
//   language: "zh-TW",
// });
const datepicker = new Datepicker(elem, {
  buttonClass: "btn",
});
