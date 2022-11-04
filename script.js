let form = document.getElementById('calculator');
let numOut = document.getElementById('resultBMI');
let interpretOut = document.getElementById('resultInterpreted');
let resultsDiv = document.getElementById('results');
let imageOut = document.getElementById('img');

function parseBMI(bmi){
    return bmi < 16.5  ? "wygłodzenie" : 
          (bmi < 17.0) ? "wychudzenie" :
          (bmi < 18.5) ? "niedowaga"   :
          (bmi < 25.0) ? "prawidłowa"  :
          (bmi < 30.0) ? "nadwaga"     :
                         "otyłość"     ;
}

let parsedToSrc = {
    "wygłodzenie": "wyglodzenie.png",
    "wychudzenie": "wychudzenie.png",
    "niedowaga": "niedowaga.jpg",
    "prawidłowa": "prawidlowa.png",
    "nadwaga"    : "nadwaga.png",
    "otyłość"    : "otylosc.png"
}

function calculateBMI(weight, height){
    return weight/(height**2);
}

function showResults(bmi){
    let parsed = parseBMI(bmi);

    numOut.innerHTML = `Twoje BMI to: ${bmi.toFixed(1)}`;
    interpretOut.innerHTML = `Interpretacja: ${parsed}`;

    numOut.style.animation = "fadeIn 1s ease 1s 1 normal forwards";
    interpretOut.style.animation = "fadeIn 1s ease 1s 1 normal forwards";
    form.style.top = "25%";

    imageOut.src = parsedToSrc[parsed];
    imageOut.style.animation = "imageShow 1s cubic-bezier(.68,-0.55,.35,1.35) 0s 1 normal forwards";
}

function buttonOnClick(){
    console.log("on click")
    let weight = form.weight.value;
    let height = form.height.value/100;

    let bmi = calculateBMI(weight, height);

    showResults(bmi);
}
