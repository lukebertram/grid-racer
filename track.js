// Track-related CONSTANTS
const TRACK_WIDTH = 40;
const TRACK_HEIGHT = 40;
const TRACK_GAP = 1;
const TRACK_COLS = 20;
const TRACK_ROWS = 15;

const TRACK = {
  ROAD: 0,
  WALL: 1,
  PLAYER_START: 2,
};
const TRACK_ONE = [	
  1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,
  1,	1,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	1,
  1,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,
  1,	0,	0,	0,	0,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	0,	0,	0,	1,
  1,	0,	0,	0,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	0,	0,	1,
  1,	0,	0,	1,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	1,	0,	0,	1,
  1,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	1,
  1,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	1,
  1,	0,	0,	1,	0,	0,	0,	1,	1,	1,	1,	1,	0,	0,	0,	0,	1,	0,	0,	1,
  1,	0,	0,	1,	0,	0,	1,	0,	0,	0,	1,	0,	1,	0,	0,	0,	1,	0,	0,	1,
  1,	0,	2,	1,	0,	0,	1,	1,	0,	0,	0,	0,	0,	1,	0,	0,	1,	0,	0,	1,
  1,	1,	1,	1,	0,	0,	1,	1,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	1,
  1,	0,	0,	0,	0,	0,	1,	1,	1,	0,	0,	0,	1,	1,	0,	0,	0,	0,	0,	1,
  1,	0,	0,	0,	0,	0,	1,	1,	1,	1,	1,	1,	1,	1,	1,	0,	0,	0,	1,	1,
  1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1, ];

// Variable to hold the game's current track
let trackGrid = TRACK_ONE;

function trackTileToIndex(col, row) {
  return (col + TRACK_COLS * row); // returns a given tile's index within the trackGrid[]
}

function isWallAtTileCoord(trackCol, trackRow) {
  let trackIndex = trackCol + TRACK_COLS * trackRow;
  return (trackGrid[trackIndex] == TRACK.WALL);
}

function checkForTrackAtPixelCoord(pixelX, pixelY) {
  const tileCol = Math.floor(pixelX / TRACK_WIDTH);
  const tileRow = Math.floor(pixelY / TRACK_HEIGHT);

  if(tileCol < 0 || tileCol >= TRACK_COLS || tileRow < 0 || tileRow >= TRACK_ROWS) {
    return false; // avoid accessing non-existent index in track array
  }

  const trackIndex = trackTileToIndex(tileCol, tileRow);

  return (trackGrid[trackIndex] == TRACK.ROAD);
}

function drawTrack() {
  for (let col = 0; col < TRACK_COLS; col++) { // For each column...
    for (let row = 0; row < TRACK_ROWS; row++) { // for each row within that column...
      if (isWallAtTileCoord(col, row)) {

        const trackX = col * TRACK_WIDTH;
        const trackY = row * TRACK_HEIGHT;
        // draw a blue rectangle with its upper-left corner at that (x,y) coord
        colorRect(canvasContext, trackX + TRACK_GAP, trackY + TRACK_GAP, TRACK_WIDTH - TRACK_GAP, TRACK_HEIGHT - TRACK_GAP, 'blue');
      }
    }
  }
}

