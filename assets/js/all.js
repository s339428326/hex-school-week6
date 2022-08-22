"use strict";

var _Datepicker = _interopRequireDefault(require("../../../node_modules/vanillajs-datepicker/js/Datepicker.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var swiper = new Swiper(".swiper-container", {
  pagination: ".swiper-pagination",
  slidesPerView: "auto",
  spaceBetween: 16,
  paginationClickable: false,
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
var courseSwiper = new Swiper(".course-swiper", {
  pagination: ".swiper-pagination",
  slidesPerView: "auto",
  spaceBetween: 16,
  paginationClickable: false,
  freeMode: true
});
var list = document.querySelector(".list");
var handle = document.querySelector(".handle");
handle.addEventListener("click", function (e) {
  list.classList.toggle("list--active");
});
var elem = document.querySelector(".date"); // const datepicker = new Datepicker(elem, {
//   language: "zh-TW",
// });

var datepicker = new _Datepicker["default"](elem, {
  buttonClass: "btn"
});
//# sourceMappingURL=all.js.map
