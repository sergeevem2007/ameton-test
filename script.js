const faqSlider = new Swiper('#faq__slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  spaceBetween: 24,
  pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
	},
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  navigation: {
		enabled: false,
	},
  breakpoints: {
		524: {
			slidesPerView: 2,
		},
    768: {
      slidesPerView: 3,
      pagination: {
        enabled: false,
      },
      navigation: {
        enabled: true,
      },
    },
		1024: {
			slidesPerView: 4,
      pagination: {
        enabled: false,
      },
      navigation: {
        enabled: true,
      }
		},
	},
});