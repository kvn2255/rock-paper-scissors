

let score = JSON.parse(localStorage.getItem('score'));
   
//score === null 
//use instea d !score
if (!score){
    score = {
     wins: 0,
     looses: 0,
     ties: 0
    }
}


console.log(score);
const playGame = (playerMove) => {

      const computerMove =  pickComputerMove();
      let result = '';

       if (playerMove === 'rock'){
           if(computerMove === 'rock'){
                result = 'tie';
             }else if (computerMove === 'paper'){
                 result = 'you lose';  
            }else if ( computerMove === 'scissors'){
                 result = 'you win';
           }
       }else if(playerMove === 'paper'){
           if(computerMove === 'rock'){
                result = 'you win';
             }else if (computerMove === 'paper'){
                 result =  'tie';
            }else if ( computerMove === 'scissors'){
                 result = 'you lose';
           }
       }else if(playerMove === 'scissors'){
           if(computerMove === 'rock'){
                result = 'you lose';
             }else if (computerMove === 'paper'){
                 result = 'you win';
            }else if ( computerMove === 'scissors'){
                 result = 'tie';
           }
       }    
       

       if (result === 'you win'){
         score.wins++;
       }else if (result === 'you lose'){
         score.looses++;
       }else if(result === 'tie'){
         score.ties++;
       }

       localStorage.setItem('score', JSON.stringify(score));
    

       document.querySelector('.js-current-result').innerHTML = result;

       document.querySelector('.js-move').innerHTML = `
       You 
       <img src="images/${playerMove}-emoji.png" 
       class="result-icon">
       <img src="images/${computerMove}-emoji.png" 
       class="result-icon"> 
       Computer`

       displayResult();
        
 }


 const pickComputerMove = () =>{

     let computerMove= '';
     const randomNumber = Math.random();
  
     if (randomNumber >= 0 && randomNumber < 1/3) {
         computerMove = 'rock';
     } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
         computerMove = 'paper';
     } else if (randomNumber >= 2/3 && randomNumber <= 1) {
         computerMove  = 'scissors';
     }

     return computerMove;
 }

 const reset = () => {

       score.wins = 0;
       score.looses = 0;
       score.ties = 0;

        localStorage.removeItem('score');

        displayResult();
 }


const displayResult = () =>{

    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}
        Looses: ${score.looses}
        Ties:  ${score.ties}`;
}