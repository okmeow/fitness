import Swiper, {Navigation} from 'swiper';

const WidthHeightCardsConstants = {
  DESKTOP: 1.1307,
  TABLET: 1.097,
  MOBILE: 1.2124,
};

const swiper = new Swiper('.mySwiper', {

  modules: [Navigation],

  navigation: {
    nextEl: '.trainers__button--next',
    prevEl: '.trainers__button--previous',
  },

  direction: 'horizontal',
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

const trainerCardElements = document.querySelectorAll('[data-trainer-card="data-trainer-card"]');
const trainerCardExtraElements = document.querySelectorAll('[data-trainer-extra="data-trainer-extra"]');

const setCardsSize = () => {
  for (let i = 0; i < trainerCardElements.length; i++) {
    trainerCardExtraElements[i].style.width = trainerCardElements[i].offsetWidth + 'px';
    if (window.innerWidth >= 1200) {
      trainerCardElements[i].style.height = trainerCardElements[i].offsetWidth * WidthHeightCardsConstants.DESKTOP + 'px';
      trainerCardExtraElements[i].style.height = trainerCardElements[i].style.height;
    }
    if (window.innerWidth <= 1199 && window.innerWidth >= 768) {
      trainerCardElements[i].style.height = trainerCardElements[i].offsetWidth * WidthHeightCardsConstants.TABLET + 'px';
      trainerCardExtraElements[i].style.height = trainerCardElements[i].style.height;
    }
    if (window.innerWidth <= 767) {
      trainerCardElements[i].style.height = trainerCardElements[i].offsetWidth * WidthHeightCardsConstants.MOBILE + 'px';
      trainerCardExtraElements[i].style.height = trainerCardElements[i].style.height;
    }
  }
};

const cardsSizeHandler = () => {
  setCardsSize();
  window.addEventListener('resize', setCardsSize);
};

export {cardsSizeHandler, swiper};
