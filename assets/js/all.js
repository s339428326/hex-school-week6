"use strict";

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
var handle = document.querySelector(".handle");
handle.addEventListener("click", function (e) {
  var list = document.querySelector(".list");
  list.classList.toggle("list--active");
});
var elem = document.querySelector('input[name="datepicker"]');
var datepicker = new Datepicker(elem, {
  language: "zh-TW"
});
var myModal = document.getElementById("myModal");
var myInput = document.getElementById("myInput");
myModal.addEventListener("shown.bs.modal", function () {
  myInput.focus();
});
//# sourceMappingURL=all.js.map
