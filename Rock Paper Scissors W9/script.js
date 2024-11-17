/*
Using if statements, create a rock, paper, scissors game.
You may use any method of user input and any method of visualisation (alerts, document.getElement etc).
Bonus: The game should stop if the user wins
Bonus: The computer should change their guess each time
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
    let attemptsLeft = 3;
    document.getElementById("countdownmessage").innerText = `Attempts left: ${attemptsLeft}`;

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
            document.getElementById("countdownmessage").style.display = "none";
            rock.disabled = true;
            paper.disabled = true;
            scissors.disabled = true;
        }
        else{
            result = "You lose!"
        }
        
        //show countdown message and block replay after 3 attempts
        attemptsLeft--;

        if (attemptsLeft <= 0) {
            document.getElementById("countdownmessage").innerText = `No more attempts`;
            rock.disabled = true;
            paper.disabled = true;
            scissors.disabled = true;
        }
        else{document.getElementById("countdownmessage").innerText = `Attempts left: ${attemptsLeft}`;
        }

        //hide last message and display game result
        document.getElementById("nextmessage").style.display = "none";
        document.getElementById("gameResult").innerText = `You chose: ${userChoice}, Computer chose: ${computerChoice}. ${result}`;
      
    }
}
