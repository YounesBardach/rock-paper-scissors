const rock = "rock";
const scissors = "scissors";
const paper = "paper";
let randomChoice = Math.floor(Math.random() * 3);

function computerPLay() {
    switch (randomChoice) {
        case 0:
            randomChoice = "rock"
            break;

        case 1:
            randomChoice = "paper"
            break;

        case 2:
            randomChoice = "scissors"
            break;
    }
}

computerPLay()

const computerSelection = randomChoice;
let playerImput = "scissoRS";
const playerSelection = playerImput.toLowerCase();

const draw = "draw";
const win = `you win, ${playerSelection} beats ${computerSelection}`
const lose = `you lose, ${computerSelection} beats ${playerSelection}`

//scissors beats paper
//paper beats rock
//rock beats scissors

function singleRound(a, b) {
if (a === b) {return draw}
if ((a === scissors && b === paper) || (a === paper && b === rock) || (a === rock && b === scissors)) {return lose}
else {return win}
}

singleRound(computerSelection, playerSelection)
console.log (`computer chose ${computerSelection}`)
console.log (`you chose ${playerSelection}`)
console.log(singleRound(computerSelection, playerSelection))

