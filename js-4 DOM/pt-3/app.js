let recipe = window.prompt('Name of recipe');
let ingredients = window.parseInt(prompt('How many  ingredients do we need for the recipe'));

// Name for recipe
let headingName = document.createElement('h1');
headingName.textContent = recipe;
document.body.appendChild(headingName);

// creating ul list for ingredients
let listElements = document.createElement('ul');


// calculating ingredients
for(let i=0; i<ingredients; i++){
    let ingredientsName = window.prompt('Enter the name fo ingredients' + (i + 1)+ ':');
    let listItem = document.createElement('li');
    listItem.textContent = ingredientsName;
    listElements.appendChild(listItem);
}

document.body.appendChild(listElements);
