let carPic = document.createElement("img");
let trackPicRoad = document.createElement("img");
let trackPicWall = document.createElement("img");

const images = [
  {varName: carPic, fileName: 'player1.png'}, 
  {varName: trackPicRoad, fileName: 'track_road.png'},
  {varName: trackPicWall, fileName: 'track_wall.png'},
];
let numberOfImagesToLoad = images.length;

function beginLoadingImage(imgVar, fileName) {
  imgVar.onload = countLoadedImageAndLaunchIfReady;
  imgVar.src = `images/${fileName}`;
}

function countLoadedImageAndLaunchIfReady() {
  numberOfImagesToLoad--;
  if (numberOfImagesToLoad === 0) {
    startGame();
  }
}

function loadImages() {
  images.forEach(image => beginLoadingImage(image.varName, image.fileName))
}
