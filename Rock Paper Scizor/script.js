/*
Using if statements, create a rock, paper, scissors game.
You may use any method of user input and any method of visualisation (alerts, document.getElement etc).
@author Hung Nguyen
*/

function play(){
    //stop reset, hide the start button, and display next message
    event.preventDefault();

    document.getElementById("nextmessage").innerHTML = `Choose one of the below`; 

    document.getElementById("form").style.display = "none";
    
    //Create button options
    const rock = document.createElement("button");
    rock.innerText = "Rock";
    document.body.appendChild(rock);
    
    const paper = document.createElement("button");
    paper.innerText = "Paper";
    document.body.appendChild(paper);

    const scissors = document.createElement("button");
    scissors.innerText = "Scissors";
    document.body.appendChild(scissors);

    //Link event listeners to button
    rock.addEventListener("click", () => playGame("Rock"));
    paper.addEventListener("click", () => playGame("Paper"));
    scissors.addEventListener("click", () => playGame("Scissors"));
   
    //Game function
    function playGame(userChoice){
        const choices = ["Rock", "Paper", "Scissors"];
        const computerChoice = choices[Math.floor(Math.random()*choices.length)];

        let result;
        if (userChoice === computerChoice){
            result = "Draw!";
        }
        else if (
        (userChoice === "Rock" && computerChoice === "Scissors") ||
        (userChoice === "Scissors" && computerChoice === "Paper") ||
        (userChoice === "Paper" && computerChoice === "Rock")
        ){
            result = "You win!";
        }
        else{
            result = "You lose!"
        }
        
        //hide last message and display game result
        document.getElementById("nextmessage").style.display = "none";

        document.getElementById("gameResult").innerText = `You chose: ${userChoice}, Computer chose: ${computerChoice}. ${result}`;
    
    }
}
