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
    }
}

let PlayerChoice
let computerChoice
let playerImput;
let playerScore = 0;
let computerScore = 0;

function playSingleRound(player, computer) {
    if (player === computer) { console.log("draw") }
    else if ((player === "scissors" && computer === "paper") || (player === "paper" && computer === "rock") ||
        (player === "rock" && computer === "scissors")) {
        ++playerScore
        let win = `you win, ${player} beats ${computer}`;
        console.log(win)
    }
    else {
        ++computerScore
        let lose = `you lose, ${computer} beats ${player}`;
        console.log(lose)
    }
}

let buttons = document.querySelectorAll("#buttons");
buttons.forEach(button => button.addEventListener("click", PlayerChoice => {
    PlayerChoice = button.textContent
    computerPlay()
    console.log(PlayerChoice, computerChoice)
    playSingleRound(PlayerChoice, computerChoice)
}))

// function playFiveRounds() {
//     for (i = 1; i <= 5; ++i) {
//         alert(`round ${i}`)
//         playerImput = String(prompt("rock, paper or scissors?")).toLowerCase();

//         console.log(`computer chose ${computerPlay()}`)
//         console.log(`you chose ${playerPlay()}`)
//         console.log(playSingleRound(computerChoice, PlayerChoice))
//         console.log(`computer: ${computerScore}, player: ${playerScore}`)
//     }
//     let finalScore = computerScore - playerScore;
//     if (finalScore > 0) { console.log("final result: you lost bro") }
//     else if (finalScore < 0) { console.log("final result: you won bro") }
//     else { console.log("final result: draw") }
// }
// playFiveRounds()