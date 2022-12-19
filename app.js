function playRound(playerChoice, computerChoice){
    if(playerChoice.charAt(0)=='r' || playerChoice.charAt(0)=='R'){
        if(computerChoice=='rock'){
            return 0;
        }else if(computerChoice=='scissors'){
            return 1;
        }else{
            return -1;
        }
    }else if(playerChoice.charAt(0)=='p' || playerChoice.charAt(0)=='P'){
        if(computerChoice=='rock'){
            return 1;
        }else if(computerChoice=='scissors'){
            return -1;
        }else{
            return 0;
        }
    }else if(playerChoice.charAt(0)=='s' || playerChoice.charAt(0)=='S'){
        if(computerChoice=='rock'){
            return -1;
        }else if(computerChoice=='scissors'){
            return 0;
        }else{
            return 1;
        }
    }else{
        playerChoice= prompt("pick a valid weapon");
    }
}

function getCompterChoice(){
    let k= Math.floor(Math.random()* 2);
    if(k==0){
        return 'rock';
    }else if(k==1){
        return 'scissors';
    }else{
        return 'paper';
    }
}

let playerScore =0;
let compterScore=0;
let rounds=0;

const current= document.querySelector('.results');
const replay= document.createElement('div.replay');
const playAgain= document.querySelector('.results button');
const h3= document.querySelector('h3');
playAgain.addEventListener('click', ()=>{
    playerScore =0;
    compterScore=0;
    rounds=0;
    
    console.log('clicked');

    location.reload();
});

const buttons= document.querySelectorAll('.item button');
buttons.forEach(button => button.addEventListener('click', (e)=>{
    rounds++;
    const playerChoice= e.target.textContent;
    console.log(e);
    const computerChoice= getCompterChoice();
    if(playRound(playerChoice, computerChoice)==1){
        console.log(playerChoice + ' beats ' + computerChoice); h3.textContent= playerChoice + ' beats ' + computerChoice + '(' + (playerScore+1) +'-' + compterScore + ')';
        playerScore= playerScore + 1;
    }else if(playRound(playerChoice, computerChoice)==0){
        console.log(playerChoice + ' and ' + computerChoice + ' ties out'); h3.textContent= playerChoice + ' and ' + computerChoice + ' ties out' + '(' + playerScore +'-' + compterScore + ')';
    }else{
        console.log(playerChoice + ' loses to '+ computerChoice); h3.textContent= playerChoice + ' loses to '+ computerChoice+ '(' + playerScore +'-' + (compterScore+1) + ')';
        compterScore= compterScore+1;
    }
    if(compterScore >=5 || playerScore >=5){
        if(compterScore > playerScore){
            replay.textContent= 'Computer Wins!';
            current.appendChild(replay);
        }else if(compterScore < playerScore){
            replay.textContent= 'You win!';
            current.appendChild(replay);
        }else{
            replay.textContent= 'its a tie!!';
            current.appendChild(replay);
        }
    }
}));



// for(let i=0; i<5; i++){
//     const playerChoice= prompt("pick your weapon of choice");
//     const computerChoice= getCompterChoice();
//     if(playRound(playerChoice, computerChoice)==1){
//         console.log(playerChoice + ' beats ' + computerChoice);
//         playerScore= playerScore + 1;
//     }else if(playRound(playerChoice, computerChoice)==0){
//         console.log(playerChoice + ' and ' + computerChoice + ' ties out');
//     }else{
//         console.log(playerChoice + ' loses to '+ computerChoice);
//         compterScore= compterScore+1;
//     }
// }

// if(compterScore > playerScore){
//     console.log('computer wins');
// }else if(compterScore < playerScore){
//     console.log('player wins');
// }else{
//     console.log('its a tie')
// }