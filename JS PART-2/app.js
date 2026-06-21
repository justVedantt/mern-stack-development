console.log("Hello World");
let a = 2;
let b = 3;
console.log("sum is :" , a+b);
// this is comment
let pencilPrice = 10;
let eraserPrice = 5;
console.log(`Total Price ${pencilPrice+eraserPrice} rupees`);

// Arithmetic Operators
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a*b);
console.log(a%b);

// Unary Operators
console.log(a++);
console.log(--a);

// Assignment Operators
let c = 10;
c += 1;
console.log(c);

// Comparison Operators
console.log(a == b);
console.log(a != b);
console.log(a > b);
console.log(a >= b);
console.log(a < b);
console.log(a <= b);

// Conditional Statements
console.log("before my if statement");
let age = 23;
if(age > 18){
    console.log("You can vote");
} else {
    console.log("You cannot vote");
}
console.log("after my if statement");

// practice question
let color = "red";
if(color == "red"){
    console.log("stop");
} else if (color == "yellow"){
    console.log("get ready");
} else {
    console.log("go");
}
