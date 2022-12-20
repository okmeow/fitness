const buttonVideoStart = document.querySelector('.about__video-button');
const video = document.querySelector('.about__video');
const videoCover = document.querySelector('.about__preview-video');

const buttonVideoStartHandler = () => {
  buttonVideoStart.addEventListener('click', () => {
    videoCover.style.display = 'none';
    video.style.display = 'block';
    video.src = 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1&mute=0';
  });
};

export {buttonVideoStartHandler};
