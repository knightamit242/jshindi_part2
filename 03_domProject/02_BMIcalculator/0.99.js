const form= document.querySelector('form') 

form.addEventListener('submit',function(poki){
    poki.preventDefault() 

   const height= parseInt(document.querySelector('#height').value)
   const weight= parseInt(document.querySelector('#weight').value)
   const results=document.querySelector('#results')

   // 
   if(height=== ""|| height<0 || isNaN(height)){
        results.innerHTML=`please enter valid height: ${height}`
        }
    else if(weight==="" || weight<0 || isNaN(weight)){
        results.innerHTML= `please enter valid weight: ${weight}`
    }
   else{
results.innerHTML= (weight / ((height * height) / 10000)).toFixed(2)
   }
})



//CONCEPT: IF ELSE AUR ANDAR KA CONCEPT SAMJHATE HAI



// browser ke paas
// height =170
// weight =65
// results=<div> sab aa gaya.

// Ab validation start hogi.

// STEP 4
// if (
// height === '' ||
// height < 0 ||
// isNaN(height)
// )

// Isko ek saath mat dekho.
// Isko teen parts me dekho.

// Condition 1
// height === ''
// Matlab
// Kya height empty string hai?
// Example
// height
// ↓
// 170
// Check
// 170 === ""
// false
// Answer
// false

// Condition 2
// height < 0
// Check
// 170 < 0
// false

// Condition 3
// isNaN(height) : TRUE YA FALSE RETURN KAREGA ###IMP

// Sabse pehle samjho
// NaN
// matlab
// Not A Number

// Example
// parseInt("abc")
// ↓
// NaN
// Ab
// isNaN(NaN)
// ↓
// true

// Lekin
// isNaN(170)
// ↓
// false

// To
// isNaN(height)
// ↓
// false

// Ab JavaScript dekhega
// false
// ||
// false
// ||
// false

// OR operator ka rule
// Ek bhi true hua
// ↓
// if chalega
// Yahan
// false
// OR
// false
// OR
// false
// ↓
// false

// To if nahi chala.


// Ab Else if

// else if (
// weight === '' ||
// weight <0 ||
// isNaN(weight)
// )

// Same checking.
// MAAN LO YE BHI VALID HO GYA


// Ab else
// Ab JavaScript bolta hai
// Height bhi valid
// Weight bhi valid
// ↓
// Calculation karo
// Yahan aata hai

// const bmi =
// (weight / ((height * height)/10000))
// .toFixed(2)



// .toFixed(2)
// Matlab
// 2 decimal places
// 22.491
// ↓
// 22.49

// Dhyan dena: ###IMPORTANT
// toFixed(2) string return karta hai, number nahi.
// const bmi = (22.491).toFixed(2)
// console.log(typeof bmi)
// Output
// string
// Kyuki yahan hume sirf display karna hai, isliye ye bilkul theek hai.



// Ab Result dikhana
// results.innerHTML = `<span>${bmi}</span>`

// Yaad karo
// results
// ↓
// <div id="results"></div>
// Ab browser is div ke andar likh dega
// <span>22.49</span>


// Final HTML
// <div id="results">
//     <span>22.49</span>
// </div>

// Page par dikhega
// 22.49




// Agar Height galat ho
// User ne height likha
// abc
// To
// .value
// ↓
// "abc"
// ↓
// parseInt()
// ↓
// NaN

// Ab
// isNaN(height)
// ↓
// true

// Condition
// false
// ||
// false
// ||
// true

// ↓
// true

// Ab if ke andar aa jayega... AUR

// results.innerHTML =
// "Please give a valid height"
// Page pe dikhega

// Please give a valid height
// Aur else if aur else execute hi nahi honge kabhi.



// Agar Weight galat ho
// Height
// 170

// Weight
// xyz

// To
// height valid
// ↓
// if skip
// ↓
// weight invalid
// ↓
// else if execute
// Output
// Please give a valid weight



// Execution Flow (Ye yaad rakhna)
// User Clicks Calculate
//           │
//           ▼
// submit event
//           │
//           ▼
// preventDefault()
//           │
//           ▼
// Height Input lo
//           │
//           ▼
// Weight Input lo
//           │
//           ▼
// Result div select karo
//           │
//           ▼
// Height valid hai?
//       │
//  ┌────┴────┐
//  │         │
// No         Yes
//  │          │
//  ▼          ▼
// Error   Weight valid?
//             │
//       ┌─────┴─────┐
//       │           │
//      No          Yes
//       │           │
//       ▼           ▼
//   Error      BMI Calculate
//                   │
//                   ▼
//       results.innerHTML = BMI




// ⭐ Ek chhota sa improvement (important)
// Tumhare code me ye check hai:
// height === ''

// Lekin height par parseInt() lag chuka hai. Isliye height kabhi "" (empty string) nahi hoga. Agar input khali hoga, to parseInt("") ka result NaN aayega.

// Isliye practically isNaN(height) hi empty input ko bhi pakad leta hai.

// Is code me height === '' likha rehna koi bada issue nahi hai, lekin ye condition unnecessary hai, kyunki parseInt() ke baad variable string nahi, number (ya NaN) hota hai. Ye ek achhi observation hai jo interviews me bhi kaam aati hai.



//CONCEPT:2  IN SABKE OUTPUT CONSOLE MEIN EK BAAR DEKHO

// console.log(parseInt(""))           NaN
// console.log(parseInt("170"))        170
// console.log(parseInt("abc"))        NaN

// console.log(isNaN(parseInt("")))    True
// console.log(parseInt("") === "")    False

// | Input     | parseInt()=>Output |
// | --------- | ------------------- |
// | "170cm" | 170                 |
// | "44w"   | 44                  |
// | "w44"   | NaN                 |

// Yaad rakhne ka Rule ⭐
// parseInt() LEFT → RIGHT padhta hai.

// ✅ Agar starting me number mila
// → jitna number milega utna return karega.

// ❌ Agar starting hi non-number se hui
// → NaN return karega.