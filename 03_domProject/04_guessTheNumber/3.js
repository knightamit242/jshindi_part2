let randomNumber=parseInt(Math.random() *100 +1)

const inputBox=document.querySelector('#guessField')
const submit= document.querySelector('#subt')



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
    inputBox.value= "" // SCREEN PE JO INPUT BOX MEIN THA WO HAT JAYEGA
    //  AB HAME IS STEP MEIN UI YA JO SCREEN HAI USME CHANGES KRNE HOTA HAI KI
    //ABHI TAK JITNE VALUE GUESS KIYE GYE HAI... UNKO SCREEN PE DIKHAO..
    // REMAINING GUESS JO BACHE HAI UNKO BHI SCREEN PE DIKHAO...
    // SCREEN PE DIKHANE KE LIYE HAME KISI HTML CONTAINER KO SELECT KRNA PADEGA
    // USKO KISI VARIABLE MEIN DAALNA PADEGA... PHIR JO BHI CHANGES HONGE WO SCREEN PE HONGE
}