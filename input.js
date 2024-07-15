const KEY_UP_ARROW = 38;
const KEY_DOWN_ARROW = 40;
const KEY_LEFT_ARROW = 37;
const KEY_RIGHT_ARROW = 39;


const keyHeld = {
  gas: false,
  reverse: false,
  turnLeft: false,
  turnRight: false,
};

function setKeyHoldState(keyCode, isHeld) {
  switch (keyCode) {

    case KEY_UP_ARROW:
      keyHeld.gas = isHeld;
      break;

    case KEY_DOWN_ARROW:
      keyHeld.reverse = isHeld;
      break;

    case KEY_LEFT_ARROW:
      keyHeld.turnLeft = isHeld;
      break;

    case KEY_RIGHT_ARROW:
      keyHeld.turnRight = isHeld;
      break;
  
    default:
      break;
  }
}

function handleKeydown(e) {
  document.getElementById('debugText').innerHTML = `Keydown Code: ${e.keyCode}`;
  setKeyHoldState(e.keyCode, true);
  e.preventDefault();
}

function handleKeyup(e) {
  // document.getElementById('debugText').innerHTML = `Keyup Code: ${e.keyCode}`;
  setKeyHoldState(e.keyCode, false);
}

function initializeInput() {
  document.addEventListener("keydown", handleKeydown);
  document.addEventListener("keyup", handleKeyup);
}
