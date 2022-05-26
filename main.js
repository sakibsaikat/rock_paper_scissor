let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let playAg = document.querySelector("#btn1");
let quit = document.querySelector("#btn2");
let playerVal = document.querySelector("#p")
let computerVal = document.querySelector("#c");
let gameContent = document.querySelector(".content");
let result_Window =document.querySelector(".output_window_main");
let resultShow = document.querySelector("#result");
let header = document.querySelector("header");
let body = document.querySelector("body");



function gamePlaying(){
    body.style.backgroundColor="white";
    header.style.display="block";
    gameContent.style.display = "flex";
}

gamePlaying();

playAg.addEventListener("click",()=>{
    result_Window.style.display="none";
    gamePlaying();
})

quit.addEventListener("click",()=>{
    location.href="home.html";
})

rock.addEventListener("click",function(){
    body.style.backgroundColor="black";
    header.style.display="none";
    gameContent.style.display = "none";
    gameplay("rock");
    result_Window.style.display="block";
})
paper.addEventListener("click",function(){
    body.style.backgroundColor="black";
    header.style.display="none";
    gameContent.style.display = "none";
    gameplay("paper");
    result_Window.style.display="block";
})
scissor.addEventListener("click",function(){
    body.style.backgroundColor="black";
    gameContent.style.display = "none";
    header.style.display="none";
    gameplay("scissor");
    result_Window.style.display="block";
})



let gameplay = (PlayerTurn)=>{

    let playAgain=1;
    let computerTurns = ["rock","paper","scissor"]


        let computerTurn = Math.floor(Math.random() * 3);
        let computerTurnString = computerTurns[computerTurn];

        switch(PlayerTurn){
            case "rock":{
                if(computerTurnString=="rock"){
                    //draw
                    resultShow.innerHTML = "Draw"
                    playerVal.innerHTML = PlayerTurn;
                    computerVal.innerHTML = computerTurnString;
                }
                else if(computerTurnString=="paper"){
                    //Player wins
                    resultShow.innerHTML = "You Lose"
                    playerVal.innerHTML = PlayerTurn;
                    computerVal.innerHTML = computerTurnString;
                }
                else if(computerTurnString=="scissor"){
                    //Computer Wins
                    resultShow.innerHTML = "You Win"
                    playerVal.innerHTML = PlayerTurn;
                    computerVal.innerHTML = computerTurnString;
                }
                break;
            }
            case "paper":{
                if(computerTurnString=="paper"){
                    //draw
                    resultShow.innerHTML = "Draw"
                    playerVal.innerHTML = PlayerTurn;
                    computerVal.innerHTML = computerTurnString;
                }
                else if(computerTurnString=="rock"){
                    //Player wins
                    resultShow.innerHTML = "You Win"
                    playerVal.innerHTML = PlayerTurn;
                    computerVal.innerHTML = computerTurnString;
                }
                else if(computerTurnString=="scissor"){
                    //Computer Wins
                    resultShow.innerHTML = "You Lose"
                    playerVal.innerHTML = PlayerTurn;
                    computerVal.innerHTML = computerTurnString;
                }
                break;
            }
            case "scissor":{
                if(computerTurnString=="scissor"){
                    //draw
                    resultShow.innerHTML = "Draw"
                    playerVal.innerHTML = PlayerTurn;
                    computerVal.innerHTML = computerTurnString;
                }
                else if(computerTurnString=="paper"){
                    //Player wins
                    resultShow.innerHTML = "You Win"
                    playerVal.innerHTML = PlayerTurn;
                    computerVal.innerHTML = computerTurnString;
                }
                else if(computerTurnString=="rock"){
                    //Computer Wins
                    resultShow.innerHTML = "You Lose"
                    playerVal.innerHTML = PlayerTurn;
                    computerVal.innerHTML = computerTurnString;
                }
                break;
            }
            default:{
                console.log("hey");
                break;
            }
        }
    }
