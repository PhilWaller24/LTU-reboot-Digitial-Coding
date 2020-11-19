// Generate size of array
document.write("<br>");
var sizeOfArray = getRndInteger(6, 12);
document.write('Number of items in basket is ' + sizeOfArray);
document.write("<br>");

// Build array
var arrayOfNumbers = [''];
var newNumber = 0;
for (var i = 0; i <= sizeOfArray - 1; i++) {
    newNumber = getRndInteger(0, 12);
    arrayOfNumbers[i] = newNumber;
    document.write("<br>");
    document.write('Item ' + i + ' costs ' + newNumber);
    document.write(' and all  in basket are = ' + arrayOfNumbers)
    document.write("<br>");
}
document.write("<br>");

// Generate random number
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

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

/* SHOPPING BASKET CODE
// ************************************************
// Shopping Cart API
// ************************************************

var shoppingCart = (function() {
  // =============================
  // Private methods and propeties
  // =============================
  cart = [];
  
  // Constructor
  function Item(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
  }
  
  // Save cart
  function saveCart() {
    sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
  }
  
    // Load cart
  function loadCart() {
    cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
  }
  if (sessionStorage.getItem("shoppingCart") != null) {
    loadCart();
  }
  

  // =============================
  // Public methods and propeties
  // =============================
  var obj = {};
  
  // Add to cart
  obj.addItemToCart = function(name, price, count) {
    for(var item in cart) {
      if(cart[item].name === name) {
        cart[item].count ++;
        saveCart();
        return;
      }
    }
    var item = new Item(name, price, count);
    cart.push(item);
    saveCart();
  }
  // Set count from item
  obj.setCountForItem = function(name, count) {
    for(var i in cart) {
      if (cart[i].name === name) {
        cart[i].count = count;
        break;
      }
    }
  };
  // Remove item from cart
  obj.removeItemFromCart = function(name) {
      for(var item in cart) {
        if(cart[item].name === name) {
          cart[item].count --;
          if(cart[item].count === 0) {
            cart.splice(item, 1);
          }
          break;
        }
    }
    saveCart();
  }

  // Remove all items from cart
  obj.removeItemFromCartAll = function(name) {
    for(var item in cart) {
      if(cart[item].name === name) {
        cart.splice(item, 1);
        break;
      }
    }
    saveCart();
  }

  // Clear cart
  obj.clearCart = function() {
    cart = [];
    saveCart();
  }

  // Count cart 
  obj.totalCount = function() {
    var totalCount = 0;
    for(var item in cart) {
      totalCount += cart[item].count;
    }
    return totalCount;
  }

  // Total cart
  obj.totalCart = function() {
    var totalCart = 0;
    for(var item in cart) {
      totalCart += cart[item].price * cart[item].count;
    }
    return Number(totalCart.toFixed(2));
  }

  // List cart
  obj.listCart = function() {
    var cartCopy = [];
    for(i in cart) {
      item = cart[i];
      itemCopy = {};
      for(p in item) {
        itemCopy[p] = item[p];

      }
      itemCopy.total = Number(item.price * item.count).toFixed(2);
      cartCopy.push(itemCopy)
    }
    return cartCopy;
  }

  // cart : Array
  // Item : Object/Class
  // addItemToCart : Function
  // removeItemFromCart : Function
  // removeItemFromCartAll : Function
  // clearCart : Function
  // countCart : Function
  // totalCart : Function
  // listCart : Function
  // saveCart : Function
  // loadCart : Function
  return obj;
})();


// *****************************************
// Triggers / Events
// ***************************************** 
// Add item
$('.add-to-cart').click(function(event) {
  event.preventDefault();
  var name = $(this).data('name');
  var price = Number($(this).data('price'));
  shoppingCart.addItemToCart(name, price, 1);
  displayCart();
});

// Clear items
$('.clear-cart').click(function() {
  shoppingCart.clearCart();
  displayCart();
});


function displayCart() {
  var cartArray = shoppingCart.listCart();
  var output = "";
  for(var i in cartArray) {
    output += "<tr>"
      + "<td>" + cartArray[i].name + "</td>" 
      + "<td>(" + cartArray[i].price + ")</td>"
      + "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-name=" + cartArray[i].name + ">-</button>"
      + "<input type='number' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
      + "<button class='plus-item btn btn-primary input-group-addon' data-name=" + cartArray[i].name + ">+</button></div></td>"
      + "<td><button class='delete-item btn btn-danger' data-name=" + cartArray[i].name + ">X</button></td>"
      + " = " 
      + "<td>" + cartArray[i].total + "</td>" 
      +  "</tr>";
  }
  $('.show-cart').html(output);
  $('.total-cart').html(shoppingCart.totalCart());
  $('.total-count').html(shoppingCart.totalCount());
}

// Delete item button

$('.show-cart').on("click", ".delete-item", function(event) {
  var name = $(this).data('name')
  shoppingCart.removeItemFromCartAll(name);
  displayCart();
})


// -1
$('.show-cart').on("click", ".minus-item", function(event) {
  var name = $(this).data('name')
  shoppingCart.removeItemFromCart(name);
  displayCart();
})
// +1
$('.show-cart').on("click", ".plus-item", function(event) {
  var name = $(this).data('name')
  shoppingCart.addItemToCart(name);
  displayCart();
})

// Item count input
$('.show-cart').on("change", ".item-count", function(event) {
   var name = $(this).data('name');
   var count = Number($(this).val());
  shoppingCart.setCountForItem(name, count);
  displayCart();
});

displayCart();




*/



// Favourite recipes
var myFavouriteRecipe = {
    recipeTitle: 'Spaghetti Bolgnese',
    servings: 4,
    ingredients: ['spaghetti', 'mince', 'tomatoes'],
    directions: 'Boil water for 10 minutes...',
    letsCook: function(recipeDisplay) {
        document.write("<br>");
        document.write('I am hungry! Lets cook ...' + recipeDisplay);
        document.write("<br>");
    }
}

myFavouriteRecipe.letsCook(myFavouriteRecipe.recipeTitle);

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
    talk: function() {
        document.write("<br>");
        document.write('Hello!');
        document.write("<br>");
    },
    eat: function(food) {
        document.write("<br>");
        document.write('Yum, I love ' + food);
        document.write("<br>");
    }
}

jolene.talk();
jolene.eat('pizza');

/*
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
*/
document.write("<br>");
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

// Favourite recipes
var myFavouriteRecipe = {
    recipeTitle: 'Spaghetti Bolgnese',
    servings: 4,
    ingredients: ['spaghetti', 'mince', 'tomatoes'],
    directions: 'Boil water for 10 minutes...',
    letsCook: function(recipeDisplay) {
        document.write("<br>");
        document.write('I am hungry! Lets cook ...' + recipeDisplay);
        document.write("<br>");
    }
}

myFavouriteRecipe.letsCook(myFavouriteRecipe.recipeTitle);

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
    talk: function() {
        document.write("<br>");
        document.write('Hello!');
        document.write("<br>");
    },
    eat: function(food) {
        document.write("<br>");
        document.write('Yum, I love ' + food);
        document.write("<br>");
    }
}

jolene.talk();
jolene.eat('pizza');

/*
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
*/
document.write("<br>");
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