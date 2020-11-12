var typeOfDrink = 30;


typeSelected = 'Cola';
sizeSelected = 'Small';
drinkSelection(typeSelected, sizeSelected);

typeSelected = 'Cola';
sizeSelected = 'Small';
drinkOrder(typeSelected, sizeSelected);

function drinkSelection(typeOfDrink, sizeOfDrink) {

    document.write('Hello, you have chosen a type of ' + typeOfDrink + '!');
    document.write('Hello, you have chosen a size of ' + sizeOfDrink + '!');
    document.write('You have ordered a ' + typeOfDrink + ' of ' + sizeOfDrink + '!!!');
}

function calculator(typeOfDrink, sizeOfDrink) {
    document.write('Hello, you have chosen a type of ' + typeOfDrink + '!');
    document.write('Hello, you have chosen a size of ' + sizeOfDrink + '!');
    document.write('You have ordered a ' + typeOfDrink + ' of ' + sizeOfDrink + '!!!');
}

function drinkCaseSelection(typeOfDrink, sizeOfDrink) {

    switch (typeOfDrink) {

        case 'Cola':

            document.write('Hello, you have chosen a type of ' + typeOfDrink + '!');

            break;
        case 'Lemonade':

            document.write('Hello, you have chosen a type of ' + typeOfDrink + '!');

            break;

        case 'Orangeade':

            document.write('Hello, you have chosen a type of ' + typeOfDrink + '!');

            break;

        default:


    }
}


function drinkOrder(drink, size) {

    // can remove case issue as follows
    // convert to lowercase or uppercase before check
    // for lower case use 
    // var drinkLowerCase = drink.toLowerCase(); - but will need to use a new variable as changing value

    switch (drink) {

        case 'Cola':
            //code goes here
            document.write('Luke says, you have chosen a type of ' + size + ' ' + drink + '!');
            break;
        case 'Lemonade':
            document.write('Luke says, you have chosen a type of ' + size + ' ' + drink + '!');
            break;
        case 'Orangeade':
            document.write('Luke says, you have chosen a type of ' + size + ' ' + drink + '!');
            break;
        default:
            //code goes here
            document.write('Luke says, you have chosen a type of ' + size + ' ' + drink + '!');
            document.write('Luke says, invalid type of ' + drink + '!');
            break;

    }


}