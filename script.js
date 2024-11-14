const btnOne=document.getElementById("button-one");
const btnTwo=document.getElementById("button-two");
const btnThree=document.getElementById("button-three");
const btnOneGuest=document.getElementById("button-one-guest");
const btnTwoGuest=document.getElementById("button-two-guest");
const btnThreeGuest=document.getElementById("button-three-guest");
const homeDisplay=document.getElementById("home-display");
const guestDisplay=document.getElementById("guest-display");
const btnStart=document.getElementById("btn-start");
const timeDisplay=document.getElementById("time-display");
const resultDisplay = document.getElementById("display-result");
const btnNewGame=document.getElementById("btn-newgame");
let homeScore=0;
let guestScore=0;

// Funcții pentru actualizarea scorurilor
function updateScoreHome(points)
{
    homeScore+=points;
    homeDisplay.innerHTML=homeScore;    
}

function updateScoreGuest(points)
{
    guestScore+=points;
    guestDisplay.innerHTML=guestScore;
     
}

// Evenimente pentru butoanele de scor
btnOne.addEventListener("click",function(){updateScoreHome(1)});
btnTwo.addEventListener("click",function(){updateScoreHome(2)});
btnThree.addEventListener("click",function(){updateScoreHome(3)});
btnOneGuest.addEventListener("click",function(){updateScoreGuest(1)});
btnTwoGuest.addEventListener("click",function(){updateScoreGuest(2)});
btnThreeGuest.addEventListener("click",function(){updateScoreGuest(3)});



// Funcționalitatea de cronometrare
let count = 10;
btnStart.addEventListener("click", function() {
  const timer = setInterval(function() {
    count--;
    timeDisplay.innerHTML=count
    if (count === 0) {
      clearInterval(timer);
      console.log("Game's over!");
     if(homeScore>guestScore)
     resultDisplay.innerHTML+="Home is the winner!🎉";
      else if (homeScore===guestScore){
           resultDisplay.innerHTML+="Equality!🎉"; 
      }
      else {
        resultDisplay.innerHTML+="Guest is the winner!🎉";
       
      }
    }
  }, 1000);
});

// Funcționalitatea butonului NEW GAME
function deleteGame(){
  
  homeScore=0;
  guestScore=0;
  count=10;
  
  homeDisplay.innerHTML=homeScore;
  guestDisplay.innerHTML=guestScore;
  timeDisplay.innerHTML="TIMER";
  resultDisplay.innerHTML="RESULT:";
}

btnNewGame.addEventListener("click", deleteGame);