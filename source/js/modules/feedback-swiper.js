const feedbackMessages = document.querySelectorAll('[data-feedback-item="data-feedback-item"]');
const feedbackButtonNextElement = document.querySelector('[data-feedback-button-next="data-feedback-button-next"]');
const feedbackButtonPreviousElement = document.querySelector('[data-feedback-button-previous="data-feedback-button-previous"]');
const SWIPE_MIN_DISTANCE = 70;
const END_SWIPE_TIMEOUT = 200;
let startPoint;
let moved = false;

const buttonToggler = () => {
  if (feedbackMessages[0].classList.contains('feedback__item--active')) {
    feedbackButtonPreviousElement.disabled = true;
  } else {
    feedbackButtonPreviousElement.disabled = false;
  }

  if (feedbackMessages[feedbackMessages.length - 1].classList.contains('feedback__item--active')) {
    feedbackButtonNextElement.disabled = true;
  } else {
    feedbackButtonNextElement.disabled = false;
  }
};

const nextSlideOn = function () {
  for (let i = 0; i < feedbackMessages.length - 1; i++) {
    if (feedbackMessages[i].classList.contains('feedback__item--active')) {
      feedbackMessages[i].classList.remove('feedback__item--active');
      feedbackMessages[i + 1].classList.add('feedback__item--active');
      buttonToggler();
      return;
    }
  }
};

const previousSlideOn = function () {
  for (let i = 1; i < feedbackMessages.length; i++) {
    if (feedbackMessages[i].classList.contains('feedback__item--active')) {
      feedbackMessages[i].classList.remove('feedback__item--active');
      feedbackMessages[i - 1].classList.add('feedback__item--active');
      buttonToggler();
      return;
    }
  }
};

const defineTouch = (evt) => {
  evt.preventDefault();
  startPoint = evt.changedTouches[0].pageX;
};

const defineMove = (evt) => {
  if (moved) {
    return;
  }

  evt.preventDefault();

  if (evt.changedTouches[0].pageX > startPoint + SWIPE_MIN_DISTANCE) {
    previousSlideOn();
    moved = true;
  }

  if (evt.changedTouches[0].pageX < startPoint - SWIPE_MIN_DISTANCE) {
    nextSlideOn();
    moved = true;
  }
};

const feedbackHandler = () => {
  feedbackMessages.forEach((item) => item.addEventListener('touchmove', defineMove));
  feedbackMessages.forEach((item) => item.addEventListener('touchstart', defineTouch));
  feedbackMessages.forEach((item) => item.addEventListener('touchend', () => {
    setTimeout(() => {
      moved = !moved;
    }, END_SWIPE_TIMEOUT);
  }));

  feedbackButtonNextElement.addEventListener('click', nextSlideOn);
  feedbackButtonPreviousElement.addEventListener('click', previousSlideOn);
};

export {feedbackHandler};
