let randomNumber = parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const highLow = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultPara');

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please Enter a Valid Number')
    } else if(guess<=0 || guess>100){
        alert("Please enter number between 1 to 100")
    } else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
        console.log(prevGuess);
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`Oh Wow... Congratulations!! You Guessed a right number`)
        endGame()
    } else if(guess < randomNumber){
        displayMessage(`Offo... Your guess is TOO LOW`)
    } else if(guess > randomNumber){
        displayMessage(`Offo... Your guess is TOO HIGH`)
    }
}

function displayGuess(guess){
    userInput.value = ""
    guessSlot.innerHTML += `${guess}   `
    numGuess++;
    lastResult.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    highLow.innerHTML = `<h2 style="color: #bfff77;">${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = '<h2 id= "newGame">Start New Game</h2>'
    startOver.appendChild(p);
    playGame = false
    newGame()
}

function newGame(){
    document.querySelector('#newGame').addEventListener('click', (e)=>{
        randomNumber = parseInt(Math.random()*100+1);
        prevGuess = []
        numGuess= 1
        guessSlot.innerHTML = ''
        lastResult.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        // validateGuess(guess)
        playGame = true
    })
}
