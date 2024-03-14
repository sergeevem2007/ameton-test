const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  spaceBetween: 24,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
		524: {
			slidesPerView: 2,
		},
    768: {
      slidesPerView: 3,
    },
		1024: {
			slidesPerView: 4,
		},
	},
});