const feedbackMessages = document.querySelectorAll('[data-feedback-item="data-feedback-item"]');
const feedbackButtonNext = document.querySelector('[data-feedback-button-next="data-feedback-button-next"]');
const feedbackButtonPrevious = document.querySelector('[data-feedback-button-previous="data-feedback-button-previous"]');

const buttonToggler = () => {
  if (feedbackMessages[0].classList.contains('feedback__item--active')) {
    feedbackButtonPrevious.style.display = "none";
  } else {
    feedbackButtonPrevious.style.display = "block";
  }

  if (feedbackMessages[feedbackMessages.length - 1].classList.contains('feedback__item--active')) {
    feedbackButtonNext.style.display = "none";
  } else {
    feedbackButtonNext.style.display = "block";
  }
};

const nextSlideOn = function () {
  for (let i = 0; i < feedbackMessages.length - 1; i++) {
    if (feedbackMessages[i].classList.contains('feedback__item--active')) {
      feedbackMessages[i].classList.remove('feedback__item--active');
      feedbackMessages[i+1].classList.add('feedback__item--active');
      buttonToggler();
      return;
    }
  }
};

const previousSlideOn = function () {
  for (let i = 1; i < feedbackMessages.length; i++) {
    if (feedbackMessages[i].classList.contains('feedback__item--active')) {
      feedbackMessages[i].classList.remove('feedback__item--active');
      feedbackMessages[i-1].classList.add('feedback__item--active');
      buttonToggler();
      return;
    }
  }
};

let startPoint;
let moved = false;

const defineTouch = (evt) => {
  evt.preventDefault();
  startPoint = evt.changedTouches[0].pageX;
};

const defineMove = (evt) => {
  for (let i = 0; i < feedbackMessages.length; i++) {
    if (moved) {
      return;
    }

    evt.preventDefault();

    if (evt.changedTouches[0].pageX > startPoint + feedbackMessages[i].offsetWidth / 2) {
      previousSlideOn();
      moved = true;
    }

    if (evt.changedTouches[0].pageX < startPoint - feedbackMessages[i].offsetWidth / 2) {
      nextSlideOn();
      moved = true;
    }
  }
};

const feedbackHandler = () => {
  feedbackMessages.forEach((item) => item.addEventListener("touchmove", defineMove));
  feedbackMessages.forEach((item) => item.addEventListener("touchstart", defineTouch));
  feedbackMessages.forEach((item) => item.addEventListener("touchend", () => {
    setTimeout(() => {
      moved = !moved;
    }, 200);
  }));

  feedbackButtonNext.addEventListener('click', nextSlideOn);
  feedbackButtonPrevious.addEventListener('click', previousSlideOn);
};

export {feedbackHandler};
