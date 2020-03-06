
// handle requests from TV remote
// fire tv remote automatically focus <a> tag
var _onKeyDown = function (e) {
  var keyCode = e.keyCode;
  window.console.log('Key code called : ' + keyCode);
};

// when player is ready we wire the UI
document.addEventListener('keydown', _onKeyDown);

// user agent info
var viewportSize = document.getElementById('viewportSize');
var innerWidth = window.innerWidth;
var innerHeight = window.innerHeight;
viewportSize.innerHTML = 'width: ' + innerWidth + ' - height: ' + innerHeight;
