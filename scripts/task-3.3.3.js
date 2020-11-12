var number1 = 2;
var number2 = 101;
var operator1 = '*'
var numberAnswer = calculator(number1, number2, operator1);

var number1 = 3;
var number2 = 100;
var operator1 = '+'
var numberAnswer = calculator(number1, number2, operator1);

var number1 = 100;
var number2 = 25;
var operator1 = '/'
var numberAnswer = calculator(number1, number2, operator1);

var number1 = 100;
var number2 = 99;
var operator1 = '%'
var numberAnswer = calculator(number1, number2, operator1);

var number1 = 4;
var number2 = 100;
var operator1 = '='
var numberAnswer = calculator(number1, number2, operator1);

function calculator(number1Provided, number2Provided, operatorProvided) {

    var finalAnswer = '';

    document.write('number1Provided = ' + number1Provided + '. ');
    document.write("<br>");
    document.write('number2Provided = ' + number2Provided + '. ');
    document.write("<br>");
    document.write('operatorProvided = ' + operatorProvided + '. ');
    document.write("<br>");

    switch (operatorProvided) {

        case operator = '+':

            finalAnswer = number1Provided + number2Provided;
            theMessage = 'Hello, your answer is ' + finalAnswer;

            break;
        case operator = '-':

            finalAnswer = number1Provided - number2Provided;
            theMessage = 'Hello, your answer is ' + finalAnswer;
            break;

        case operator = '*':

            finalAnswer = number1Provided * number2Provided;
            theMessage = 'Hello, your answer is ' + finalAnswer;
            break;

        case operator = '/':

            finalAnswer = number1Provided / number2Provided;
            theMessage = 'Hello, your answer is ' + finalAnswer;
            break;

        case operator = '%':

            finalAnswer = number1Provided / number2Provided;
            theMessage = 'Hello, your answer is ' + finalAnswer;
            break;

        default:

            finalAnswer = '';
            theMessage = 'Hello, you have chosen an invlaid operator of ' + operatorProvided;

    }

    document.write(theMessage);
    document.write("<br>");

    return finalAnswer;

}