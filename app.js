function computerPlay(){
    let rand = Math.round(Math.random() * 8);

    if(rand < 3){
        return "Rock";
    }else if(rand < 6){
        return "Paper"
    }else{
        return "Scissors"
    }
}

function playGame(){
    for (let i = 0; i < 5; i++) {
        let playerSelection = window.prompt("Choose your weapon");
        console.log(playRound(playerSelection, computerPlay()))
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    if(playerSelection == computerSelection){
        return "Tie!"
    }
    if(playerSelection == "PAPER"){
        if(computerSelection == "SCISSORS"){
            return "You lose!"
        }
        else if(computerSelection == "ROCK"){
            return "You win!"
        }
    }
    else if(playerSelection == "SCISSORS"){
        if(computerSelection == "PAPER"){
            return "You win!"
        }
        else if(computerSelection == "ROCK"){
            return "You lose!"
        }
    }
    else if(playerSelection == "ROCK"){
        if(computerSelection == "PAPER"){
            return "You lose!"
        }
        else if(computerSelection == "SCISSORS"){
            return "You win!"
        }
    }
}

playGame()