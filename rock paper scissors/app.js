var userScore=0;
var compScore=0;
var userScore_span=document.getElementById("user-score");
var compScore_span=document.getElementById("comp-score");
const scoreboard_div=document.querySelector(".scoreboard");
const result_div=document.querySelector(".result");
const rock_div=document.getElementById("rock");
const paper_div=document.getElementById("paper");
const scissors_div=document.getElementById("scissors");
function game(userChoice){
   var compChoice=getComp();
   if(userChoice==compChoice)
   {
    document.querySelector(".result").innerHTML="Draw. Select another!";
   }
   else if(userChoice=="r" && compChoice=="p")
   {
    document.querySelector(".result").innerHTML="Paper beats Rock. Computer Wins!";
    compScore+=1;
    document.getElementById("comp-score").innerHTML=compScore;
   }
   else if(userChoice=="r" && compChoice=="s")
   {
    document.querySelector(".result").innerHTML="Rock beats Scissors . You Win!";
    userScore+=1;
    document.getElementById("user-score").innerHTML=userScore;
   }
   else if(userChoice=="p" && compChoice=="s")
   {
    document.querySelector(".result").innerHTML="Scissors beat Paper. Computer Wins!";
    compScore+=1;
    document.getElementById("comp-score").innerHTML=compScore;
   }
   else if(userChoice=="p" && compChoice=="r")
   {
    document.querySelector(".result").innerHTML="Paper beat Rock . You Win!";
    userScore+=1;
    document.getElementById("user-score").innerHTML=userScore;
   }
   else if(userChoice=="s" && compChoice=="p")
   {
    document.querySelector(".result").innerHTML="Scissors beat Paper . You Win!";
    userScore+=1;
    document.getElementById("user-score").innerHTML=userScore;
   }
   else if(userChoice=="s" && compChoice=="r")
   {
       document.querySelector(".result").innerHTML="Rock beats Scissors. Computer Wins!";
       compScore+=1;
       document.getElementById("comp-score").innerHTML=compScore;
   }

}

function getComp(){
    const choice=["r","p","s"];
    var c=Math.floor(Math.random()*3);
    return choice[c];

}

function main(){
rock_div.addEventListener('click',function(){
    game("r");
})

scissors_div.addEventListener('click',function(){
    game("s")
})

paper_div.addEventListener('click',function(){
    game("p");
})
}

main();