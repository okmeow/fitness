// import {swiper} from '../vendor/swiper.js';

// let swiperTrainers = new Swiper('.mySwiper', {
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   slidesPerView: 4,
//   slidesPerColumn: 1,
//   spaceBetween: 30,
// });

const WidthHeightCardsConstants = {
  DESKTOP: 1.1307,
  TABLET: 1.097,
  MOBILE: 1.2124,
};

const trainerCardElements = document.querySelectorAll('[data-trainer-card="data-trainer-card"]');
const trainerCardExtraElements = document.querySelectorAll('[data-trainer-extra="data-trainer-extra"]');
const trainersButtonNextElement = document.querySelector('[data-trainers-button-next="data-trainers-button-next"]');
// const trainersButtonPreviousElement = document.querySelector('[data-trainers-button-previous="data-trainers-button-previous"]');

const nextCardOn = () => {
  for (let i = 0; i < trainerCardElements.length; i++) {
    if (trainerCardElements[i].classList.contains('trainers__item--last-visible')) {
      if (i === trainerCardElements.length - 1) {
        trainerCardElements[4].style.display = 'none';
        trainerCardElements[5].style.display = 'none';
        trainerCardElements[6].style.display = 'none';
        trainerCardElements[7].style.display = 'none';
        trainerCardElements[0].style.display = 'block';
        trainerCardElements[1].style.display = 'block';
        trainerCardElements[2].style.display = 'block';
        trainerCardElements[3].style.display = 'block';

        trainerCardElements[7].classList.remove('trainers__item--last-visible');
        trainerCardElements[3].classList.add('trainers__item--last-visible');
        setCardsSize();
        return;
      }
      if (i === 3) {
        trainerCardElements[4].style.display = 'block';
        trainerCardElements[5].style.display = 'block';
        trainerCardElements[6].style.display = 'block';
        trainerCardElements[7].style.display = 'block';
        trainerCardElements[0].style.display = 'none';
        trainerCardElements[1].style.display = 'none';
        trainerCardElements[2].style.display = 'none';
        trainerCardElements[3].style.display = 'none';

        trainerCardElements[7].classList.add('trainers__item--last-visible');
        trainerCardElements[3].classList.remove('trainers__item--last-visible');
        setCardsSize();
        return;
      }
    }
  }
};

trainersButtonNextElement.addEventListener('click', nextCardOn);

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
