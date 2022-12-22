var playerButtons = [
  { id: 0, name: 'playPause', element: null }
];

var container = document.getElementById('rmp');
var currentActiveButtonId;
var currentActiveButton;

var _createEvent = function (eventName, element) {
  var event;
  if (element) {
    try {
      event = new Event(eventName);
      element.dispatchEvent(event);
    } catch (e) {
      console.trace(e);
    }
  }
};

// handle requests from TV remote
var _removeHoverClass = function () {
  for (var i = 0, len = playerButtons.length; i < len; i++) {
    playerButtons[i].element.classList.remove('rmp-button-hover');
  }
};

var _setActiveButton = function (id) {
  currentActiveButtonId = id;
  playerButtons[id].element.classList.add('rmp-button-hover');
};

var _handleButtons = function (keyCode) {
  currentActiveButton = container.querySelector('.rmp-button-hover');
  _removeHoverClass();
  var newId;
  switch (keyCode) {
    case 38: // ArrowUp
    case 39: // ArrowRight
      if (playerButtons[currentActiveButtonId + 1]) {
        newId = currentActiveButtonId + 1;
      } else {
        newId = 0;
      }
      break;
    case 37: // ArrowLeft
    case 40: // ArrowDown
      if (playerButtons[currentActiveButtonId - 1]) {
        newId = currentActiveButtonId - 1;
      } else {
        newId = playerButtons.length - 1;
      }
      break;
  }
  _setActiveButton(newId);
};

var _triggerButton = function () {
  currentActiveButton = container.querySelector('.rmp-button-hover');
  _createEvent('click', currentActiveButton);
};

var isPaused;

var _onKeyDown = function (event) {
  event.stopPropagation();
  event.preventDefault();
  var keyCode = event.keyCode;
  window.console.log('Key code called : ' + keyCode);
  window.rmp.setControlsVisible(true);
  switch (keyCode) {
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
    case 37: // ArrowLeft
    case 38: // ArrowUp
    case 39: // ArrowRight
    case 40: // ArrowDown
      _handleButtons(keyCode);
      break;
    case 13: // Enter
      _triggerButton();
      break;
    default:
      break;
  }
};
// https://developer.amazon.com/docs/fire-tv/web-app-faq.html
// workaround for capturing Amazon Remote Back button behavior for a web app
window.addEventListener('load', function () {
  window.addEventListener('popstate', function () {
    if (window.history.state !== 'backhandler') {
      window.history.pushState('backhandler', null, null);
      window.location.replace('index.html');
    }
  });
  window.history.pushState('backhandler', null, null);
});

// when player reaches durationchange we wire the UI
container.addEventListener('loadeddata', function () {
  playerButtons[0].element = container.querySelector('.rmp-play-pause');
  playerButtons[0].element.setAttribute('data-button-id', '0');
  document.body.addEventListener('keydown', _onKeyDown);
  _setActiveButton(0);
  currentActiveButton = container.querySelector('.rmp-button-hover');
});

/* needed to avoid double event firing on remote interaction */
/*document.addEventListener('keypress', function (event) {
  event.stopPropagation();
  event.preventDefault();
});*/
