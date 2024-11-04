let userScore = "0";
let compScore = "0";

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("h2");
let user = document.querySelector("#user-score");
let comp = document.querySelector("#comp-score");

const genCompChoice = ()=>{
    const option = ["Stone", "Paper", "Scissor"];
    const randInd = Math.floor(Math.random() * 3);
    return option[randInd];
};

const drawGame =() =>{
    console.log("Game Draw");
    msg.innerText = "Game Draw"
};

const showWinner =(userwin)=>{
    if(userwin){
        userScore++
        user.innerText = userScore;
        console.log("You Won");
        msg.innerText = "You Win The Game";
    }else{
        compScore++;
        comp.innerText = compScore;
        console.log("You Loss");
        msg.innerText = "You Loss The Game";
    };
};

const playGame = (userChoice)=>{
console.log("userChoice is ", userChoice) ;
const compChoice = genCompChoice();
console.log("compChoice is ", compChoice);

if(userChoice === compChoice){
    drawGame();
}else{
    let userwin = true;
    if(userChoice === "Stone"){
        userwin = compChoice === "Paper" ? false : true;
    } else if(userChoice === "Paper"){
        userwin = compChoice === "Scissor" ? false : true;
    }else if(userChoice === "Scissor"){
        userwin = compChoice === "Stone" ? false : true;
    }
    showWinner(userwin);
};
};

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        let userChoice = choice.getAttribute("id");
        console.log("The Choce is clikced", userChoice)
        // console.log("The Choice Was Clicked" );
        playGame(userChoice);
        genCompChoice();
        
    });
});