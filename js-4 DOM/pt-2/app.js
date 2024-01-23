/*
Create an array with numbers
Print all numbers from the array in a list element, in the HTML page
Print out the sum of all of the numbers below the list


*/



let numbers = [1,2,3,4,5];

let listElement = document.querySelector('#numberElements');

for (let i = 0; i< numbers.length; i++) {
    let listItem = document.createElement('li');
    listItem.textContent = numbers[i];
    listElement.appendChild(listItem);
}

// Calculate
let sum = 0;
for(let i=0; i<numbers.length; i++){
    sum += numbers[i];
}

let sumElement = document.querySelector('#sum');
sumElement.textContent = 'Sum: ' + sum;