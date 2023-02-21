/* 
Project Name: Electro 2.0 Ecommerce Website
Description: A complete responsive e-commerce website design
             by using HTML CSS and JavaScript from scratch.
Author: Md Al Amin Hossen
Github: https://github.com/MdRasen
License: MIT License
Copyright: 2023 ©MdRasen
*/

// Product Swiper Start

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  // For autoplay feature
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

// Product Swiper End
