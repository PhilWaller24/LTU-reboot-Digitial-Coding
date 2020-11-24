< button id = "myBtn" > Click Me! < /button>

var button = document.getElementById("myBtn");
var sayHi = function(event) {
    alert("Hi!");
};

button.addEventListener("click", sayHi);