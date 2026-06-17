const rock = "ROCK";
const paper = "PAPER";
const scissors = "SCISSORS";
const spock = "SPOCK";

let humanChoice = getHumanChoice();
console.log("-=" + humanChoice + "=-");

let computerChoice = getComputerChoice();
console.log(computerChoice);

let humanScore = 0;
let computerScore = 0;

playRound(humanChoice, computerChoice);


function getComputerChoice(){

    /*Num intentionally assumes values between 0-99, the range can be perfectly
      split into thirds*/
    let num = Math.floor(Math.random() * 100);
    let result;

    if (num < 33) {

        return result = rock;

    } else if(num >= 33 && num < 66){

        return result = paper;

    } else if (num >= 66) {

        return result = scissors;

    } else {

        return result = spock;
    
    }


}

function getHumanChoice(){

    let humanChoice = prompt("ROCK, PAPER, SCISSORS - type your choice!");
    return humanChoice;

}

function playRound(humanChoice, computerChoice){

    let human = humanChoice.toUpperCase();
    let computer = computerChoice.toUpperCase();


    if((human === "ROCK" && computer === "SCISSORS") ||
       (human === "PAPER" && computer === "ROCK") ||
       (human === "SCISSORS" && computer === "PAPER")){

        console.log("You win! " + human + " beats " + computer + ".");
        humanScore += 1;
        console.log("Human score: " + humanScore);
        console.log("Computer score: " + computerScore);


    } else if((human === "SCISSORS" && computer === "ROCK")||
              (human === "ROCK" && computer === "PAPER")||
              (human === "PAPER" && computer === "SCISSORS")){

        console.log("You lose! " + computer + " beats " + human + ".");
        computerScore += 1;
        console.log("Human score: " + humanScore);
        console.log("Computer score: " + computerScore);


    } else {

        console.log("Tie! " + human + " equals " + computer + ".");
        console.log("Human score: " + humanScore);
        console.log("Computer score: " + computerScore);

    }


}