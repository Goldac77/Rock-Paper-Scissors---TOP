const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
	button.addEventListener("click", () => {
		playRound(button.innerHTML, computerPlay())
		game()
	})
})
const display = document.querySelector("#display")
const score = document.querySelector("#score")

function computerPlay(){
	let choices = ["Rock", "Paper", "Scissors"]
	let randomChoice = Math.floor(Math.random()*2)
	return choices[randomChoice]
}

var playerScore = 0
var computerScore = 0

function playRound(playerSelection, computerSelection){

	if(playerSelection == "Rock" && computerSelection == "Rock"){
		display.innerHTML = "It's a Draw!"
		score.innerHTML = `Your Score: ${playerScore} <br/> Computer Score: ${computerScore}`
	} else if(playerSelection == "Rock" && computerSelection == "Paper"){
		computerScore++
		display.innerHTML = "You Lose! Paper beats Rock"
		score.innerHTML = `Your Score: ${playerScore} <br/> Computer Score: ${computerScore}`
	} else if(playerSelection == "Rock" && computerSelection == "Scissors"){
		playerScore++
		display.innerHTML = "You Win! Paper beats Rock"
		score.innerHTML = `Your Score: ${playerScore} <br/> Computer Score: ${computerScore}`
	} else if(playerSelection == "Paper" && computerSelection == "Rock"){
		playerScore++
		display.innerHTML = "You Win! Paper beats Rock"
		score.innerHTML = `Your Score: ${playerScore} <br/> Computer Score: ${computerScore}`
	} else if(playerSelection == "Paper" && computerSelection == "Paper"){
		display.innerHTML = "It's a Draw!"
		score.innerHTML = `Your Score: ${playerScore} <br/> Computer Score: ${computerScore}`
	} else if(playerSelection == "Paper" && computerSelection == "Scissors"){
		computerScore++
		display.innerHTML = "You Lose! Scissors beats Paper"
		score.innerHTML = `Your Score: ${playerScore} <br/> Computer Score: ${computerScore}`
	} else if(playerSelection == "Scissors" && computerSelection == "Rock"){
		computerScore++
		display.innerHTML = "You Lose! Rock beats Scissors"
		score.innerHTML = `Your Score: ${playerScore} <br/> Computer Score: ${computerScore}`
	} else if(playerSelection == "Scissors" && computerSelection == "Paper"){
		playerScore++
		display.innerHTML = "You Win! Scissors beats Paper"
		score.innerHTML = `Your Score: ${playerScore} <br/> Computer Score: ${computerScore}`
	} else if(playerSelection == "Scissors" && computerSelection == "Scissors"){
		display.innerHTML = "It's a Draw!"
		score.innerHTML = `Your Score: ${playerScore} <br/> Computer Score: ${computerScore}`
	}

}

function game(){
	if(playerScore > computerScore && playerScore == 5){
		alert("You Win!!!")
	} else if(computerScore > playerScore && computerScore == 5){
		alert("You Lose!!!")
	}
}

