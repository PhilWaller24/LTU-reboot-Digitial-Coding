// Generate size of array
document.write("<br>");
var sizeOfArray = getRndInteger(6, 12);
document.write('Size of Array is ' + sizeOfArray);
document.write("<br>");

// Build array
var arrayOfNumbers = [''];
var newNumber = 0;
for (var i = 0; i <= sizeOfArray - 1; i++) {
    newNumber = getRndInteger(0, 12);
    arrayOfNumbers[i] = newNumber;
    document.write("<br>");
    document.write('Number ' + i + ' is ' + newNumber);
    document.write(' and all values = ' + arrayOfNumbers)
    document.write("<br>");
}
document.write("<br>");

// Generate random number
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Get the Total of all of the numbers
document.write("<br>");
var theMean = getMean(arrayOfNumbers);
document.write("*** The mean is " + theMean + " ***");

// Calculate total of all the numbers and the Mean
function getMean(listOfNumbers) {
    var numberOfNumbers = listOfNumbers.length;
    var totalValue = 0;
    for (var i = 0; i <= numberOfNumbers - 1; i++) {
        totalValue = totalValue + listOfNumbers[i];
    }
    document.write("<br>");
    document.write("The total of all of the numbers is " + totalValue);
    document.write("<br>");
    var theMean = totalValue / numberOfNumbers;
    document.write("The mean is " + totalValue + " / " + numberOfNumbers + " = " + theMean);
    document.write("<br>");
    return theMean;
}

// Get the Median of all of the numbers
// First sort the array
document.write("<br>");
var newSortedArray = sortNumbers(arrayOfNumbers);
document.write("<br>");

// Sort the array into ascending order and caculate the Median
function sortNumbers(listOfNumbers) {
    document.write("<br>");
    document.write("*** Sort the array ***");
    var sortedArray = listOfNumbers.sort(function(a, b) { return a - b });
    document.write('The values sorted = ' + sortedArray);
    document.write("<br>");
    return sortedArray;
}

// Calculate the Median
// var medianPosition = sortedArray / 2;
// var theMedian = sortedArray[medianPosition];
// document.write("<br>");
// document.write("*** The Median is " + sortedArray.length / 2);

// Calcuate the Mode



// Favourite recipes
var myFavouriteRecipe = {
    recipeTitle: 'Spaghetti Bolgnese',
    servings: 4,
    ingredients: ['spaghetti', 'mince', 'tomatoes'],
    directions: 'Boil water for 10 minutes...',
    letsCook: function(recipeDisplay) {
        document.write("<br>");
        document.write('I am hungry! Lets cook ...' + recipeDisplay);
        document.write("<br>");
    }
}

myFavouriteRecipe.letsCook(myFavouriteRecipe.recipeTitle);

function describeRecipe(recipe) {
    document.write("<br>");
    document.write('My favourite recipe is ' + recipe.recipeTitle);
    document.write("<br>");
    document.write(recipe.servings + ' servings');
    document.write("<br>");
    document.write('Ingredients are - ');
    document.write(' ' + recipe.ingredients);
    document.write("<br>");

    for (var i = 0; i < recipe.ingredients.length; i++) {
        document.write(recipe.ingredients[i]);
        document.write("<br>");
    }
    document.write('Directions - ' + recipe.directions);
    document.write("<br>");
    document.write("<br>");
}

describeRecipe(myFavouriteRecipe);



var jolene = {
    age: 21,
    hairColor: 'Auburn',
    talk: function() {
        document.write("<br>");
        document.write('Hello!');
        document.write("<br>");
    },
    eat: function(food) {
        document.write("<br>");
        document.write('Yum, I love ' + food);
        document.write("<br>");
    }
}

jolene.talk();
jolene.eat('pizza');

