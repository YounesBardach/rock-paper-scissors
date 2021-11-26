function computerPlay() {
    let randomChoice = Math.floor(Math.random() * 3);
    switch (randomChoice) {
        case 0:
            return computerChoice = "rock"
        case 1:
            return computerChoice = "paper"
        case 2:
            return computerChoice = "scissors"
    }
}

function playerPlay() {
    switch (playerImput) {
        case "paper":
            return PlayerChoice = "paper"
        case "rock":
            return PlayerChoice = "rock"
        case "scissors":
            return PlayerChoice = "scissors"
        case "":
        case "null":
        default:
            return PlayerChoice = "to not play"
    }
}

let PlayerChoice
let computerChoice
let playerImput;
let draw = "draw";
let playerScore = 0;
let computerScore = 0;

function singleRound(a, b) {
    if (a === b) { return draw }
    if ((a === "scissors" && b === "paper") || (a === "paper" && b === "rock") || (a === "rock" && b === "scissors") || b === "to not play") {
        ++computerScore
        let lose = `you lose, ${computerChoice} beats ${PlayerChoice}`;
        return lose
    }
    else {
        ++playerScore
        let win = `you win, ${PlayerChoice} beats ${computerChoice}`;
        return win
    }
}

function game() {
    for (i = 1; i <= 5; ++i) {
        alert(`round ${i}`)
        playerImput = String(prompt("rock, paper or scissors?")).toLowerCase();
        console.log(`computer chose ${computerPlay()}`)
        console.log(`you chose ${playerPlay()}`)
        console.log(singleRound(computerChoice, PlayerChoice))
        console.log(`computer: ${computerScore}, player: ${playerScore}`)
    }
    let finalScore = computerScore - playerScore;
    if (finalScore > 0) { console.log("final result: you lost bro") }
    else if (finalScore < 0) { console.log("final result: you won bro") }
    else { console.log("final result: draw") }
}
game()