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

// practice question 2
let popcornSize = 'M';
if(popcornSize == 'XL'){
    console.log("price is Rs 250");
} else if (popcornSize === 'L'){
    console.log("price is Rs 200");
} else if (popcornSize === 'M'){
    console.log('price is Rs 100');
} else if (popcornSize === 'S'){
    console.log('price is Rs 50');
}

//Logical operators
let marks = 90;
if (marks > 80 && marks < 100){
    console.log("A grade");
} else {
    console.log("repeat");
}

// practice question 3
let str = "apple";
if(str[0] == 'a' && str.length > 3){
    console.log("good string");
}

// truthy and falsy values
if (true){
    console.log("this is true");
} else {
    console.log("this is false");
}

// switch statement
let colour = "green";
switch(colour){
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("get ready");
        break;
    case "green":
        console.log("go");
        break;
    default:
        console.log("invalid color");
    
}

let days = 3;
switch(days){
    case 1:
        console.log("Mon");
        break;
        case 2:
            console.log("Tue");
            break;
        case 3:
            console.log("Wed");
            break;
        case 4:
            console.log("Thu");
            break;
        case 5:
            console.log("Fri");
            break;
        case 6:
            console.log("Sat");
            break;
        case 7:
            console.log("Sun");
            break;
        default:
            console.log("invalid day");
}

// alert("something went worng!");
console.error("This is an error message");
console.warn("This is a warning message");

