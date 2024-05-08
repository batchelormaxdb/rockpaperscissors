//create variable for user input
let userInput;
//create variable for computer choice
let computerChoice
//create array of choices
let stringArray = ["Rock", "Paper", "Scissors"]
let humanScore = 0;
let computerScore = 0;
let errorThrown = false;
//create a random computer choice
function getComputerChoice() {
    minNum = 0;
    maxNum = 2;
    computerChoice = stringArray[Math.floor(Math.random() * (maxNum + 1))].toLowerCase();
    console.log(`Computer choice is: ${computerChoice}`)
    return computerChoice;
}
//get user input
function getHumanChoice() {
    userInput = prompt("What would you like to play?").toLowerCase();
    return userInput; 
}

//Play a round
function playRound(humanChoice, computerChoice) {
    if(humanChoice == computerChoice)
    {
        console.log('It\'s a tie!');
    }
    else if (humanChoice == 'rock' && computerChoice == 'paper')
    {
        console.log(`You lose! Paper beats Rock!`)
        ++computerScore;
    }
    else if(humanChoice == 'scissors' && computerChoice == 'rock')
    {
        console.log(`You lose! Rock beats Scissors!`)
        ++computerScore;
    }
    else if(humanChoice == 'paper' && computerChoice == 'scissors')
    {
        console.log(`You lose! Scissors beat Paper!`)
        ++computerScore;
    }
    else if (humanChoice == 'paper' && computerChoice == 'rock')
    {
        console.log(`You win! Paper beats Rock!`)
        ++humanScore;
    }
    else if(humanChoice == 'rock' && computerChoice == 'scissors')
    {
        console.log(`You win! Rock beats Scissors!`)
        ++humanScore;
    }
    else if(humanChoice == 'scissors' && computerChoice == 'paper')
    {
        console.log(`You win! Scissors beat Paper!`)
        ++humanScore;
    }
    else if(humanChoice != stringArray.indexOf(humanChoice))
    {
        console.log('Oops, you didn\'t type a correct response.');
    }

}



//Play a game
function playGame(){
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    if(computerScore > humanScore)
    {
        console.log('Computer Wins! Try again!')
    }
    else if (computerScore < humanScore)
    {
        console.log('You win!!')
    }

}
playGame();
