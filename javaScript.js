const rock = "ROCK";
const paper = "PAPER";
const scissors = "SCISSORS";
const spock = "SPOCK";

let humanChoice = getHumanChoice();
console.log("-=" + humanChoice + "=-");

let computerChoice = getComputerChoice();
console.log(computerChoice);


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

    let playerChoice = prompt("ROCK, PAPER, SCISSORS - type your choice!");
    return playerChoice;

}