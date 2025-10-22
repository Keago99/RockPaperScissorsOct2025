


function getComputerInput(){
    randoChoice = Math.floor(Math.random() * 2) + 1;

    switch(randoChoice){
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
        default:
            return "this isn't working";
    }
}

function getHumanChoice(){
    let choice = prompt("Please choose rock, paper or scissors").toLowerCase();
    while(choice !== "rock" && choice !== "paper" && choice !=="scissors") {
        alert("incorrect choice, please re-input");
        choice = prompt("Please choose rock, paper or scissors").toLowerCase();
    }
    console.log("correct choice noted");
}

getHumanChoice();


