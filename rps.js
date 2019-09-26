function computerPlay() {
    randomValue = Math.random();
    if (randomValue < 1/3) {
        return "Rock";
    }
    else if (randomValue < 2/3) {
        return "Paper";
    }
    else {
        return "Scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    let playerValue
    let computerValue
    switch(playerSelection) {
        case "Rock":
            playerValue = 0
            break;
        case "Paper":
            playerValue = 1
            break;
        case "Scissors":
            playerValue = 2
    }
    switch(computerSelection) {
        case "Rock":
            computerValue = 0
            break;
        case "Paper":
            computerValue = 1
            break;
        case "Scissors":
            computerValue = 2
    }
    switch(playerValue - computerValue) {
        case 0:
            window.alert("It's a draw! You both had " + playerSelection);
            return 0;
        case 1:
        case -2:
            window.alert("You won! Computer had " + computerSelection + " and " + playerSelection + " beats " + computerSelection);
            return 1;
        case -1:
        case 2:
            window.alert("You lost! Computer had " + computerSelection + " and " + computerSelection + " beats " + playerSelection);
            return -1;
    }
}

function game() {

    let playerScore = 0;
    let computerScore = 0;

    const container = document.querySelector('#container');
    const div = document.createElement('div');
    const contentPlayerScore = document.createElement('h3');
    const contentComputerScore = document.createElement('h3');
    const contentp = document.createElement('p');
    contentPlayerScore.textContent = "Current player score: " + playerScore;
    contentComputerScore.textContent = "Current computer score: " + computerScore;
    div.appendChild(contentPlayerScore);
    div.appendChild(contentComputerScore);
    div.appendChild(contentp);
    container.appendChild(div);
    

    let playResult = 0;

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const playerSelection = button.id;
            console.log(playerSelection);
            playResult = playRound(playerSelection, computerPlay());
            if (playResult == 1){
                playerScore += 1;
            }
            if (playResult == -1){
                computerScore += 1;
            }
            contentPlayerScore.textContent = "Current player score: " + playerScore;
            contentComputerScore.textContent = "Current computer score: " + computerScore;

            if (playerScore == 5) {
                window.alert("Congratulations! You won!");
                playerScore = 0;
                computerScore = 0;
                contentPlayerScore.textContent = "Current player score: " + playerScore;
                contentComputerScore.textContent = "Current computer score: " + computerScore;
            }

            if (computerScore == 5) {
                window.alert("Awwww, you lost. Another game?");
                playerScore = 0;
                computerScore = 0;
                contentPlayerScore.textContent = "Current player score: " + playerScore;
                contentComputerScore.textContent = "Current computer score: " + computerScore;
            }
        })
    })

    // for (let i = 0; i < 5; i++) {
    //     let playerSelection = ""
    //     // while (playerSelection === "") {
    //     //     playerSelection = window.prompt("Rock, Paper or Scissors?")
    //     //     if (playerSelection !== "Rock" && playerSelection !== "Paper" && playerSelection !== "Scissors") {
    //     //         alert("Please only choose from Rock, Paper and Scissors.")
    //     //         playerSelection = ""
    //     //     }
    //     // }


    //     playerScore += playRound(playerSelection, computerPlay());
    console.log("Your final score is " + playerScore);
}

// add a UI


// const playerSelection = 'Rock'
// const computerSelection = computerPlay()
// console.log(playRound(playerSelection, computerSelection))
game()