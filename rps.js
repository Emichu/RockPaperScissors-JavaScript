var prompt = require('prompt-sync')();
var array = ["rock", "paper", "scissors", "lizard", "spock"]

console.log("Rules:")
console.log("Scissors cut Paper. Paper covers Rock.")
console.log("Rock crushes Lizard. Lizard poisons Spock.")
console.log("Spock smashes Scissors. Scissors decapitates Lizard.")
console.log("Lizard eats paper. Paper disproves Spock.")
console.log("Spock vaporizes Rock. And as it always has been, Rock crushes scissors")

var answer = prompt("rock, paper, scissors, lizard or spock?")


if(answer === "rock" || answer === "paper" || answer === "scissors" || answer === "lizard" || answer === "spock"){
    console.log("You chose " + answer)
} else {
    console.log("Sorry, didn't recognise your choice")
};

var aiInput = array[Math.floor(Math.random()*array.length)];

if(answer === "rock"){
    if(aiInput === "rock"){
        console.log("Computer also chose rock. It's a DRAW!");
    } else if(aiInput === "paper"){
        console.log("Computer chose paper. Paper covers rock. You LOST!");
    } else if(aiInput === "scissors"){
        console.log("Computer chose scissors. Rock crushes scissors. You WON!");
    } else if(aiInput === "lizard"){
        console.log("Computer chose lizard. Rock crushes the lizard. You WON!");
    } else if(aiInput === "spock"){
        console.log("Computer chose spock. Spock vaporizes rock. You LOST!");
    }
} else if(answer === "paper"){
    if(aiInput === "rock"){
        console.log("Computer chose rock. Paper covers rock. You won!");
    } else if(aiInput === "paper"){
        console.log("Computer also chose paper. It's a draw!");
    } else if(aiInput === "scissors"){
        console.log("Computer chose scissors. Scissors cut paper. You LOST!");
    } else if(aiInput === "lizard"){
        console.log("Computer chose lizard. Lizard eats paper. You LOST!");
    } else if(aiInput === "spock"){
        console.log("Computer chose spock. Paper disproves spock. You WON!");
    }
} else if(answer === "scissors"){
    if(aiInput === "rock"){
        console.log("Computer chose rock. Rock crushes scissors. You LOST!")
    } else if(aiInput === "paper"){
        console.log("Computer chose paper. Scissors cut paper. You WON!")
    } else if(aiInput === "scissors"){
        console.log("Computer also chose scissors. It's a DRAW!")
    } else if(aiInput === "lizard"){
        console.log("Computer chose lizard. Scissors decapitate the lizard. You WON!")
    } else if(aiInput === "spock"){
        console.log("Computer chose spock. Spock smashes scissors. You LOST!")
    }
} else if(answer === "lizard"){
    if(aiInput === "rock"){
        console.log("Computer chose rock. Rock crushes lizard. You LOST!")
    } else if(aiInput === "paper"){
        console.log("Computer chose paper. Lizard eats paper. You WON!")
    } else if(aiInput === "scissors"){
        console.log("Computer chose scissors. Scissors decapitate the lizard. You LOST!")
    } else if(aiInput === "lizard"){
        console.log("Computer also chose lizard. It's a DRAW!")
    } else if(aiInput === "spock"){
        console.log("Computer chose spock. Lizard poisons spock. You WON!")
    }
} else if(answer === "spock"){
    if(aiInput === "rock"){
        console.log("Computer chose rock. Spock vaporizes rock. You WON!")
    } else if(aiInput === "paper"){
        console.log("Computer chose paper. Paper disproves spock. You LOST!")
    } else if(aiInput === "scissors"){
        console.log("Computer chose scissors. Spock crushes the scissors. You WON!")
    } else if(aiInput === "lizard"){
        console.log("Computer chose lizard. Lizard poisons spock. You LOST!")
    } else if(aiInput === "spock"){
        console.log("Computer also chose spock. It's a draw!")
    }
}