function computerPlay(){
    let numberChoice = Math.floor(Math.random() * 3) + 1;
    switch(numberChoice){
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
        default:
            return "computer oopsied";
    }
}

let playerSelection;
let computerSelection;
let computerScore = 0;
let playerScore = 0;

function playRound(){
    playerSelection = prompt("Select rock, paper, or scissors.");
    computerSelection = computerPlay();
    if (playerSelection.toLowerCase() == "rock" && computerPlay() == "rock"){
        alert("Tie!");
    }
    else if (playerSelection.toLowerCase() == "rock" && computerPlay() == "scissors"){
        alert("Congratulations you win! Rock beats scissors.")
        ++playerScore;
    }
    else if (playerSelection.toLowerCase() == "rock" && computerPlay() == "paper"){
        alert("Oh no! You suck. Paper beats rock.")
        ++computerScore;
    }
    else if (playerSelection.toLowerCase() == "paper" && computerPlay() == "rock"){
        alert("Congratulations you win! Paper beats rock.")
        ++playerScore;
    }
    else if (playerSelection.toLowerCase() == "paper" && computerPlay() == "paper"){
        alert("Tie!")
    }
    else if (playerSelection.toLowerCase() == "paper" && computerPlay() == "scissors"){
        alert("Oh no! You suck. Scissors beats paper.")
        ++computerScore;
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerPlay() == "rock"){
        alert("Oh no! You suck. Rock beats scissors.")
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerPlay() == "scissors"){
        alert("Tie!")
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerPlay() == "paper"){
        alert("Congratulations you win! Scissors beats paper.")
        ++playerScore;
    }
}

function playGame(){
    do {
        playRound();
    }
    while (computerScore < 3 && playerScore < 3);

    if (playerScore == 3){
        alert(`You reached ${playerScore} out of 5, you win!`)
    }
    else if (computerScore == 3){
        alert(`The computer reached ${computerScore} out of 5 first, you lose.`)
    }

}