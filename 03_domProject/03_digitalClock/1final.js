const clock= document.getElementById('clock') // queryselector BHI USE KR SKTE HO

// // AB HAME CURRENT TIME SHOW KRNA HAI.. TO
// let date= new Date()
// console.log(date.toLocaleTimeString()) // ISSE CURRENT TIME SHOW HO JAAYEGA

// // LEKIN HAME HAR SECOND PE ISKO CHANGE KRNA HAI...

// setInterval() ka syntax
// setInterval(callbackFunction, timeInMilliseconds)

// setInterval(function(){},1000)

// setInterval() EK METHOD HAI.
// Pehla argument callback function hota hai.
// Dusra argument time interval (milliseconds) hota hai.
// Pehla argument: Kaunsa function baar-baar chalana hai (callback function).
// Dusra argument: Kitne milliseconds ke gap ke baad chalana hai.
// Yaha 1000 ms = 1 second.
// Matlab callback function har 1 second baad automatically execute hoga. 1000 JO HAI WO INTERVAL HAI KI KITNE INTERVAL KE BAAD FUNCTION DOBARA CAAL KRO AUR EXECUTE KRWAO... YAHA 1SECOND HAI... 




// setInterval(function(){
//     let date= new Date()
//     // console.log(date.toLocaleTimeString())
// // Har 1 second baad naya Date object banega,
// aur current time console me print hoga.
// },1000)

// LEKIN YE CONSOLE PE HOGA... HAME PAGE PE KRNA HAI.. CLOCK ID KE ANDAR


//TO USKE LIYE

setInterval(function(){
    let date= new Date()
    clock.innerHTML= date.toLocaleTimeString()
},1000)

// Har 1 second baad:
// 1. Naya Date object banta hai.
// 2. Current time nikala jata hai.
// 3. clock element ka innerHTML update ho jata hai.
// Isliye webpage par digital clock continuously update hoti rehti hai.



//CONCEPT.1//

// ⭐ Ek bahut important concept

// setInterval() khud baar-baar function ko call karta hai.
// Tumhe loop likhne ki zarurat nahi hoti.

// Internally tum ise beginner level par aise samajh sakte ho:

// while(true){
//     callbackFunction()
//     // 1 second wait
// }


// setInterval() time ko change nahi karta, balki har interval ke baad callback function ko dobara execute karta hai. Us callback ke andar tum new Date() se naya current time lekar page update karte ho. Ye wording zyada technically sahi hai.



//CONCEPT.2//

// Pehla argument → Callback Function
// function () {
//     let date = new Date()
//     clock.innerHTML = date.toLocaleTimeString()
// }

// Ye poora function pehla argument hai.
// JavaScript ise abhi execute nahi karti.
// Sirf setInterval() ko de deti hai aur bolti hai:
// "Ye function rakh lo. Jab bhi 1000 ms complete ho, tab ise call kar dena."
// Isliye ise callback function bolte hain.


// 2️⃣ Dusra argument → Time Interval
// 1000
// Matlab
// 1000 milliseconds
// =
// 1 second
// JavaScript samajhti hai:
// Har 1000 ms baad callback function ko chalana hai.