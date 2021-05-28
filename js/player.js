let isPaused;

const _onKeyUp = function (event) {
  event.stopPropagation();
  event.preventDefault();
  const currentTime = window.rmp.getCurrentTime();
  const keyCode = event.keyCode;
  window.console.log('Key code called : ' + keyCode);
  window.rmp.setControlsVisible(true);
  switch (keyCode) {
    case 227: // REWIND 
      window.rmp.seekTo(currentTime - 10000);
      break;
    case 228: // FAST_FORWARD 
      window.rmp.seekTo(currentTime + 10000);
      break;
    case 8: // BACK
      window.location.replace('index.html');
      break;
    case 179: // PLAY_PAUSE
      isPaused = window.rmp.getPaused();
      if (window.rmp.getAdOnStage() && window.rmp.getAdLinear()) {
        isPaused = window.rmp.getAdPaused();
      }
      if (isPaused) {
        window.rmp.play();
      } else {
        window.rmp.pause();
      }
      break;
    default:
      break;
  }
};

document.addEventListener('keyup', _onKeyUp);

/* needed to avoid double event firing on remote interaction */
document.addEventListener('keypress', function (event) {
  event.stopPropagation();
  event.preventDefault();
});
