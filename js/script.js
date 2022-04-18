let PlayerChoice
let computerChoice
let playerScore = 0;
let computerScore = 0;
let buttons = document.querySelectorAll("#buttons");
let result = document.querySelector('#result');

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

function playRound(player, computer) {
    if (player === computer) { result.innerHTML = `You played ${player} and the computer played ${computer}<br>Draw` }
    else if ((player === "scissors" && computer === "paper") || (player === "paper" && computer === "rock") ||
        (player === "rock" && computer === "scissors")) {
        ++playerScore
        result.innerHTML = `You played ${player} and the computer played ${computer}<br>You win, ${player} beats ${computer}`
    }
    else {
        ++computerScore
        result.innerHTML = `You played ${player} and the computer played ${computer}<br>You lose, ${computer} beats ${player}`
    }
    result.innerHTML += `<br>Running score:<br>Player: ${playerScore}<br>Computer: ${computerScore}`
}

buttons.forEach(button => button.addEventListener("click", () => {
    PlayerChoice = button.textContent
    computerPlay()
    playRound(PlayerChoice, computerChoice)
    if (playerScore === 5) {
        result.innerHTML += `<br>The winner is the player (reached 5 points first)`
        buttons.forEach(button => button.style.cssText = "display: none;")
    }
    if (computerScore === 5) {
        result.innerHTML += `<br>The winner is the computer (reached 5 points first)`
        buttons.forEach(button => button.style.cssText = "display: none;")
    }
}))
