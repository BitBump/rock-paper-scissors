const rock = "ROCK";
const paper = "PAPER";
const scissors = "SCISSORS";
const spock = "SPOCK";

playGame();

function randomNumber(){

    /*Range 0-99 can be perfectly split into thirds*/
    return Math.floor(Math.random() * 100);

}

function toUpper(string){

    return string.toUpperCase();

}

function getComputerChoice(){

    
    let num = randomNumber();
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



function playGame(){

    let humanScore = 0;
    let computerScore = 0;
    let round = 0;

    function playRound(humanChoice, computerChoice){

    let human = toUpper(humanChoice);
    let computer = toUpper(computerChoice);


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


    while (round < 5){

        let humanChoice = getHumanChoice();
        console.log("-=" + humanChoice + "=-");

        let computerChoice = getComputerChoice();
        console.log(computerChoice);

        playRound(humanChoice, computerChoice);
        round++;

        console.log("Round number: " + round);
    }

    if(humanScore > computerScore){

        console.log("Final result: Player wins!")

    } else if(humanScore < computerScore){

        console.log("Final result: Computer wins!");

    } else {

        console.log ("Final result: Tie!");

    }

}