import { palindrome } from './palindromeChecker.js';

const form = document.getElementById('myForm')
const myInput = document.getElementById('mySentence')
const myResult = document.getElementById('result')

form.addEventListener('submit', (e) => {

    console.log('funcionei')

    if (myInput.value == '') {
        myResult.innerText = 'Preencha com uma sentença.';
        myResult.style.color = '#2292A4';
    } else if (palindrome(myInput.value)) {
        myResult.innerHTML = '<i class="fas fa-check"></i> Essa sentença é um palidromo.';
        myResult.style.color = 'green';
    } else {
        myResult.innerHTML = '<i class="fas fa-times"></i> Essa sentença não é um palídromo.'
        myResult.style.color = 'red';
    }
    e.preventDefault();
})