/*
var myFavouriteRecipe = {
    recipeTitle: 'Spaghetti Bolgnese',
    servings: 4,
    ingredients: ['spaghetti', 'mince', 'tomatoes'],
    directions: 'Boil water for 10 minutes...'
}

function describeRecipe(recipe) {
    document.write("<br>");
    document.write('My favourite recipe is ' + recipe.recipeTitle);
    document.write("<br>");
    document.write(recipe.servings + ' servings');
    document.write("<br>");
    document.write('Ingredients are - ');
    document.write(' ' + recipe.ingredients);
    document.write("<br>");

    for (var i = 0; i < recipe.ingredients.length; i++) {
        document.write(recipe.ingredients[i]);
        document.write("<br>");
    }
    document.write('Directions - ' + recipe.directions);
    document.write("<br>");
    document.write("<br>");
}

describeRecipe(myFavouriteRecipe);
*/
document.write("<br>");
var jolene = {
    age: 21,
    hairColor: 'Auburn',
    likes: ['pizza', 'tacos'],
    birthday: { month: 3, day: 14, year: 1995 }
}

function describeUser(user) {
    document.write('You are ' + user.age + ' years old with ' + user.hairColor + ' hair.');
}
describeUser(jolene);


var users = [
    { name: 'Jolene', age: 21 },
    { name: 'Alexa', age: 18 }
];
for (var i = 0; i < users.length; i++) {
    var user = users[i];
    document.write("<br>");
    document.write(user.name + ' is ' + user.age + ' years old.');
}
document.write("<br>");

var user = {
    hometown: 'Colchester',
    hair: 'Auburn'
};
user.hair = 'blue';

// user.married = true;

// Delete user.married;

var user = {
    hometown: 'Colchester',
    hair: 'Auburn',
    likes: ['knitting', 'code'],
    birthday: { month: 10, day: 17 }
};

var user = {
    hometown: 'Colchester',
    hair: 'Auburn'
};
var usersHometown = user.hometown;

var usersHair = user['hair'];


var rainbowColors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];
for (var i = 0; i < rainbowColors.length; i++) {
    document.write(rainbowColors[i]);
    document.write("<br>");

}


// Food
var myFavoriteFood = ['Broccoli', 'Cheese', 'Tomatoes', 'Oranges'];
var numberOfFoods = myFavoriteFood.length;
document.write("Number of foods = " + numberOfFoods);
document.write("<br>");

for (var i = 1; i < numberOfFoods + 1; i++) {
    document.write(i - 1 + '. ' + myFavoriteFood[i - 1]);
    document.write("<br>");

}


var rainbowColors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];
var lotteryNumbers = [33, 72, 64, 18, 17, 85];
var myFavoriteThings = ['Broccoli', 1024, 'Sherlock'];

var rainbowColors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];
document.write(rainbowColors.length);

var rainbowColors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];
var firstColor = rainbowColors[0];
var lastColor = rainbowColors[6];

var myFavoriteThings = ['Broccoli', 1024, 'Sherlock'];
myFavoriteThings[0] = 'Asparagus';

var myFavoriteThings = ['Broccoli', 1024, 'Sherlock'];
myFavoriteThings.push('Dancing');

document.write("<br>");
// all times tables
for (var x = 1; x <= 12; x++) {
    document.write(x + ' Times Table');
    document.write("<br>");

    for (var i = 1; i <= 12; i++) {
        document.write(i + ' * ' + x + ' = ' + i * x);
        document.write("<br>");
    }
}

// 7 times table
for (var i = 1; i <= 12; i++) {
    document.write(i + ' * 7 = ' + i * 7);
    document.write("<br>");
}

// Count from 1 to 100
for (var i = 1; i <= 100; i++) {
    document.write("<br>");
    if (i % 3 === 0) {
        // Says 'Fizz' after multiples of three
        document.write(' Fizz');
    } else if (i % 5 === 0) {
        // Says 'Buzz' after multiples of five
        document.write(' Buzz');
    } else {
        document.write(i);
    }
}

// will count 1 to 10
for (var i = 1; i <= 10; i++) {
    document.write(i);
    document.write("<br>");
}

var bottlesOfBeer = 99;
while (bottlesOfBeer > 0) {
    document.write(bottlesOfBeer + ' bottles of beer on the wall');
    document.write("<br>");
    bottlesOfBeer = bottlesOfBeer - 1;
}