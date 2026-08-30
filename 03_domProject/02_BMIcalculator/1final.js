const form= document.querySelector('form') //HAME FORM KA DEFAULT ACTION ROKNA PADEGA... KYOKI KHI BHEJNA NHI HAI 
//EVENTS MEIN EK METHOD HOTA HAI ISKO ROKNE KE LIYE
   const height= parseInt(document.querySelector('#height').value)//YE HEIGHT AUR WEIGHT BAHAR LIKHNA SHI NHI RAHEGA

form.addEventListener('submit',function(poki){
    poki.preventDefault() //ISSE DEFAULT ACTION RUK JAAYEGA... KAHI SUBMIT NHI HOGA

    //AB HEIGHT AUR WEIGHT KO SELECT KARTE HAI
   const height= parseInt(document.querySelector('#height').value)
   const weight= parseInt(document.querySelector('#weight').value)
   const results=document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2)

    //show the result
    //results.innerHTML = bmi // AISE BHI LIKH SKTE HO

    if(bmi<=18.6){
       results.innerHTML = `Your BMI IS ${bmi} <br> U R Under Weight`
    }
    else if(bmi>18.6 && bmi<=24.9){
       results.innerHTML= `Your BMI IS ${bmi} <br> U R Normal Weight`
    }
    else{
       results.innerHTML= `Your BMI IS ${bmi} <br> U R Overweight`
    }
  }

})


// YAHA MAAN LO bmi=18.66 AA GYA... THEN ISKE BAAD 

//Ab agli line execute hogi.
// results.innerHTML = `<span>${bmi}</span>`;

// Sabse pehle JavaScript template literal evaluate karega. ##IMP
// `${bmi}`
// Matlab
// ${"18.66"}
// ↓
// 18.66

// Ab poori string ban gayi.
// <span>22.49</span>
// Ye sirf ek normal string hai.
// "<span>22.49</span>"


// STEP 3
// Ab ye string
// results.innerHTML =
// ko assign hogi.

// Yaad karo
// results
// kis taraf point kar raha tha.
// const results =
// document.querySelector('#results')
// Matlab
// <div id="results"></div>
// Isi element ko.

// STEP 4

// JavaScript bolta hai
// Is div ke andar ye HTML daal do.
// <span>22.49</span>
// Browser HTML ko parse karta hai.
// Aur DOM ban jata hai.

// Pehle
// <div id="results"></div>
// tha.

// Ab
// <div id="results">
//     <span>22.49</span>
// </div>
// ban gaya.

// STEP 5
// Browser repaint karta hai.
// Ab page par user ko dikhta hai
// 22.49


//###IMPORATNT CONCEPT
// "<span>22.49</span>"   // JavaScript ke liye sirf ek string hai.

// element.innerHTML = "<span>22.49</span>"
// // Browser is string ko parse karke actual <span> element bana deta hai.