// const GAME_WIDTH = 800;
// const GAME_HEIGHT = 600;

let canvas, canvasContext;


function startGame() {
  let framesPerSecond = 30;
  setInterval(function() {
    moveEverything();
    drawEverything();
  }, 1000/framesPerSecond);
  
}

window.onload = function() {
  canvas = document.getElementById('gameCanvas'); // this object holds the HTML canvas dimensions
  canvasContext = canvas.getContext('2d'); // this object lets one draw on or manipulate the canvas
  canvas.style.cursor = 'crosshair';

  initializeInput();
  initializeCar();
  startGame();
}

function moveEverything() {
  car.move();
}

function drawEverything() {
  canvasContext.textAlign = 'center';
  // draw the background
  colorRect(canvasContext, 0, 0, canvas.width, canvas.height, 'black');

  // draw the track
  drawTrack();

  // draw the car
  car.draw();
  // draw score
  // canvasContext.fillStyle = 'white';
  // canvasContext.font = 'bold 24px sans-serif';
  // canvasContext.fillText(player1Score, 100, 100);

}
