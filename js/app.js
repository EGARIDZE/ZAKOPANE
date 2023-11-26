let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
});

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  loop: true,
  autoplay: {
    delay: 3000,
  },
});

var swiper = new Swiper(".mySecondSwiper", {
  loop: true,
  autoplay: {
    delay: 12000,
  },
  autoHeight: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".myBigSecondSwiper", {
  autoHeight: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },

    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },

  },
});
