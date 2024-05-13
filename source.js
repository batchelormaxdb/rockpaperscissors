//create variable for user input
let userInput;
//create variable for computer choice
let computerChoice
let humanScore = 0;
let computerScore = 0;
let errorThrown = false;
let stringArray = ["Rock","Paper","Scissors"]

//Initialize buttons for each selection
const rockBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");
const paperBtn = document.createElement("button");

paperBtn.textContent = "Paper";
scissorsBtn.textContent = "Scissors";
rockBtn.textContent = "Rock";

const body = document.querySelector(".button-container");

const divElem = document.querySelector(".results");
const divElem2 = document.querySelector(".computer-results")
const human = document.querySelector("#human-score");
const computer = document.querySelector("#computer-score")

body.appendChild(rockBtn);
body.appendChild(paperBtn);
body.appendChild(scissorsBtn);

rockBtn.addEventListener("click", () => {
    userInput = "rock";
    playRound(userInput,getComputerChoice())
}); 
paperBtn.addEventListener("click", () => {
    userInput = "paper";
    playRound(userInput,getComputerChoice())
});
scissorsBtn.addEventListener("click", () => {
    userInput = "scissors";
    playRound(userInput,getComputerChoice())
})

//create a random computer choice
function getComputerChoice() {
    minNum = 0;
    maxNum = 2;
    computerChoice = stringArray[Math.floor(Math.random() * (maxNum + 1))].toLowerCase();
    divElem2.textContent = `Computer choice is: ${computerChoice}`;
    return computerChoice;
}


//Play a round
function playRound(humanChoice, computerChoice) {
    if(humanChoice == computerChoice)
    {
        divElem.textContent = 'It\'s a tie!';
    }
    else if (humanChoice == 'rock' && computerChoice == 'paper')
    {
        divElem.textContent = `You lose! Paper beats Rock!`
        ++computerScore;
    }
    else if(humanChoice == 'scissors' && computerChoice == 'rock')
    {
        divElem.textContent = `You lose! Rock beats Scissors!`;
        ++computerScore;
    }
    else if(humanChoice == 'paper' && computerChoice == 'scissors')
    {
        divElem.textContent =`You lose! Scissors beat Paper!`;
        ++computerScore;
    }
    else if (humanChoice == 'paper' && computerChoice == 'rock')
    {
        divElem.textContent = `You win! Paper beats Rock!`;
        ++humanScore;
    }
    else if(humanChoice == 'rock' && computerChoice == 'scissors')
    {
        divElem.textContent = `You win! Rock beats Scissors!`;
        ++humanScore;
    }
    else if(humanChoice == 'scissors' && computerChoice == 'paper')
    {
        divElem.textContent = `You win! Scissors beat Paper!`;
        ++humanScore;
    }
    human.textContent = "Your score is : " + humanScore;
    computer.textContent = "The computer's score is: " + computerScore;
    if(computerScore === 5)
        {
            humanScore = 0;
            computerScore = 0;
            divElem2.textContent = ''
            divElem.textContent = "Computer Wins!"
        }
        else if (humanScore === 5)
        {
            humanScore = 0;
            computerScore = 0;
            divElem2.textContent = ''
            divElem.textContent = "You Win!"
        }
}

