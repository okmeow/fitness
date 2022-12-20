import {swiper} from "vendor/swiper.js";


const WidthHeightCardsConstants = {
  DESKTOP: 1.1307,
  TABLET: 1.097,
  MOBILE: 1.2124,
};

const trainerCardElements = document.querySelectorAll('[data-trainer-card="data-trainer-card"]');
const trainerCardExtraElements = document.querySelectorAll('[data-trainer-extra="data-trainer-extra"]');
const trainersButtonNextElement = document.querySelector('[data-trainers-button-next="data-trainers-button-next"]');
const trainersButtonPreviousElement = document.querySelector('[data-trainers-button-previous="data-trainers-button-previous"]');






// Изменение размеров карточки от ширины экрана (с сохранением пропорций)

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

export {cardsSizeHandler};
