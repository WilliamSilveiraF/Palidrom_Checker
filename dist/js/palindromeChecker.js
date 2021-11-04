
function reverseString(str) {
    const myArr = (str.split(''));
    return myArr.reverse().join('');
}

function palindrome(str) {
    let myStr = str.split('');
    myStr = myStr.map(item => item.replace(/\W|_/g, "").toLowerCase())
    myStr = myStr.join('')
    
    return myStr === reverseString(myStr);
}

export { palindrome };