const countDownElement = document.getElementById('countdown');
const numbersListElement = document.getElementById('numbers-list');
const formElement = document.getElementById('answers-form');

console.log(countDownElement);
console.log(numbersListElement);
console.log(formElement);


// Funzione numeri random

function randomNumber() {

    const numberArray = [];

    for (let i = 0; i < 5; i++) {
        numberArray.push(Math.floor((Math.random() * 50) + 1));
    }

    return numberArray;
}

//Funzione timer

let countDown = 0;

function countDownTime() {

    let spanElement = document.createElement('span');
    spanElement.append(countDown);
    countDownElement.innerHTML = "";
    countDownElement.appendChild(spanElement);

    console.log(countDown);
    if (countDown == 0) {
        clearInterval(count);
        formElement.classList.remove('d-none');
        numbersListElement.classList.add('d-none');
    }

    countDown--;

    return countDown;
}

const count = setInterval(countDownTime, 1_000);

// Aggiungere a schermo i numeri random
const numberLi = randomNumber();

function numberInScreen() {

    for (let i = 0; i < 5; i++) {
        const liElement = document.createElement('li');
        liElement.append(numberLi[i]);
        numbersListElement.appendChild(liElement);
        console.log(liElement);
    }

    return numberLi;

}

numberInScreen();

//Submit form

const inputElement = document.querySelectorAll(".form-control");
let userArrayNumber = [];
console.log(inputElement.value);
let numbersEqual = [];

formElement.addEventListener('submit', function (event) {
    event.preventDefault();

    for (let i = 0; i < inputElement.length; i++) {
        userArrayNumber.push(inputElement[i].value)
    }

    // Controllo dei valori
    for (let i = 0; i < numberLi.length; i++) {
        if (userArrayNumber[i].includes(numberLi[i])) {
            numbersEqual.push(numberLi[i]);
        }
    }
    console.log(numbersEqual);
});


