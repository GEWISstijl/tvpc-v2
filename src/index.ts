import SettingsHandler from './ts/SettingsHandler.js';
import Carousel from './ts/Carousel.js';
import InfoBar from './ts/InfoBar.js';
import Clock from './ts/Clock.js';
import LayoutHandler from './ts/LayoutHandler.js';

let carousel: Carousel;

async function init() {
  const contentElement = document.getElementById('tvpc-content');
  const clockElement = document.getElementById('tvpc-time');

  const infoBar = InfoBar.getInstance();
  const layoutHandler = LayoutHandler.getInstance();
  layoutHandler.init(infoBar);
  await SettingsHandler.initialize(layoutHandler);
  const clock = new Clock(clockElement);
  clock.startClock();
  carousel = Carousel.getInstance(infoBar, contentElement);
  carousel.drawPoster();
  clockElement.onclick = () => {
    carousel.forceNextPoster();
  };
  document.getElementById('tvpc-explanation').onclick = () => {
    carousel.stopLoop();
  };
  console.log('READY!');
}

init();
