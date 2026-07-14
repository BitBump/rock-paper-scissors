
//Constants
const rock = "ROCK";
const paper = "PAPER";
const spock = "SPOCK";
const scissors = "SCISSORS";

//HTML elements refs
const choicesDiv = document.getElementById("#choices");
const resultsDiv = document.getElementById("#results");

//Score count
let humanScore = 0;
let computerScore = 0;

//-=FUNCTIONS=-###########################################

function getRandomNumber(){

    /*Range 0-99 can be perfectly split into thirds*/
    return Math.floor(Math.random() * 100);

}

function toUpper(string){

    return string.toUpperCase();

}

function getComputerChoice(){

    
    let num = getRandomNumber();
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

    let human = toUpper(humanChoice);
    resultsDiv.innerHTML += ("HumanChoice: " + human + "<br>");
    let computer = toUpper(computerChoice);


    if((human === "ROCK" && computer === "SCISSORS") ||
       (human === "PAPER" && computer === "ROCK") ||
       (human === "SCISSORS" && computer === "PAPER")){

        resultsDiv.innerHTML += ("<br>" + "You win! " + human + " beats " + computer + "." + "<br>");
        humanScore += 1;
        
        resultsDiv.innerHTML += ("Human score: " + humanScore + "<br>");
        resultsDiv.innerHTML += ("Computer score: " + computerScore + "<br>");


    } else if((human === "SCISSORS" && computer === "ROCK")||
              (human === "ROCK" && computer === "PAPER")||
              (human === "PAPER" && computer === "SCISSORS")){

        resultsDiv.innerHTML += ("<br>" + "You lose! " + computer + " beats " + human + "." + "<br>")
        computerScore += 1;

        resultsDiv.innerHTML += ("Human score: " + humanScore + "<br>");
        resultsDiv.innerHTML += ("Computer score: " + computerScore + "<br>");


    } else {

        resultsDiv.innerHTML += ("<br>" + "Tie! " + human + " equals " + computer + "." + "<br>");
        resultsDiv.innerHTML += ("Human score: " + humanScore + "<br>");
        resultsDiv.innerHTML += ("Computer score: " + computerScore + "<br>");

    }

}

function resetScore(){

    humanScore = 0;
    computerScore = 0;

}
    
function checkVictory(humanScore, computerScore){

    if(humanScore === 5){
        
        resultsDiv.innerHTML += ("<br>" + "Final result: Player wins!");
        
        resetScore();} 
    else if(computerScore === 5){
        
        resultsDiv.innerHTML += ("<br>" + "Final result: Computer wins!");
        
        resetScore();}   

}

//-=LISTENERS=-###########################################

choicesDiv.addEventListener("click", (e) => {

    let target = e.target;
    let computerChoice = "";

    computerChoice = getComputerChoice();
    resultsDiv.innerHTML = "ComputerChoice: " + computerChoice + "<br>";
    playRound(target.textContent, computerChoice); 
    checkVictory(humanScore, computerScore);
    
});



