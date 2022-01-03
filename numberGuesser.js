let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


const generateTarget = () => { // This function will be called at the beginning of every round to generate a random integer from 0 to 9.
  return Math.floor(Math.random() * 10);
}
const compareGuesses = (humanGuess,computerGuess,targetNumber) => { // Function will be called each round to determine which guess is closest to the target number. Returns TRUE if player wins. FALSE if computer wins.
   const humanGuessDistance = Math.abs(humanGuess - targetNumber);
   const computerGuessDistance = Math.abs(computerGuess - targetNumber)
  if (humanGuess === targetNumber){
    if (computerGuess === targetNumber){
      return true;
    }
  }
  if (humanGuess === computerGuess){
    return true;
  }
  if (humanGuessDistance < computerGuessDistance){
    return true;
  }
  else
    return false;
}
const updateScore = (winnerScore) => { // Function will be used to correctly increase the winner's score after each round.
  if (winnerScore === 'human'){
    humanScore += 1;
  }
  if (winnerScore === 'computer'){
    computerScore += 1;
  }
}
const advanceRound = () => { // Function will be used to update the round number after each round.
  currentRoundNumber += 1;
}