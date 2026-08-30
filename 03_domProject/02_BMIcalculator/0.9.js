const form= document.querySelector('form') 
   // const height= parseInt(document.querySelector('#height').value)
   // const weight= parseInt(document.querySelector('#weight').value)
   //YE HEIGHT AUR WEIGHT BAHAR LIKHNA SHI NHI RAHEGA

form.addEventListener('submit',function(poki){
    poki.preventDefault() 

   const height= parseInt(document.querySelector('#height').value)
   const weight= parseInt(document.querySelector('#weight').value)
   const results=document.querySelector('#results')
   
})


// CONCEPT SAMJHO height,weight AUR results EVENT KE ANDAR LIKHNA SHI RHEGA YA BAHAR

// ❌ Agar bahar likhoge:

// const height = parseInt(document.querySelector('#height').value)
// const weight = parseInt(document.querySelector('#weight').value)

// form.addEventListener('submit', function (e) {
//     e.preventDefault()
//     console.log(height, weight)
// })

// Kya hoga?
// Jab browser page load karega, usi time ye do lines sirf ek baar execute hongi.

// Us waqt input boxes me kya hoga?
// Height: ""
// Weight: ""

// To:
// parseInt("")
// ka result hota hai:
// NaN

// Ab height aur weight ki value NaN fix ho gayi.
// Phir chahe user baad me 170 aur 65 likh de, ye variables dobara calculate nahi honge.
//kyoki Variable mein value tabhi update hogi jab usko value dene wali line dobara execute hogi... aur 
// ye line: const height = parseInt(document.querySelector('#height').value)
// page load hote he ek baar chal gyi... ab program ka cursor aage badh gya... ab wo dabara reverse jaakar nhi chalega. Simple si baat hai ye to.




// Ab sahi code dekho:

// form.addEventListener('submit', function (e) {
//     e.preventDefault()

//     const height = parseInt(document.querySelector('#height').value)
//     const weight = parseInt(document.querySelector('#weight').value)
// })

// Ab kya ho raha hai?
// Flow:
// Page load hua.
// User ne height = 170 likhi.
// User ne weight = 65 likha.
// User ne Submit kiya.

// Ab event listener chala.
// Ab browser input box ki latest value padhta hai.
// Isliye:
// height = 170
// weight = 65



// results variable bahar bhi likh sakte ho aur andar bhi. Lekin best practice bahar hai.

// const results = document.querySelector('#results')

// form.addEventListener('submit', function (e) {
//     e.preventDefault()

//     const height = parseInt(document.querySelector('#height').value)
//     const weight = parseInt(document.querySelector('#weight').value)
// })
// Reason:

// #results user change nahi karta. Wo page ka ek fixed element hai.

// height.value ✅ Dynamic (user har baar badal sakta hai) → andar
// weight.value ✅ Dynamic → andar
// results ❌ Static (same element hi rahega) → bahar




// Golden Rule (yaad rakhna, ratna nahi)

// Jo value user baad me change karega (input, textarea, select), uski .value hamesha us event ke andar lo jisme us value ki zarurat hai.
// Reason: Input ki value dynamic hoti hai, isliye usse latest time par read karna chahiye, na ki page load ke time.

// Rule yaad rakho:
// DOM element (document.querySelector(...)) → bahar rakh sakte ho agar woh fixed hai.
// Us element ki .value → hamesha event ke andar lo, kyunki woh change hoti rehti hai.