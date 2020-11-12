/*
var temperature = 30;

checkTemperate(temperature);
temperature = 50;
checkTemperate(temperature);
temperature = 51;
checkTemperate(temperature);
temperature = 99;
checkTemperate(temperature);
temperature = 29;
checkTemperate(temperature);
temperature = 33;
checkTemperate(temperature);
temperature = -4;
checkTemperate(temperature);

function checkTemperate() {

    document.write('Hello, the temperature is ' + temperature)

    if (temperature >= 50) {
        document.write('Just pants and vest! THE TEMPERATURE IS ' + temperature + '!!!');

    } else if (temperature < 0) {
        document.write('Stay indside! THE TEMPERATURE IS ' + temperature + '!!!');

    } else if (temperature > 30 && temperature < 50) {
        document.write('Put on a coat! THE TEMPERATURE IS ' + temperature + '!!!');

    } else
        document.write('Put on a coat and hat! THE TEMPERATURE IS ' + temperature + '!!!');
}

Create variables for the pre-percentageAnswer total
 and the percentageAnswer percentage
Calculate the new total
Output a sentence to the page - something like:
Your total bill, with percentageAnswer, is £35.45

BONUS POINTS:
Use toFixed() to round the output to 2 decimal places
Display the percentageAnswer amount in the output as well
*/

var perentageRequired = 25;
var amountProvided = 100;
var percentageAnswer = percentageCalculator(perentageRequired, amountProvided);

var perentageRequired = 25;
var amountProvided = 200;
var percentageAnswer = percentageCalculator(perentageRequired, amountProvided);

function percentageCalculator(percentageProvided, amountProvided) {

    var percentageAnswer = percentageProvided / amountProvided * 100;
    var percentageAnswer = percentageAnswer.toFixed(2);

    document.write('amountProvided = ' + amountProvided + '. ');
    document.write('percentageProvided = ' + percentageProvided + '. ');
    document.write('percentageAnswer = ' + percentageAnswer + '. ');
    document.write('Your percentageAnswer, is ' + percentageAnswer + '. ');

    return percentageAnswer;

}