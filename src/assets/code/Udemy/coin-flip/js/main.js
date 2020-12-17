let headsCount = 0;
let tailsCount = 0;

let flipButton = document.getElementById('flip-button');
let textChange = document.getElementById('text-change');
let coinElement = document.getElementById('coin-element');
let headsCounter = document.getElementById('heads-counter');
let tailsCounter = document.getElementById('tails-counter');

// Upon click on the flip button element, execute the returnResult function 
flipButton.addEventListener('click', returnResult);
flipButton.addEventListener('click', changeColorOnClick);

// Function that creates the result
function returnResult() {
    // Generate a random number between 0 and 1
    let randomInt = Math.floor(Math.random() * Math.floor(2));
    // Changes the text from 'Flip the coin' to 'You got...'
    textChange.innerText = 'Your result is...';
    // Case 1: If the random number is zero, then Heads is choosen
    if (randomInt == 0) {
        // Add one to heads count variable
        headsCount++;
        // Execute the coinFlipAnimation function
        coinFlipAnimation();
        // Execute the textFadeInAnimation function
        textFadeInAnimation();
        // Creates the text 'Heads' inside the coin element
        coinElement.innerText = 'Heads';
        // Delays the count display, so it matches with textFadeInAnimation
        setTimeout(displayHeadsCounter, 2900);
    } 
    // Case 2: If the random number is one, then Tails is choosen
    else {
        // Add one to tails count variable
        tailsCount++;
        // Execute the coinFlipAnimation function
        coinFlipAnimation();
        // Execute the textFadeInAnimation function
        textFadeInAnimation();
        // Creates the text 'Tails' inside the coin element
        coinElement.innerText = 'Tails';
        // Delays the count display, so it matches with textFadeInAnimation
        setTimeout(displayTailsCounter, 2900);
    }
}

function displayHeadsCounter() {
    // Displays and updates the current count number of headsCount
    headsCounter.innerText = 'Heads: ' + headsCount;
}

function displayTailsCounter() {
    // Displays and updates the current count number of tailsCount
    tailsCounter.innerText = 'Tails: ' + tailsCount;
}

// Function that creates and deletes the flipping effect animation
function coinFlipAnimation() {
    // Adds the flip animation class to the coin element
    coinElement.classList.add('flipAnimation');
    // Removes the flip animation class after 3sec
    // This will allow the animation to get used again after 3 seconds
    setTimeout(removeClass, 3000);
    function removeClass() {
        coinElement.classList.remove('flipAnimation');
    }
}

// Function that creates and deletes the text fade in animation
function textFadeInAnimation() {
    // Adds the fade-in animation class to the text inside the coin element
    coinElement.classList.add('fadeInAnimation');
    // Removes the fade-in animation class after 3sec
    // This will allow the animation to get used again after 3 seconds
    setTimeout(removeClass, 3000);
    function removeClass() {
        coinElement.classList.remove('fadeInAnimation');
    }
}

// Function that creates a small animation when the button is clicked
function changeColorOnClick() {
    flipButton.classList.add('clickAnimation');
    setTimeout(removeClass, 400);
    function removeClass() {
        flipButton.classList.remove('clickAnimation');
    }
}
