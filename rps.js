var prompt = require('prompt-sync')();

var answer = prompt("rock, paper, or scissors?")


if(answer === "rock" || answer === "paper" || answer === "scissors"){
    console.log("You chose " + answer)
} else {
    console.log("Sorry, didn't recognise your choice")
}