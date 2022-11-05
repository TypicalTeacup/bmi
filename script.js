let form = document.getElementById('calculator');
let numOut = document.getElementById('resultBMI');
let interpretOut = document.getElementById('resultInterpreted');
let resultsDiv = document.getElementById('results');
let imageOut = document.getElementById('img');

function parseBMI(bmi) {
    return bmi < 16.5 ? "wygłodzenie" :
        (bmi < 17.0) ? "wychudzenie" :
        (bmi < 18.5) ? "niedowaga" :
        (bmi < 25.0) ? "prawidłowa" :
        (bmi < 30.0) ? "nadwaga" :
        "otyłość";
}

let parsedToSrc = {
    "wygłodzenie": "wyglodzenie.png",
    "wychudzenie": "wychudzenie.png",
    "niedowaga"  : "niedowaga.png",
    "prawidłowa" : "prawidlowa.png",
    "nadwaga"    : "nadwaga.png",
    "otyłość"    : "otylosc.png"
}

function calculateBMI(weight, height) {
    return weight / (height ** 2);
}

function showResults(bmi) {
    let parsed = parseBMI(bmi);

    numOut.innerHTML = `Twoje BMI to: ${bmi.toFixed(1)}`;
    interpretOut.innerHTML = `Interpretacja: ${parsed}`;

    numOut.style.animation = null;
    interpretOut.style.animation = null;
    setTimeout(() => {
        numOut.style.animation = "fadeIn 1s ease 0s 1 normal forwards";
        interpretOut.style.animation = "fadeIn 1s ease 0s 1 normal forwards";
    }, 1000);
    form.style.top = "25%";

    imageOut.style.animation = null;
    imageOut.style.bottom = '-100vh';
    imageOut.src = parsedToSrc[parsed];
    setTimeout(function () {
        imageOut.style.animation = "imageShow 1.5s cubic-bezier(.68,-0.55,.35,1.35) 0s 1 normal forwards";
    }, 300);
}

function buttonOnClick() {
    let weight = form.weight.value;
    let height = form.height.value / 100;

    let bmi = calculateBMI(weight, height);

    showResults(bmi);
}

let headerTexts = [
    "Bardzo Mocne Igły",
    "Bydgoszcz: Miasto Idiotów",
    "Bardzo Mięsny Iławianin",
    "Babcia Ma Imprezę"
]

function changeHeader() {
    document.getElementById('header').innerHTML = headerTexts[Math.floor(Math.random() * headerTexts.length)];
}
