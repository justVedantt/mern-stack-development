//ques 1
let num = 20;
if (num % 10 == 0) {
  console.log("good");
} else {
  console.log("bad");
}

//ques 2
let name = prompt("Enter your name :");
let age = prompt("Enter your age :");
alert(`${name} is ${age} years old`);

//ques 3
let quarter = 1;
switch (quarter) {
  case 1:
    console.log("January , February, March");
    break;
  case 2:
    console.log("April,May,june");
    break;
  case 3:
    console.log("July, August, September");
    break;
  case 4:
    console.log("October, November, December");
    break;
  default:
    console.log("Invalid quarter");
}

//ques 4
let str = "april";
if((str[0] == 'a' || str[0] == 'A') && str.length > 5){
    console.log("String is Golden");
} else {
    console.log("Not golden");
}

//ques 5
let a = 1;
let b = 2;
let c = 3;
if(a > b){
    if(a>c){
        console.log("a is greater");
    }else{
        console.log("c is greater");
    }
}else{
    if(b>c){
        console.log("b is greater");
    }else{
        console.log("c is greater");
    }
}

//ques 6
let num1 = 32;
let num2 = 47852;
if(num1[num1.length-1] == num2[num2.length - 1]){
    console.log("Have same last digit");
} else {
    console.log("Not same digit");
}