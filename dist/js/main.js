import { palindrome } from './palindromeChecker.js';

const form = document.getElementById('myForm')
const myInput = document.getElementById('mySentence')

form.addEventListener('submit', (e) => {

    console.log('funcionei')

    if (palindrome(myInput.value)) {
        window.alert('Sou palindromo')
    } else {
        window.alert('Não sou')
    }
    e.preventDefault();
})

