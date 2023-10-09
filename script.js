function getComputerChoice(){
    let choice= ["rock", "paper", "scissors"]
    let finalChoice=choice[(Math.floor(Math.random() * choice.length))]
    return finalChoice
    
}

let playerSelection;
console.log(playerSelection)

let computerSelection = getComputerChoice().toLowerCase();

console.log(computerSelection)

let win = 0;
let loss = 0 ;
let tie = 0;

function playRound(playerSelection,computerSelection){
    //computerSelection = computerSelection.toLowerCase()
    
    if (computerSelection === "paper" && playerSelection === "rock"){
        loss++
    return alert ("You lose! Paper beats rock!")
    }

    else if (computerSelection === "rock" && playerSelection === "paper"){
        win++
    return alert ("You win! Paper beats rock!")
    }

    else if (computerSelection === "rock" && playerSelection === "scissors"){
        loss++
    return alert ("You lose! Rock beats scissors!")
    }

    else if (computerSelection === "scissors" && playerSelection === "rock"){
        win++
    return alert ("You win! Rock beats scissors!")
    }

    else if (computerSelection === "scissors" && playerSelection === "paper"){
        loss++
    return alert ("You lose! Scissors beats paper!")
    }

    else if (computerSelection === "paper" && playerSelection === "paper"){
        tie++
     return alert ("Tie!")
    }
    
    else if (computerSelection === "rock" && playerSelection === "rock"){
        tie++
        return alert ("Tie!")
        }

    else if (computerSelection === "scissors" && playerSelection === "scissors"){
        tie++
        return alert ("Tie!")
        }
    
    else{
    return alert ("Invalid input")
    }

    }
    
    
    

    function game(){
       
       for ( let i = 0; i < 5; i++ ){
        playerSelection =  prompt("Enter your choice: ").toLowerCase()
         playRound(playerSelection, computerSelection)
         
       }
        
    }
    game()

    alert(`Wins: ${win}`)
    alert(`Losses: ${loss}`)
    alert(`Tie: ${tie}`)