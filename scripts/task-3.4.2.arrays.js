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