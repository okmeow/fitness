const WidthHeightCardsConstants = {
  DESKTOP: 1.1307,
  TABLET: 1.097,
  MOBILE: 1.2124,
};

const trainerCardElements = document.querySelectorAll('.trainers__item');
const trainerCardExtraElements = document.querySelectorAll('.trainers__extra');

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
