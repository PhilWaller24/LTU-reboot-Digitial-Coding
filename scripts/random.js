// Generate size of array
document.write("<br>");
var sizeOfArray = getRndInteger(1, 12);
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
    var paragraph = document.querySelector('p');
    paragraph.style.background.fontcolor = 'yellow'; // DOESNT CHANGE COLOUR
}
document.write("<br>");


// Generate random number
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}