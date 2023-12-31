//create an array with elective buttons
const buttonsArray = Array.from(document.querySelectorAll(".btn-big"));
buttonsArray.forEach((button) => {
});

//pick random button of the elective for the computer to play
function computerClick() {
    let random = Math.floor(Math.random() * buttonsArray.length);
    return buttonsArray[random].getAttribute("data-type");
}

//compute the result of user and comp input
const computeResult = (userInput, computerInput) => {
    for (const func of functionsArray) {
        const result = func(computerInput, userInput);
        if (result) {
            return result;
        }
    }
};



// Update scores and check condition
function updateScoreBoard() {
    const userScoreEl = document.querySelectorAll(".scores");

    let totalScore = scoresCounter[0] + scoresCounter[1] + scoresCounter[2];

    // Increment score 
    for (let i = 0; i < userScoreEl.length; i++) {
        const element = userScoreEl[i].id;

        if (element == "correct") {
            userScoreEl[i].textContent = scoresCounter[0];
        } else if (element == "incorrect") {
            userScoreEl[i].textContent = scoresCounter[1];
        } else if (element == "draw") {
            userScoreEl[i].textContent = scoresCounter[2];
        }
    }

    // Check condition 
    if (totalScore >= 6) {
        // reset button
        resetButton.click();
    }
}

// Get all elements with class "btn-big" and the "btn-play" button
const bigButtons = document.querySelectorAll(".btn-big");
const playButton = document.querySelector(".btn-play");
const hiddenDiv = document.getElementById("result");

let lastClickedDataType = null;

// store the scores
const scoresCounter = [0, 0, 0];

// Add event listeners to the "btn-big" buttons
bigButtons.forEach((bigButton) => {
    bigButton.addEventListener("click", function () {
        // Get data-type attribute of the clicked "btn-big" button
        const dataType = bigButton.getAttribute("data-type");
        if (dataType) {
            // Save the data-type
            lastClickedDataType = dataType;
        }
    });
});

// Add an event listener to the "btn-play"
playButton.addEventListener("click", function () {
    if (lastClickedDataType) {
        // Save the last clicked data-type to local storage
        localStorage.setItem("savedDataType", lastClickedDataType);

        // Display the hidden div
        hiddenDiv.style.display = "block";

        const userInput = lastClickedDataType;
        const computerInput = computerClick();

        const outcome = computeResult(userInput, computerInput);
        updateScoreBoard();

        // Get the data from local storage and display it inside the hidden div
        const savedDataType = localStorage.getItem("savedDataType");
        hiddenDiv.textContent = `User click: ${savedDataType} , Computer click: ${computerInput}. 
        \n${outcome}`;
    }
});

//create outcome for win option
function win(compClick, userClick) {
    let outcome = false;

    if (userClick == "spock" && compClick == "scissors") {
        outcome = "You win! Spock smashes scissors.";
    } else if (userClick == "spock" && compClick == "rock") {
        outcome = "You win! Spock evaporates rock.";
    } else if (userClick == "scissors" && compClick == "paper") {
        outcome = "You win! Scissors cuts paper.";
    } else if (userClick == "scissors" && compClick == "lizard") {
        outcome = "You win! Scissors decapitates lizard.";
    } else if (userClick == "paper" && compClick == "rock") {
        outcome = "You win! Paper covers rock.";
    } else if (userClick == "paper" && compClick == "spock") {
        outcome = "You win! Paper disproves spock.";
    } else if (userClick == "rock" && compClick == "lizard") {
        outcome = "You win! Rock crushes lizard.";
    } else if (userClick == "rock" && compClick == "scissors") {
        outcome = "You win! Rock crushes scissors.";
    } else if (userClick == "lizard" && compClick == "spock") {
        outcome = "You win! Lizard poisons spock.";
    } else if (userClick == "lizard" && compClick == "paper") {
        outcome = "You win! Lizard eats paper.";
    }

    if (outcome) scoresCounter[0] += 1;

    return outcome;
}

function loose(compClick, userClick) {
    let outcome = false;

    if (compClick == "spock" && userClick == "scissors") {
        outcome = "You loose! Spock smashes scissors.";
    } else if (compClick == "spock" && userClick == "rock") {
        outcome = "You loose! Spock evaporates rock.";
    } else if (compClick == "scissors" && userClick == "paper") {
        outcome = "You loose! Scissors cuts paper.";
    } else if (compClick == "scissors" && userClick == "lizard") {
        outcome = "You loose! Scissors decapitates lizard.";
    } else if (compClick == "paper" && userClick == "rock") {
        outcome = "You loose! Paper covers rock.";
    } else if (compClick == "paper" && userClick == "spock") {
        outcome = "You loose! Paper disproves spock.";
    } else if (compClick == "rock" && userClick == "lizard") {
        outcome = "You loose! Rock crushes lizard.";
    } else if (compClick == "rock" && userClick == "scissors") {
        outcome = "You loose! Rock crushes scissors.";
    } else if (compClick == "lizard" && userClick == "spock") {
        outcome = "You loose! Lizard poisons spock.";
    } else if (compClick == "lizard" && userClick == "paper") {
        outcome = "You loose! Lizard eats paper.";
    }

    if (outcome) scoresCounter[1] += 1;

    return outcome;
}

//Compare arguments for tied option
function draw(compClick, userClick) {
    if (compClick == userClick) {
        scoresCounter[2] += 1;

        return "It's a tie";
    } else {
        return false;
    }
}

//array of all outcomes
const functionsArray = [win, loose, draw];

// popup
const popupButton = document.getElementById("popupButton");
const popupContent = document.getElementById("popupContent");

let isOpen = false;

popupButton.addEventListener("click", () => {
    if (isOpen) {
        popupContent.style.display = "none";
    } else {
        popupContent.style.display = "block";
    }
    isOpen = !isOpen;
});

//reset
const resetButton = document.getElementById("resetButton");

function resetGame() {
    scoresCounter[0] = 0;
    scoresCounter[1] = 0;
    scoresCounter[2] = 0;

    updateScoreBoard();
    hiddenDiv.style.display = 'none';
}

// Add an event listener to the resetButton
resetButton.addEventListener("click", resetGame);


