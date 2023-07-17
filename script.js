const preloaderText = document.querySelector('.preloader-text');

const texts = ['Halo', '你好', 'أهلاً', 'Oi'];
let currentTextIndex = 0;
let preloaderInterval; 

function changePreloaderText() {
  preloaderText.textContent = texts[currentTextIndex];
  currentTextIndex = (currentTextIndex + 1) % texts.length;
}

function fadeInContent() {
  const landingPage = document.querySelector('.landing-page');
  landingPage.classList.add('fade-in');
}

preloaderInterval = setInterval(changePreloaderText, 300);

setTimeout(function () {
  const preloader = document.getElementById('preloader');
  preloader.classList.add('hidden'); 
  fadeInContent();

  clearInterval(preloaderInterval);
}, 1300);
