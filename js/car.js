const GROUNDSPEED_DECAY_MULT = 0.94;
const DRIVE_POWER = 0.5;
const REVERSE_POWER = 0.2;
const TURN_RATE = 0.03;
const MIN_TURN_SPEED = 0.4;

let car;

class Car {
  constructor() {
    const startIndex = trackGrid.findIndex(val => val == TRACK.PLAYER_START);
    trackGrid[startIndex] = TRACK.ROAD; // replace start position with road in the tilemap
    const tileRow = Math.floor(startIndex/TRACK_COLS);
    const tileCol = startIndex % TRACK_COLS;
    this.width = 10;
    this.radius = this.width / 2;
    this.x = tileCol * TRACK_WIDTH + 0.5 * TRACK_WIDTH;
    this.y = tileRow * TRACK_HEIGHT + 0.5 * TRACK_HEIGHT;
    this.speed = 0;
    this.angle = -0.5 * Math.PI;
    
    document.getElementById('debugText').innerHTML = 
    `Car starting at tile: (${tileCol},${tileRow}) \nPixel coords: (${this.x}, ${this.y})`;
  }

  draw() {
      drawBmp(canvasContext, carPic, this.x, this.y, this.angle)
  }

  move() {
    if (Math.abs(this.speed) >= MIN_TURN_SPEED) {
      if (keyHeld.turnLeft) {
        this.angle -= TURN_RATE * Math.PI;
      }
      if (keyHeld.turnRight) {
        this.angle += TURN_RATE * Math.PI;
      }
    }

    if (keyHeld.gas) {
      this.speed += DRIVE_POWER;
    }
    if (keyHeld.reverse) {
      this.speed -= REVERSE_POWER;
    }

    const nextX = this.x + Math.cos(this.angle) * this.speed;
    const nextY = this.y + Math.sin(this.angle) * this.speed;

    if (checkForTrackAtPixelCoord(nextX, nextY)) {
      this.x = nextX;
      this.y = nextY;
    } else {
      this.speed *= -0.5;
    }

    this.speed *= GROUNDSPEED_DECAY_MULT;
  }
}

function carReset() {
  car = new Car;
}

function initializeCar() {
  carReset();
}
