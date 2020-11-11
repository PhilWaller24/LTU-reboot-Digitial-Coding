/* Create variables for the pre-tip total
 and the tip percentage
Calculate the new total
Output a sentence to the page - something like:
Your total bill, with tip, is £35.45

BONUS POINTS:
Use toFixed() to round the output to 2 decimal places
Display the tip amount in the output as well
*/
var preTipTotal = 100;
var tipPercentage = 7;
var tip = tipPercentage / preTipTotal * 100
var total = preTipTotal + tip;
var bonusChallenge = total.toFixed(2);

document.write('preTipTotal = ' + preTipTotal + '. ');
document.write('tipPercentage = ' + tipPercentage + '. ');
document.write('tip = ' + tip + '. ');
document.write('Your total bill, with tip, is ' + total + '. ');
document.write('Bonus challenge using toFixed is ' + bonusChallenge + '. ');