
const body = document.querySelector('body')
const buttons= document.querySelectorAll('.button')
buttons.forEach(function(item){
    // console.log(item)
    item.addEventListener('click',function(e){
        // console.log(e) // JISPE CLICK KROGE... USKA EK POINTER EVENT OBJECT DE DEGA
        // console.log(e.target)// JIS ELEMENT PE CLICK KIYE HO, WO ELEMENT DE DEGA
        if(e.target.id==='grey'){
            body.style.backgroundColor= e.target.id
        }
        if(e.target.id==='white'){
            body.style.backgroundColor= 'white'
        }if(e.target.id==='blue'){
            body.style.backgroundColor= e.target.id
        }if(e.target.id==='yellow'){
            body.style.backgroundColor= e.target.id
        }
    })
})


//1// addEventListener ka Syntax

// element.addEventListener(eventName, callbackFunction)

// Example
// button.addEventListener('click', function(){
// })

// Isme
// button
// ↓
// kis element par event lagana hai

// click
// ↓
// kaunsa event

// function(){
// }
// ↓
// event hone ke baad kya karna hai

// Sabse Important Line (100% yaad rakhna)
// addEventListener() function ko abhi execute nahi karta. Ye sirf browser ko bolta hai:

// "Is element par jab ye event (jaise click) future mein hoga, tab is callback function ko chala dena."

// Isliye is line mein:
// item.addEventListener('click', function(e){
//     console.log(e)
// })
// function(e){...} abhi run nahi hota.
// Ye sirf register (attach) hota hai.
// Jab user click karta hai, tab browser is function ko khud call karta hai aur e (Event Object) pass karta hai.

// 🔥 Ek line mein yaad rakhne wala rule
// addEventListener() = "Event ko suno (listen karo), aur jab event ho tab callback function chalao."




//2//AB CONCEPT SAMJHATE HAI CODE KA..
//STEP 2
// buttons.forEach(function(item){
// })

// forEach ek-ek button de raha hai.
// Iteration 1
// item = Grey Button
// Iteration 2
// item = Blue Button
// Iteration 3
// item = Red Button
// Iteration 4
// item = Yellow Button


// STEP 3

// Ab sabse important line
// item.addEventListener('click', function(e){

// })

// Agar Isko aam bol-chaal ki bhasha mein bola jaaye to...

// "Is item ke upar click event suno."
// Ya
// "Is button ke upar click hone ka wait karo."

// JavaScript kya karti hai?

// Grey button ke paas jaake bolti hai
// "Jab bhi tumhare upar click ho, mujhe bata dena."
// Blue button ke paas
// "Jab tumhare upar click ho, mujhe bata dena."
// Red button ke paas
// "Jab click ho, mujhe bata dena."
// Yellow button ke paas
// "Jab click ho, mujhe bata dena."

// Abhi tak kuch execute nahi hua.
// Sirf listeners register hue hain.

// Is point par Memory ko imagine karo
// Grey Button
//     ↓
// click -----> function(e){...}// GREY BUTTON CLICK KROGE..TURANT FUNCTION CHAL JAAYEGA

// Blue Button
//     ↓
// click -----> function(e){...}

// Red Button
//     ↓
// click -----> function(e){...}

// Yellow Button
//     ↓
// click -----> function(e){...}

// Har button ke paas ek listener attach ho gaya.

// STEP 4
// Program niche tak pahunch gaya.
// Ab JavaScript idle ho gayi.
// Matlab
// Main wait kar rahi hoon...
// Ye wait kis cheez ka hai?
// Mouse Click
// Keyboard
// Scroll
// Resize
// Touch
// etc.

// User ne click kiya
// Maan lo tumne
// Blue Button
// par click kiya.
// Browser turant JavaScript ko bolta hai
// Blue button click hua hai.
// Ab JavaScript dekhti hai
// Kya Blue button ke paas koi click listener hai?
// Haan.
// Ye wala
// function(e){
//     console.log(e)

// }
// Ab ye function call ho jayega.

// Dhyan do
// Ye function
// function(e){

// }
// Tum kahin se call nahi kar rahe.
// Na
// function()
// Na
// myFunction()
// Kuch bhi nahi.

// Fir call kisne kiya?
// Browser ne.
// Ye bahut important baat hai.
// Browser internally kuch aisa karta hai
// Tumne click kiya.
// Browser
// ↓
// Click detect hua
// ↓
// Listener mila
// ↓
// Function call karo
// Jaise internally ye hua ho

// function(e){
//     console.log(e)
// }()

// Bas ye browser khud karta hai.
// Isliye tumhe function call nahi likhna padta.
// e kaha se aaya?
// Ye bhi browser deta hai.
// Tumne sirf likha
// function(e){
// }

// Browser bolta hai
// Theek hai.
// Main tumhe ek object dunga.
// Usme click ki saari information hogi.
// Fir browser internally karta hai
// function(eventObject){
// }

// Aur
// e=eventObject
// Matlab
// Tum likhte ho
// function(e){
// }

// Browser karta hai
// e = Event Object
// Isliye
// console.log(e)
// chal jata hai.
// Event Object me kya hota hai?
// Bahut kuch.

// Example
// Mouse position
// Target element
// Time
// Key pressed
// Mouse button
// Coordinates
// Shift key
// Ctrl key
// etc.
// Isliye
// console.log(e)
// karne par itna bada object dikhta hai.


// Ab ek aur visualization

// Program start
// forEach
// ↓
// Grey button
// Click listener attach
// ↓
// Blue
// Click listener attach
// ↓
// Red
// Click listener attach
// ↓
// Yellow
// Click listener attach
// ↓
// JavaScript
// Waiting...
// ↓
// Tumne Red click kiya
// ↓
// Browser
// Listener mila
// ↓
// function(e){
// console.log(e)
// }
// Run
// ↓
// Output
// PointerEvent {...}


// Yahi concept JavaScript ke almost saare DOM events (click, input, keydown, submit, mouseover, etc.) ka foundation hai. Agar ye ek concept clear ho gaya, to aage events bahut aasaan lagenge.