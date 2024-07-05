const result = document.querySelector('#result');
const button = document.querySelector('#check-btn');
const input = document.querySelector('#text-input');
button.addEventListener("click", function(){
    const value = input.value;
    if(value == ''){
        alert('Please enter the text.')
    }else if(value == value.split('').reverse().join('')){
        result.textContent = `${value} is a palindrome`;
        result.style.display = 'block';
    }else{
        result.textContent = `${value} is not a palindrome`;
        result.style.display = 'block';
    }
});