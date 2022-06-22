var playerScore = 0
var computerScore = 0

function computerPlay(){
	let choices = ["rock", "paper", "scissors"]
	let randomChoice = Math.floor(Math.random()*2)
	return choices[randomChoice]
}

function playRound(playerSelection, computerSelection){

	playerSelection = prompt("Rock, Paper, or Scissors...?")
	playerSelection = playerSelection.toLowerCase()
	computerSelection = computerPlay()

	if(playerSelection == "rock" && computerSelection == "rock"){
		return "It's a Draw!"
	} else if(playerSelection == "rock" && computerSelection == "paper"){
		computerScore++
		return "You Lose! Paper beats Rock"
	} else if(playerSelection == "rock" && computerSelection == "scissors"){
		playerScore++
		return "You Win! Paper beats Rock"
	} else if(playerSelection == "paper" && computerSelection == "rock"){
		playerScore++
		return "You Win! Paper beats Rock"
	} else if(playerSelection == "paper" && computerSelection == "paper"){
		return "It's a Draw!"
	} else if(playerSelection == "paper" && computerSelection == "scissors"){
		computerScore++
		return "You Lose! Scissors beats Paper"
	} else if(playerSelection == "scissors" && computerSelection == "rock"){
		computerScore++
		return "You Lose! Rock beats Scissors"
	} else if(playerSelection == "scissors" && computerSelection == "paper"){
		playerScore++
		return "You Win! Scissors beats Paper"
	} else if(playerSelection == "scissors" && computerSelection == "scissors"){
		return "It's a Draw!"
	}

}

function game(){
	for(let i = 0; i < 5; i++){
		console.log(playRound())
	}

	if(playerScore > computerScore){
		alert(`You win :) \n Your Score: ${playerScore} \n Computer Score: ${computerScore}`)
	} else if(playerScore == computerScore){
		alert(`It's a draw \n Your Score: ${playerScore} \n Computer Score: ${computerScore}`)
	} else {
		alert(`You Lose :/ \n Your Score: ${playerScore} \n Computer Score: ${computerScore}`)
	}
}

game()
