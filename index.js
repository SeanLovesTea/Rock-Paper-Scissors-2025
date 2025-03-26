let humanScore = 0
let computerScore = 0
const howManyRounds = 5;

function getComputerChoice () {
    const choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice () {
    let userInput = prompt("Choose Rock, Paper or Scissors.").trim().toLocaleLowerCase()

    if(/^(rock|paper|scissors)$/i.test(userInput)) {
        return userInput
    } else {
        alert("Invalid input. Please enter Rock, Paper or Scissors.")
        return getHumanChoice ()
    }
}

function playRound (humanChoice, computerChoice) {
    console.log("human : ",humanChoice, "| comp : ",computerChoice)
    if (humanChoice === computerChoice) {
        alert ("It's a tie!")
        return
    }
    switch (humanChoice) {
        case "rock":
            if(computerChoice === "scissors") {
                alert("You win! Rock beats scissors")
                humanScore++
            } else {
                "You lose! Paper beats Rock."
                computerScore++
            }
            break;
            
        case "paper":
            if (computerChoice === "rock") {
                alert("You win! Paper beats Rock")
                humanScore++
            } else {
                alert("You lose! Paper beats Rock.")
                computerScore++
            }
            break;
        case "scissors":
            if (computerChoice === "paper"){
                 alert("You win! Scissors beats Paper")
                 humanScore++
            } else {
                alert("You lose! Paper beats Rock.")
                computerScore++
            }
            break;      
    }
}



function playGame () {
    
    for (let i = 0; i < howManyRounds; i++) {
        const computerSelection= getComputerChoice ()
        const humanSelection = getHumanChoice ()
        playRound(humanSelection, computerSelection)
        alert(`Round ${i + 1} | The score is Human : ${humanScore} | Computer : ${computerScore} | Ties ${(i + 1) - (humanScore + computerScore)}`)
    }
    alert("After 5 Rounds the winner is...")
    if (humanScore > computerScore) {
        alert("Human is the winner!")
    } else alert("The Computer wins!")
}
playGame()