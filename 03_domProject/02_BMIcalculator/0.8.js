const form= document.querySelector('form') 
   const height= parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(poki){
    poki.preventDefault()
    //AB HEIGHT AUR WEIGHT KO SELECT KARTE HAI
   const height= parseInt(document.querySelector('#height').value)
   const weight= parseInt(document.querySelector('#weight').value)
   const results=document.querySelector('#results')
})


//1//
// .value
// User ne input box me jo type kiya hai, us value ko string ke roop me deta hai.
// parseInt()
// String ko integer (number) me convert karta hai, taaki mathematical calculation ho sake.


//2//
// Input box se data lena ho
//         ↓
//     .value use karo
//         ↓
// Input hamesha string deta hai
//         ↓
// Calculation karni ho
//         ↓
// parseInt() ya parseFloat() se number banao
//         ↓
// Result dikhana ho
//         ↓
// Kisi element (jaise div) ko select karke uska innerHTML/textContent badlo






//CONCEPT: height,weight AUR results KA... IN DETAIL

// Sabse pehle HTML ko dekho
// /* <input type="text" id="height">
// <input type="text" id="weight"> */

// <div id="results"></div>


// Ab JavaScript ka kaam hai:
// Input se value lena
// ↓
// Calculation karna
// ↓
// Result div me dikhana
// Bas.


// Ab pehli line
// const height = parseInt(document.querySelector('#height').value)
// Isko left se right mat padho.
// Isko andar se bahar padho.

// Step 1
// document
// Matlab
// HTML page

// Step 2
// document.querySelector('#height')
// Ye karta hai
// <input type="text" id="height">
// Is input box ko pakad liya.
// Abhi sirf element mila hai.

// Step 3  ###IMP
// Ab ye dekho
// document.querySelector('#height').value
// Ye bahut important hai. 
// Input box ke andar do cheezein hoti hain.
// Ek
// Input box khud
// <input type="text" id="height">

// Doosri
// Uske andar user jo type karta hai.
// Example
// Height
// 170
// Browser ke andar
// <input type="text" id="height" value="170">

// Hidden property hoti hai     ###IMP
// value="170"
// Isi ko
// .value
// bolkar nikalte hain.
// Example
// User ne likha
// 170
// Console
// document.querySelector('#height').value
// Output
// "170"
// Dhyan do.
// Output
// "170"
// String hai.
// Number nahi.
// Ye bahut important hai.

// Agar user likhe
// 185
// to
// .value
// ↓
// "185"

// Agar user likhe
// abc
// to
// .value
// ↓
// "abc"

// Jo bhi likhega...
// .value
// usi ko string bana ke de dega.

// Lekin BMI me hume number chahiye.
// Formula
// Weight
// /
// Height²
// Ye calculation hai.
// String se calculation nahi karte.

// Isliye use hua
// parseInt()
// parseInt kya karta hai?
// Ye string ko number me convert karta hai.
// Example
// "170"
// ↓
// 170

// "45"
// ↓
// 45

// "100px"
// ↓
// 100

// "abc"
// ↓
// NaN
// NaN matlab
// Not a Number.


// Agar parseInt na lagao
// User
// 170
// ↓
// .value
// ↓
// "170"
// Ab variable me kya gaya?
// height
// ↓
// "170"
// Ye number nahi hai.
// Ye string hai.

// User ne likha
// 170.8
// parseInt()
// ↓
// 170
// Decimal hata diya.
// Isliye agar decimal bhi lena ho to
// parseFloat()
// use karte hain.

// Ab ye line
// const weight = parseInt(document.querySelector('#weight').value)
// Bilkul same hai.
// Sirf
// height
// ki jagah
// weight
// hai.

// Ab teesri line
// const results = document.querySelector('#results')
// Isme parseInt nahi hai.
// Kyun?
// Kyunki
// <div id="results"></div>
// Input box nahi hai.
// Ye sirf ek div hai.
// Isme user kuch type nahi karta.

// Ye kisliye hai?
// Result dikhane ke liye.
// Example
// Calculation hui
// BMI = 23.6
// Ab ye kaha dikhayenge?
// <div id="results"></div>
// Isi me.
// Isliye us div ko select kar liya.
// const results =document.querySelector('#results')

// Ab future me likh sakte hain
// results.innerHTML = "23.6"
// Page pe
// 23.6
// dikh jayega.
// Isliye .value yahan nahi use hua
// Kyunki
// <div>
// ki koi value nahi hoti.
// .value sirf form elements (jaise <input>, <textarea>, <select>) ke liye hota hai.