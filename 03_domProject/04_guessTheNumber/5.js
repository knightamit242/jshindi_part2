let randomNumber=parseInt(Math.random() *100 +1)

const inputBox=document.querySelector('#guessField')
const submit= document.querySelector('#subt')
const guessInfo= document.querySelector('.guesses')
const guessRemain = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')


let prevGuess= []

let guessCount=1 

let playGame= true

    submit.addEventListener('click',function(stop){
    stop.preventDefault()
    const guess= parseInt(inputBox.value)
    validateGuess(guess)
})

function validateGuess(guess) {
    if(isNaN(guess)){
        alert("please enter a valid number")
    }
    else if(guess<1){
        alert("please enter a valid number above 1")
    }
    else if(guess>100){
        alert("please enter a valid number below 100")
    }
    else{
        prevGuess.push(guess)
        if(guessCount==11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endgame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess<randomNumber){
        displayMessage(`the number u guessed is lower`)
    }
    else if(guess>randomNumber){
        displayMessage(`the number u guessed is higher`)
    }
    else if(guess===randomNumber){
        displayMessage(`number u guessed is right`)
        endgame()
    }
}

function displayGuess(guess){
    inputBox.value= ""
    guessInfo.innerHTML += `${guess} ` 
    guessCount++
    guessRemain.innerHTML =`${11-guessCount}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2> ${message} </h2>`
}

function endgame(){
    inputBox.value=""
    inputBox.setAttribute('disabled','')
    // AB ENDGAME AUR NEWGAME NAYE FILE MEIN SAMJHATE HAI
}