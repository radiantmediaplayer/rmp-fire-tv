var container = document.getElementById('rmpPlayer');
var rmp, isPaused;

var _onKeyDown = function (e) {
  var currentTime = rmp.getCurrentTime();
  var keyCode = e.keyCode;
  window.console.log('Key code called : ' + keyCode);
  rmp.setControlsVisible(true);
  switch (keyCode) {
    case 227: // REWIND 
      rmp.seekTo(currentTime - 10000);
      break;
    case 228: // FAST_FORWARD 
      rmp.seekTo(currentTime + 10000);
      break;
    case 8: // BACK
      window.location.replace('index.html');
      break;
    case 13: // SELECT
      break;
    case 37: // LEFT === REWIND
      rmp.seekTo(currentTime - 10000);
      break;
    case 39: // RIGHT === FAST_FORWARD
      rmp.seekTo(currentTime + 10000);
      break;
    case 179: // PLAY_PAUSE
      isPaused = rmp.getPaused();
      if (rmp.getAdOnStage() && rmp.getAdLinear()) {
        isPaused = rmp.getAdPaused();
      }
      if (isPaused) {
        rmp.play();
      } else {
        rmp.pause();
      }
      break;
    default:
      break;
  }
};

// when player is ready we wire the UI
container.addEventListener('ready', function () {
  rmp = window.rmp;
  document.body.addEventListener('keydown', _onKeyDown);
});
