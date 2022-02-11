function computerPlay() {
    let choices = ['ROCK', 'PAPER', 'SCISSORS'];
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playerPlay() {
    let choice = prompt("Enter the choice from ROCK | PAPER | SCISSORS").toUpperCase();
    if (choice === 'ROCK' || choice === 'PAPER' || choice === 'SCISSORS') {
        selected = choice;
    }
    else if (!choice) {
        playerPlay();
    }
    else {
        alert("Enter from choice ROCK | PAPER | SCISSORS");
        playerPlay();
    }
    return selected;
}


function consoleMsg(playerSelection, computerSelection) {
    console.log('Computer Selected: ' + computerSelection);
    console.log('Player Selected: ' + playerSelection);
}


function playRound(ps, cs) {
    // here ps = playerSElection & cs = computer Selection
    if (ps === cs) {
        consoleMsg(ps, cs);
        return "It's a TIE!";
    }
    else if (ps === 'ROCK' && cs === "PAPER") {
        consoleMsg(ps, cs);
        return "Player Loose | Computer Win";
    }
    else if (ps === "ROCK" && cs === "SCISSORS") {
        consoleMsg(ps, cs);
        return "Player Win | Computer Loose";
    }
    else if (ps === "PAPER" && cs === "ROCK") {
        consoleMsg(ps, cs);
        return "Player Win | Computer Loose";
    }
    else if (ps === "PAPER" && cs === "SCISSORS") {
        consoleMsg(ps, cs);
        return "Player Loose | Computer Win";
    }
    else if (ps === "SCISSORS" && cs === "ROCK") {
        consoleMsg(ps, cs);
        return "Player Loose | Computer Win";
    }
    else if (ps === "SCISSORS" && cs === "PAPER") {
        consoleMsg(ps, cs);
        return "Player Win | Computer Loose";
    }
}


for (let i = 0; i < 5; i++) {
    console.log(playRound(playerPlay(), computerPlay()));
}
console.log("Winner is .....")