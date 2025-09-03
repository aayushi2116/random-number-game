let randomnumber=parseInt(Math.random() * 100 + 1) ;

const submit=document.querySelector("#subt")
const userinput=document.querySelector(".guessfield")
const guessSlot=document.querySelector(".guesses")

const remaining = document.querySelector(".lastresult")
const loworhigh = document.querySelector(".loworhigh")
const startover = document.querySelector(".resultParas")

const p = document.createElement("p");

let perguess = [];
let numguess = 1;
let playgame = true; 


if(playgame){
    submit.addEventListener("click",function(e){
        e.preventDefault();

        const guess = parseInt(userinput.value);
        console.log(guess);

        validateguess(guess);

    })
}




 //function to validate bet 1 to 100
function validateguess(guess) {
    if(isNaN(guess)){
        alert("please enter valid number")
    }
    else if(guess<1){
        alert("enter number greater than 1")
    }
    else if(guess>100){
        alert("enter  number less than 100")
    }
    else{
        perguess.push(guess)

         if (numguess == 11) {
      displayguess(guess);
      displaymessage(`Game over Random number was ${randomnumber}`);
      endgame();
    } else {
      displayguess(guess);
      //check whether the guess is correct or not, whether the number is higher or low
      checkguess(guess);
    }
        
        
    }}

   
function checkguess(guess){
    if(guess==randomnumber){
        displaymessage(`you guessed it right`)
        endgame();
    }
    else if(guess<randomnumber){
        displaymessage(`too low`)
    }
    else if(guess>randomnumber){
        displaymessage(`too high`)
    }

}



function displayguess(guess){
    userinput.value="";
    guessSlot.innerHTML += `${guess} `
    remaining.innerHTML= `${11 - numguess}`;
    numguess++;
    
}

function displaymessage(message){
   loworhigh.innerHTML=`<h2>${message}</h2>` 
}

function endgame(){
    userinput.value = "";
    userinput.setAttribute("disabled", "");
    p.classList.add("button");
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startover.appendChild(p);
    playgame = false;
    newgame();
}

function newgame(){
    const newgamebutton = document.querySelector("#newgame");
    newgamebutton.addEventListener("click", function (e) {
    // e.preventDefault();
    randomnumber = parseInt(Math.random() * 100 + 1);
     perguess = [];
    numguess = 1;
    guessSlot.innerHTML = "";
    remaining.inner = `${11 - numguess}`;
    userinput.removeAttribute("disabled");
    startover.removeChild(p);
    playgame = true;
  });
}




