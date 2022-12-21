const buttonVideoStart = document.querySelector('[data-video-button="data-video-button"]');
const video = document.querySelector('[data-video="data-video"]');
const videoCover = document.querySelector('[data-preview-video="data-preview-video"]');

const buttonVideoStartHandler = () => {
  buttonVideoStart.addEventListener('click', () => {
    videoCover.style.display = 'none';
    video.style.display = 'block';
    video.src = 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1&mute=0';
  });
};

export {buttonVideoStartHandler};
