function rotateBarrel(location) {
  let newLocation = location % 6;
  newLocation += 1;
  return newLocation;
}



  function playRussianRoulette() {
  // Generate a random number between 1 and 6
  const randomNumber = Math.floor(Math.random() * 6) + 1;

   //Check if the random number is 1
  if (randomNumber === 1) {
      return "Bang! You lost!"; // Player has lost
  } else {
      return "Click! That Was Close!"; // Player is safe
  }
}


function simulateShot(chamberCount) {
  // Check if there are chambers left
  if (chamberCount > 0) {
      const result = playRussianRoulette();
      console.log(result);

      // Update the chamber count for the next shot
      chamberCount--;



      // Display a message if the game is over
      if (result.includes("Bang")) {
          console.log("Game over. Your Dead!");
          return false; // Indicate that the game is over
      }
  } else {
      console.log("Reload the gun to play again.");
  }

  return true; // Game continues
}

// Set the initial chamber count
let chamberCount = 6;

// Shoot up to 6 shots
// issue is over here
for (let i = 0; i < chamberCount; i++) {
  if (!simulateShot(chamberCount)) {
    // Break out of the loop if the game is over
    break;
  }
}

