/* Create variables for the pre-tip total
 and the tip percentage
Calculate the new total
Output a sentence to the page - something like:
Your total bill, with tip, is £35.45

BONUS POINTS:
Use toFixed() to round the output to 2 decimal places
Display the tip amount in the output as well
*/
var preTip = 42.99;
var tipPercentage = 12.5;
var percentageOfPreTip = (preTip * tipPercentage) / 100;
var totalPricePlusTip = preTip + percentageOfPreTip;
document.write("Hello");
document.write(totalPricePlusTip.toFixed(2));