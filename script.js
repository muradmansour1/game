// audio for my game
const noShotSound = new Audio("assets/no-shot.mp3")
const gunshotSound = new Audio("./assets/gunshot.mp3");
const reloadSound = new Audio("assets/clean-revolver-reload-6889.mp3");


//game state
let bullet = getRandomNumber(1, 6); // random number 1-6
let player = getRandomNumber(1, 6); // random number 1-6
let CURRENT_PLAYER = 'blankOne'

//function to generate a random number
function getRandomNumber(min, max) {
    // returns a random number between min and max (inclusive)
    const randomNumber = Math.floor(Math.random() * max) + min;
    return randomNumber;
}
//function to pull the trigger
function pullTrigger() {
    const resultElement = document.getElementById("result");
    const restartButton = document.getElementById("restartButton");
    const gunImage = document.getElementById("gunImage");

    if (player === bullet) {
        resultElement.textContent = "Bang! You lost! Game over.";
        restartButton.style.display = "block";
        gunImage.classList.toggle("flipped");
        // Play the gunshot sound
        gunshotSound.play();
    } else {
        player = rotateBarrel(player);
        resultElement.textContent = "Click! You survived!";
        // Toggle the 'flipped' class
        gunImage.classList.toggle("flipped");
        noShotSound.play();
    }
}

//function to restart the game
function restartGame() {
    const resultElement = document.getElementById("result");
    const restartButton = document.getElementById("restartButton");
    const gunImage = document.getElementById("gunImage");
    reloadSound.play()
    
    bullet = getRandomNumber(1, 6);
    player = getRandomNumber(1, 6);

    resultElement.textContent = "";
    restartButton.style.display = "none";
    // Remove the 'flipped' class to reset the gun image
    gunImage.classList.remove("flipped");
    reloadSound.play();
}

//function to make the barrel rotate
function rotateBarrel(location) {
    let newLocation = location % 6;
    newLocation += 1;
    return newLocation;
}

function blankOne(){

}
//function to show the gallery
function showGallery(event){
  CURRENT_PLAYER=event.target.id
let gallery = document.getElementsByClassName("gallery")[0]
gallery.classList.toggle("hidden")
}

//function to change the picture
function changePic(event){
  let pic = event.target.src
  console.log(pic);
  document.getElementById(CURRENT_PLAYER).src = pic;
  document.getElementsByClassName('gallery')[0].classList.add('hidden')
}

//event listeners
document.getElementById("triggerButton").addEventListener("click", pullTrigger);
document.getElementById("restartButton").addEventListener("click", function(){
console.log("restart")
restartGame()
});
document.getElementById("blankOne").addEventListener("click", showGallery )
document.getElementById("blankTwo").addEventListener("click", showGallery)
document.getElementsByClassName("gallery")[0].addEventListener("click", changePic)
