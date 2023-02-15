var mySwiper = new Swiper('.swipe01', {
  slidesPerView: 'auto',
	loop : 'auto',
  autoplay: {
    delay: 4000,
  },
  speed: 1000,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next01",
    prevEl: ".swiper-button-prev01",
  },
  on: {
    init: function() {
      $('.custom-fraction .current').text(this.realIndex + 1);
      $('.custom-fraction .all').text(this.loopedSlides);
  },

  slideChangeTransitionStart: function() {
      $('.custom-fraction .current').text(this.realIndex + 1);
  }
  }
});



var menuSwipe = new Swiper('.swipe02', {
  slidesPerView: 3,
  spaceBetween : 60,
	loop : true,
  centeredSlides: true, 
  autoplay: {
    delay: 3000,
  },
  speed: 1000,
	pagination : {
		el : '.swiper-pagination02',
	},
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: { //반응형 조건 속성
    
    799: {
      slidesPerView: 1.5,
      spaceBetween : 0,
    },
    900: {
      slidesPerView: 2,
      spaceBetween : 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween : 40,
    },
  }
});

