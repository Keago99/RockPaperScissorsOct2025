
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    randoChoice = Math.floor(Math.random() * 3) + 1;

    switch(randoChoice){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            return "this isn't working";
    }
}

function displayScore(){
    console.log(`Current Scores:\nPlayer: ${playerScore}\nComputer: ${computerScore}`);
}

function getHumanChoice(){
    let choice = prompt("Please choose rock, paper or scissors").toLowerCase();
    while(choice !== "rock" && choice !== "paper" && choice !=="scissors") {
        alert("incorrect choice, please re-input");
        choice = prompt("Please choose rock, paper or scissors").toLowerCase();
    }
    return choice;
}


function playRound(humanChoice, computerChoice){
    let humanWinner = null;
    if (humanChoice === "paper"){
        switch(computerChoice){
            case "rock":
                humanWinner = true;
                break;
            case "scissors":
                humanWinner = false;
        }
    }
    else if (humanChoice === "rock"){
        switch (computerChoice){
            case "paper":
                humanWinner = false;
                break;
            case "scissors":
                humanWinner = true;
                break;
        }
    }
    else if (humanChoice === "scissors"){
        switch (computerChoice){
            case "paper":
                humanWinner = true;
                break;
            case "rock":
                humanWinner = false;
                break;
        }
    }
    if (humanWinner === true){
        console.log(`Player chose ${humanChoice}, computer chose ${computerChoice}, player wins!`);
        playerScore++;
    }
    else if (humanWinner === false){
        console.log(`Player chose ${humanChoice}, computer chose ${computerChoice}, computer wins!`);
        computerScore++;
    }
    else{
        console.log (`Player chose ${humanChoice}, computer chose ${computerChoice}, it's a draw!`);
    }
    displayScore();
}

function playGame(){
    console.log("We will play 5 games!")
    let gameHumanChoice = getHumanChoice();
    let gameComputerChoice = getComputerChoice();

    for (let i = 0; i < 5; i++){
        playRound(gameHumanChoice, gameComputerChoice);
        gameHumanChoice = getHumanChoice();
        gameComputerChoice = getComputerChoice();
    }
}

playGame();
