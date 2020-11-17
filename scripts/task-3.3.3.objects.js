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
for (var x = 1; x <= 13; x++) {
    document.write(x + ' Times Table');
    document.write("<br>");

    for (var i = 1; i <= 13; i++) {
        document.write(i + ' * ' + x + ' = ' + i * x);
        document.write("<br>");
    }
}

// 7 times table
for (var i = 1; i <= 13; i++) {
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