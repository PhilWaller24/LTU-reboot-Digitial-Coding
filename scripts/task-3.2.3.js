/*
Comment and Consolde example


var firstVariable;
firstVariable = 7;
var numberOfKittens = 5;
var numberOfPuppies = 4;
var numberOfAnimals = numberOfKittens + numberOfPuppies;
numberOfAnimals = numberOfAnimals * firstVariable;

var kittensName = 'Admiral ';
kittensName += 'Snuggles';

var numberOfFruit = 6;
var typeOfFruit = 'bananas';
var allTheFruit = 'I have ' + numberOfFruit + ' ' + typeOfFruit + '!';

console.log('Hello from the console');
console.log('The value of firstVariable is');
console.log(firstVariable);
console.log('Number of animals * firstVariable is ');
console.log(numberOfAnimals);
console.log(kittensName); // Outputs 'Admiral Snuggles'
console.log(allTheFruit);

alert('Hello World Alert'); // This is a popup box
alert('The value of firstVariable is');
alert(firstVariable);
alert('Number of animals * firstVariable is ');
alert(numberOfAnimals);
alert(kittensName); // Outputs 'Admiral Snuggles'
alert(allTheFruit);

document.write('Hello World document.');
document.write('The value of firstVariable is ');
document.write(firstVariable);
document.write('Number of animals * firstVariable is ');
document.write(numberOfAnimals);
document.write(kittensName); // Outputs 'Admiral Snuggles'
document.write(allTheFruit);


function parrotFacts() {
    console.log('Some parrot species can live for over 80 years');
    console.log('Kakapos are a critically endangered flightless parrot');
}

parrotFacts();
*/

function callKitten(kittenName) {
    console.log('Come here, ' + kittenName + '!');
}


callKitten('Fluffy'); // outputs 'Come here, Fluffy!'

function addNumbers(a, b) {
    console.log(a + b);
}

addNumbers(5, 7); // outputs 12
addNumbers(9, 12); // outputs 21

function addOne(num) {
    var newNumber = num + 1;
    console.log('You now have ' + newNumber);
}

// Declare variables
var numberOfKittens = 5;
var numberOfPuppies = 4;

// Use them in functions
addOne(numberOfKittens);
addOne(numberOfPuppies);


function printFullName(firstName, surname) {
    fullName = firstName + ' ' + surname;

    document.write(fullName);
    return fullName;

}
firstName = 'Phil';
surname = 'Waller';
printFullName(firstName, surname);

document.write(' ');

firstName = 'James';
surname = 'Bond';
printFullName(firstName, surname);

function square(num) {
    return num * num;
}

document.write(square(4)); // outputs '16'

var squareOfFive = square(5); // squareOfFive equals '25'
document.write(squareOfFive);