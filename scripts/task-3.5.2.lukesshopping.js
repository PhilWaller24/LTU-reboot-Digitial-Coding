let shoppingCart = [{
        name: "loaf of bread",
        type: "food",
        quantity: 1,
        price: .85
    },
    {
        name: "multipack beans",
        type: "food",
        quantity: 1,
        price: 1
    },
    {
        name: "mushrooms",
        type: "food",
        quantity: 10,
        price: .1
    },
    {
        name: "can of beer",
        type: "alcohol",
        quantity: 4,
        price: 1.1
    },
    {
        name: "prosecco",
        type: "alcohol",
        quantity: 1,
        price: 8.99
    },
    {
        name: "steak",
        type: "food",
        quantity: 2,
        price: 3.99
    },
    {
        name: "blue cheese",
        type: "food",
        quantity: 1,
        price: 2.99
    },
    {
        name: "candles",
        type: "home",
        quantity: 3,
        price: 1.99
    },
    {
        name: "cheesecake",
        type: "food",
        quantity: 1,
        price: 4.99
    },
    {
        name: "onions",
        type: "food",
        quantity: 3,
        price: .4
    }
];

/*

// Get the Total of all of the numbers
document.write("<br>");
var totalPrice = getTotalPrice(arrayOfNumbers);
document.write("*** The total cost of the items in the basked is " + totalPrice + " ***");
document.write("<br>");

// Calculate total of all the numbers and the Mean
function getTotalPrice(listOfNumbers) {
    var numberOfNumbers = listOfNumbers.length;
    var totalValue = 0;
    for (var i = 0; i <= numberOfNumbers - 1; i++) {
        totalValue = totalValue + listOfNumbers[i];
    }
    document.write("<br>");
    return totalValue;
}
*/

function shoppingCartTotalPrice(arr) {

    var totalPrice = 0;

    for (var index = 0; index < arr.length; index++) {

        unitPrice = arr[index].price;

        if (arr[index].type = 'Food') {

            unitPrice = unitPrice * 0.8;
        }

        totalPrice = totalPrice + (unitPrice * arr[index].quantity);

    }

    return totalPrice.toFixed(2);

}


document.write("<br>");
document.write("Shopping Cart");
document.write("<br>");

//document.write (shoppingCartTotalPrice(shoppingCart);

var theTotalPrice = shoppingCartTotalPrice(shoppingCart);

document.write("Total price is " + theTotalPrice);

document.write("<br>");