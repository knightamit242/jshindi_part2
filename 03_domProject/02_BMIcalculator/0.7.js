const form= document.querySelector('form') // AB FORM JAB BHI SUBMIT HOTA HAI.. YA TO POST TYPE SE HOTA OR GET TYPE SE... LEKIN JAB BHI SUBMIT HOTA HAI ISKI VALUE URL MEIN YA SERVER KE PAAS CHALI JAATI HAI
// TO AB HAME ISKO ROKNA PADEGA KYOKI HAM ISKO SERVER PE TO BHEJ NHI RAHE... TO AT THE END HAME FORM KA DEFAULT ACTION ROKNA PADEGA FORM KA...
//EVENTS MEIN EK METHOD HOTA HAI ISKO ROKNE KE LIYE
   const height= parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(poki){
    poki.preventDefault() //ISSE DEFAULT ACTION RUK JAAYEGA... KAHI SUBMIT NHI HOGA
})


// button.addEventListener('submit', function(s){
//     s.preventDefault()
// })
// YE CODE NHI CHALEGA KYOKI submit EVENT SIRF FORM KA HAI BAS... AUR USI PE LAGEGA ONLY

// Golden Rule ⭐
// click  → Button, div, h1... LAGBHAG SAB ELEMENTS PAT LAG JAAYEGA

// submit → SIRF <form> PER LAGEGA




// Golden Rule (Exam + Interview)
// Form ka default behavior submit karke page ko reload karna (ya action URL par request bhejna) hota hai. event.preventDefault() is default behavior ko rok deta hai, taaki JavaScript form ko khud handle kar sake.

// Ek line jo kabhi nahi bhoologe:
// preventDefault() ka matlab hai: "Browser, apna default kaam mat kar. Is event ko main JavaScript se handle karunga."





//CONCEPT: FORM KA

//Sabse pehle ye samjho ki FORM bana hi kisliye tha?
// Internet ke shuru se HTML Form ka purpose tha:
// User se data lena aur server ko bhejna.

// Example
// <form>
//     <input>
//     <button>Submit</button>
// </form>
// Browser ye dekhte hi samajh jata hai:
// "Accha... ye form hai. Iska kaam data submit karna hai."

// Browser ka Default Behavior

// Maan lo tumne ye page khola.
// BMI Calculator
// Tumne enter kiya
// Height : 170
// Weight : 65
// Fir button dabaya.
// Browser sochta hai
// Acha...
// Form submit hua hai.
// Ab mujhe data bhejna hai.
// Ye browser ka default behavior hai.

// Browser kya karta hai?

// Agar form me
// <form action="/login">
// hai
// To browser
// 170
// 65
// ko lekar
// /login
// page par bhej dega.

// Agar
// <form method="GET">
// hai
// To URL ban jayega
// example.com?height=170&weight=65

// Agar
// <form method="POST">
// hai
// To data server ke body me chala jayega.

// Lekin hamare project me kya hai?
// Hamara project
// BMI Calculator
// hai.
// Server hi nahi hai.
// Hume bas
// BMI = Weight / Height²
// calculate karna hai.
// Yahi browser me.

// Lekin Browser ko ye thodi pata hai 😂
// Browser to bas itna janta hai
// Form submit hua
// ↓
// Data bhejna hai


// event.preventDefault()
// English me
// Prevent the Default Behavior
// Ya
// Browser, jo tum normally karte ho wo mat karo.


// event.preventDefault() DU YA NA DU TO KYA HOGA... POORA CONCEPT

/* <form>
    <input id="height">
    <input id="weight">
    <button>Calculate</button>
</form>

Ab browser ke liye ye koi "BMI Calculator" nahi hai.
Browser sirf itna jaanta hai:
"Ye ek FORM hai."
Aur browser ke rules me likha hua hai:
Jab form submit hoga, to uska data submit karna hai.
Ye browser ka default behavior hai.


Browser ke dimag me kya chal raha hota hai?

User:
Height: 170
Weight: 70
Button dabaya.
Browser:
Oh...
Form submit hua.
Ab mujhe data bhejna hai.
Ab browser check karega:
<form action="...">
Agar action diya hai
<form action="/saveData">

to browser request bhej dega.
170
70
Server ke paas.


Agar action nahi diya
Jaise tumhare code me
<form>
To browser current page ko hi dubara load kar dega.
Yahi default behavior hai.


Agar hum preventDefault() na lagaye

Man lo user ne
170
70
likha.
Button click.
Browser:
Form submit.
Page reload.
Page dubara load.
Aur...
170
gayab.
70
gayab.
Result
gayab.
Sab reset.


Matlab ye hoga
Before click
Height : 170
Weight : 70
Result :

↓
Click
↓
Browser reload
↓
Height :
Weight :
Result :
Sab blank.


Lekin hum kya chahte hain?
Hum server ko kuch bhejna hi nahi chahte.
Hum bas calculate karna chahte hain.
170
70
↓
JavaScript
↓
BMI nikalo
↓
Result dikhao
Bas.

Isliye
Hum browser se bolte hain
Bhai...
Is baar tera default kaam mat kar.
Server pe mat bhej.
Page reload mat kar.
Main JavaScript se handle kar lunga.

Ye line wahi bolti hai.
event.preventDefault()

↓
Form submit hone hi wala tha...
↓
JavaScript:
Ruk ja!
preventDefault()
↓
Browser:
Theek hai.
Main submit nahi karunga.
↓
Ab JavaScript aaram se BMI calculate karegi.
Real World Example


Agar preventDefault() hata do

form.addEventListener("submit", function(e){
    ...
})
User button dabayega.
Browser turant
Submit
↓
Reload
kar dega.
Tumhara JS result dikhane ka chance hi nahi milega (ya reload hote hi result gayab ho jayega). */

