const rock = "rock";
const scissors = "scissors";
const paper = "paper";

function computerPLay() {
    let randomChoice = Math.floor(Math.random() * 3);
    switch (randomChoice) {
        case 0:
            console.log(rock);
            break;

        case 1:
            console.log(paper);
            break;

        case 2:
            console.log(scissors);
            break;
    }
}

computerPLay()

