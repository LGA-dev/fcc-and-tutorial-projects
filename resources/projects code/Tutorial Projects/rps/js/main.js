// Global variables
let playerScoreCounter = 0;
let cpuScoreCounter= 0;
let playerScore = document.getElementById('player-score');
let cpuScore = document.getElementById('cpu-score');

const rockChoice = document.getElementById('rock');
const paperChoice = document.getElementById('paper');
const scissorsChoice = document.getElementById('scissors');
const result = document.getElementById('results');
const imageBox = document.getElementsByClassName('.image_box');


// CPU makes a random choice
function generateCpuChoice() {
  let choicesOptions = ['Rock', 'Paper', 'Scissors'];
  let cpuChoice = choicesOptions[Math.floor(Math.random() * choicesOptions.length)];
  return cpuChoice;
}


// Player button choices
// Passes an argument to displayWinner function, based on what option was clicked
function grabPlayerChoice() {
  rockChoice.addEventListener('click', function() {
    displayWinner('Rock');
    clickHandler(rockChoice);
  });

  paperChoice.addEventListener('click', function() {
    displayWinner('Paper');
    clickHandler(paperChoice);
  });

  scissorsChoice.addEventListener('click', function() {
    displayWinner('Scissors');
    clickHandler(scissorsChoice);
  });
}

grabPlayerChoice();


// Function that compares player and cpu choices and then displays a winner
function displayWinner(playerChoice) {
  // Generate a random choice and store it on the variable
  let cpuChoice = generateCpuChoice();

  // Tie results
  if (playerChoice == 'Rock' && cpuChoice == 'Rock') {
    result.innerHTML =
      'Player ' + playerChoice + '<br> ties against' + '<br> CPU ' + cpuChoice;
  } else if (playerChoice == 'Paper' && cpuChoice == 'Paper') {
    result.innerHTML =
      'Player ' + playerChoice + '<br> ties against' + '<br> CPU ' + cpuChoice;
  } else if (playerChoice == 'Scissors' && cpuChoice == 'Scissors') {
    result.innerHTML =
      'Player ' + playerChoice + '<br> ties against' + '<br> CPU ' + cpuChoice;
  }

  // Player win results
  if (playerChoice == 'Rock' && cpuChoice == 'Scissors') {
    result.innerHTML =
      'Player ' + playerChoice + '<br> wins against' + '<br> CPU ' + cpuChoice;
    playerScoreCounter++;
    playerScore.innerHTML = 'Player score: ' + playerScoreCounter;
  } else if (playerChoice == 'Paper' && cpuChoice == 'Rock') {
    result.innerHTML =
      'Player ' + playerChoice + '<br> wins against' + '<br> CPU ' + cpuChoice;
    playerScoreCounter++;
    playerScore.innerHTML = 'Player score: ' + playerScoreCounter;
  } else if (playerChoice == 'Scissors' && cpuChoice == 'Paper') {
    result.innerHTML =
      'Player ' + playerChoice + '<br> wins against' + '<br> CPU ' + cpuChoice;
    playerScoreCounter++;
    playerScore.innerHTML = 'Player score: ' + playerScoreCounter;
  }

  // CPU win results
  if (playerChoice == 'Rock' && cpuChoice == 'Paper') {
    result.innerHTML =
      'Player ' + playerChoice + '<br> loses against' + '<br> CPU ' + cpuChoice;
    cpuScoreCounter++;
    cpuScore.innerHTML = 'CPU score: ' + cpuScoreCounter;
  } else if (playerChoice == 'Paper' && cpuChoice == 'Scissors') {
    result.innerHTML =
      'Player ' + playerChoice + '<br> loses against' + '<br> CPU ' + cpuChoice;
    cpuScoreCounter++;
    cpuScore.innerHTML = 'CPU score: ' + cpuScoreCounter;
  } else if (playerChoice == 'Scissors' && cpuChoice == 'Rock') {
    result.innerHTML =
      'Player ' + playerChoice + '<br> loses against' + '<br> CPU ' + cpuChoice;
    cpuScoreCounter++;
    cpuScore.innerHTML = 'CPU score: ' + cpuScoreCounter;
  }
}

displayWinner();


function clickHandler(clickedButton) {
  clickedButton.classList.add('clickAnimation');
  setTimeout(removeClass, 400);
    function removeClass() {
    clickedButton.classList.remove('clickAnimation');
    }
  console.log(clickedButton);
}
