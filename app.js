const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultsDiv = document.getElementById('result')
const value = document.querySelector('strong');
const final = document.getElementById('final');


checkBtn.addEventListener('click', () => {
    let inputValue = textInput.value;
    let reverseValue = inputValue.split("").reverse().join("");
    if(textInput.value === ""){
        alert('Please input a value')
    }else if(inputValue.length === 1){
        resultsDiv.style.display = "block";
        value.innerText = inputValue;
        final.innerText = `is a palindrome.` 
    }else if(inputValue == reverseValue){
        resultsDiv.style.display = "block";
        value.innerText = inputValue;
        final.innerText = `is a palindrome.` 
    }else{
        resultsDiv.style.display = "block";
        value.innerText = inputValue
        final.innerText = `is not a palindrome.` 

    }
    
})

