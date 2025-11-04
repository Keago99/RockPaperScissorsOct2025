
const rpsButtons = document.querySelectorAll(".rpsButton");
const currentRound = document.querySelector(".currentRound");
const mainInfo = document.querySelector(".mainInfo");
const playerScoreElement = document.querySelector("#playerScoreElement");
const computerScoreElement = document.querySelector("#computerScoreElement");
const roundMessage = document.querySelector("#roundMessage");

let gameround = 0;
let playerScore = 0;
let computerScore = 0;

function ComputerChoice(){
    randoChoice = Math.floor(Math.random() * 3) + 1;

    switch(randoChoice){
        case 1:
            return "Rock!";
        case 2:
            return "Paper!";
        case 3:
            return "Scissors!";
        default:
            return "this isn't working";
    }
}

function updateInformation(){
    gameround++;
    roundMessage.textContent = `The current round is ${gameround}`;
    computerScoreElement.textContent = computerScore;
    playerScoreElement.textContent = playerScore;
}

function playRound(humanChoice, computerChoice){
    let humanWinner = null;

    if(playerScore === 0 && computerScore === 0){
        mainInfo.innerText = "";
    }

    if (humanChoice === "Paper!"){
        switch(computerChoice){
            case "Rock!":
                humanWinner = true;
                break;
            case "Scissors!":
                humanWinner = false;
        }
    }
    else if (humanChoice === "Rock!"){
        switch (computerChoice){
            case "Paper!":
                humanWinner = false;
                break;
            case "Scissors!":
                humanWinner = true;
                break;
        }
    }
    else if (humanChoice === "Scissors!"){
        switch (computerChoice){
            case "Paper!":
                humanWinner = true;
                break;
            case "Rock!":
                humanWinner = false;
                break;
        }
    }
    if (humanWinner === true){
        mainInfo.innerText +=(`Player chose ${humanChoice}, computer chose ${computerChoice}, player wins! \n`);
        playerScore++;
    }
    else if (humanWinner === false){
        mainInfo.innerText +=(`Player chose ${humanChoice}, computer chose ${computerChoice}, computer wins! \n`);
        computerScore++;
    }
    else{
        mainInfo.innerText += (`Player chose ${humanChoice}, computer chose ${computerChoice}, it's a draw! \n`);
    }
    updateInformation();
}

rpsButtons.forEach(button => {
    button.addEventListener('click', function() {
        const playerChoice = this.textContent.trim();
        const computerChoice = ComputerChoice();
        console.log(playerChoice);
        playRound(playerChoice, computerChoice);
    });
});

//player clicks the button
//game checks what round it is and updates the h3
//game chooses computer output
//game compares that to player output
//screen updates with the result and player/comptuer scores are updated
//h3 prompts the player to choose again with the round number
