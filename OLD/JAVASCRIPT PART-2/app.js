console.log("Hello World!");
let pencilPrice = 10;
let eraser = 5;
// let output = "The total price is " + (pencilPrice+eraser)+"rupees";
let output = `The total price is ${pencilPrice + eraser} rupees.`;
console.log(output);

//Logical operators
let x = 1;
let y = 2;
let z = 3;
console.log(z > x && x > y);

//Arithmetic operators
let a = 5;
let b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a ** b);

//Unary operators
console.log(a++);
console.log(++a);

//Assignment operators
a = b;
console.log(b);

//Comparison operators
let age = 18;
console.log(age < 18);

let color = "green";
if (color == "red") {
  console.log("stop");
} else if (color == "yellow") {
  console.log("wait");
} else {
  console.log("go");
}

let popcornSize = "s";
if (popcornSize == "xl") {
  console.log("Price is Rs.250");
} else if (popcornSize == "l") {
  console.log("Price is Rs.200");
} else if (popcornSize == "m") {
  console.log("Price is Rs.1000");
} else {
  console.log("Price is Rs.50");
}

let str = "aman";
if (str[0] == "a" && str.length > 3) {
  console.log("Good String");
} else {
  console.log("Not a Good String");
}

let colour = "red";
switch (colour) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Wait");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Invalid Colour");
}

let day = 1;
switch (day) {
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("thursday");
    break;
  case 5:
    console.log("friday");
    break;
  case 6:
    console.log("saturday");
    break;
  case 7:
    console.log("sunday");
    break;
   default:
    console.log("Invalid Day");
}


alert("this is an alert");
prompt("enter your name");