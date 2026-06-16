const rock = "ROCK";
const paper = "PAPER";
const scissors = "SCISSORS";

getComputerChoice();

function getComputerChoice(){

    /*Num intentionally assumes values between 0-99, the range can be perfectly
      split into thirds*/
    let num = Math.floor(Math.random() * 100);
    console.log(num);

    if (num < 33) {

        console.log(rock);

    } else if(num >= 33 && num < 66){

        console.log(paper);

    } else if (num >= 66) {

        console.log(scissors);

    } else {
        
        console.log("SPOCK");
    
    }


}