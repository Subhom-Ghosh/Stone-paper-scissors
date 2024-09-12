let UserScore = 0;
let CompScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const UserScorepara = document.querySelector("#user-score")
const CompScorepara = document.querySelector("#comp-score")
const generateCompChoice = () =>{
  const options =["rock","paper","scissors"];
  const randIdx = Math.floor(Math.random()*3);
  return options[randIdx];
}

const drawGame= ()=>{
  console.log("Game was drawn");
  msg.innerText = "Game was drawn!! Play again";
  msg.style.backgroundColor = "gray"
}
const showWinner = (userWin, userchoice,compChoice)=>{
  if(userWin){
    console.log("you win");
    UserScore++;
    UserScorepara.innerText = UserScore;
    msg.innerText = (`You Win!! your ${userchoice} beats ${compChoice}`);
    msg.style.backgroundColor = "green"
  }else{
    CompScore++;
   CompScorepara.innerText = CompScore;
    console.log("You lose");
    msg.innerText = (`You lost!! ${compChoice} beats your ${userchoice}`);
    msg.style.backgroundColor = "red"
  }
}

const playGame =(userchoice)=>{
  console.log("User Choice =",userchoice);
  const compChoice = generateCompChoice();
  console.log("Computer Choice =",compChoice);

   if(userchoice==compChoice){
    drawGame()
  }else{
    let userWin = true;
    if(userchoice == "rock"){
      userWin = compChoice==="paper"?false:true
    }else if(userchoice=="paper"){
      userWin = compChoice==="scissors"? false : true
        
    }else{
      compChoice=== "rock" ? false : true
    }
    showWinner(userWin,userchoice,compChoice);
  }
}

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("Id")
    //console.log("Choice Was clicked",choice);
    playGame(userchoice)
  });
});
