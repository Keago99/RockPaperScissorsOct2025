


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


console.log(getComputerInput());
console.log(getComputerInput());
console.log(getComputerInput());
console.log(getComputerInput());
console.log(getComputerInput());
