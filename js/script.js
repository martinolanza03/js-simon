const countDownElement = document.getElementById('countdown');
const numbersListElement = document.getElementById('numbers-list');
const formElement = document.getElementById('answers-form');

console.log(countDownElement);
console.log(numbersListElement);
console.log(formElement);


// Funzione numeri random
function randomNumber() {

    const numberArray = [];

    for (let i = 0; i <= 5; i++) {
        numberArray.push(Math.floor((Math.random() * 50) + 1));
    }

    return numberArray;
}
