
const rpsButtons = document.querySelectorAll(".rpsButton");
const currentRound = document.querySelector(".currentRound");
const mainInfo = document.querySelector(".mainInfo");

let gameround = 0;
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

function clickButton(){
    console.log("you clicked" + this.textContent);
}

function updateRound(){
    gameround++;
    currentRound.textContent = "It's round " + gameround;
}

function playRound(){
    console.log("bottomTEXT");
}

rpsButtons.forEach((button) => {

    button.addEventListener("click", clickButton);
})

//player clicks the button
//game checks what round it is and updates the h3
//game chooses computer output
//game compares that to player output
//screen updates with the result and player/comptuer scores are updated
//h3 prompts the player to choose again with the round number
