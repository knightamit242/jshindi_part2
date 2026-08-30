
let randomNumber=parseInt(Math.random() *100 +1)

const inputBox=document.querySelector('#guessField')
const submit= document.querySelector('#subt')



let prevGuess= []

let guessCount=1 

let playGame= true

    // if(playGame) // YE LINE NHI LIKHOGE TO BHI CHALEGA... ISKA KOI USE NHI HAI IS PROJECT MEIN
    submit.addEventListener('click',function(stop){
    stop.preventDefault()
    const guess= parseInt(inputBox.value)
    validateGuess(guess)
})

function validateGuess(guess) {
    if(isNaN(guess)){
        console.log("please enter a valid number")
    }
    else if(guess<1){
        alert("please enter a valid number above 1")
    }
    else if(guess>100){
        alert("please enter a valid number below 100")
    }
}
validateGuess()

// YAHA SAMJH JAOGE KI AISE KYO NHI KR SKTE KYOKI... console.log SIRF BROWSER KE CONSOLE MEIN OUTPUT DIKHAYEGA AUR...

//  alert MESSAGE DEGA BROWSER APNE TARAF SE..... SO HAM ALERT USE KRENGE






//CONCEPT FOR FUTURE:
//1//                             




