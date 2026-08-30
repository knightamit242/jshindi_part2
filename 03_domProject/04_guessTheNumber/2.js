
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
            alert("LAST ATTEMPT HAI YE TUMHARA")
            alert(`random number was ${randomNumber}`)
            endgame()
        }
        else{
            checkGuess()
        }
    }
}

// Alert yaha laga sakte ho?
// Haan:

// if(guessCount == 11){
//     alert("LAST ATTEMPT HAI YE TUMHARA")
//     alert(`random number was ${randomNumber}`)
//     endgame()
// }
// Ye chalega.
// Lekin issue ye hai:
// alert() browser ka popup hota hai. Jab alert aata hai, page ruk jata hai. User ko OK dabana padta hai. Game ke messages ke liye baar-baar alert annoying hota hai.

// Isliye teacher ne:
// displayMessage(...)
// banaya.
// Ye page ke andar message dikhata hai:
// lowOrHi.innerHTML = `<h2>${message}</h2>`
// Upar alert kyo use kiya?

// Ye wale alerts:
// alert("please enter a valid number")
// alert("above 1")
// alert("below 100")
// Ye invalid input ke liye hain.
// Matlab user ne galat input diya:
// abc
// 0
// 150
// To popup se turant warning dena okay hai.

// Lekin normal game flow:
// Too low
// Too high
// Game over
// You guessed right
// Ye page par dikhana better hai.

// Main difference
// alert()
// → popup
// → page ko rok deta hai
// → OK dabana padta hai
// → validation error ke liye okay

// displayMessage()
// → page ke andar message
// → game smooth rehta hai
// → low/high/game over ke liye better