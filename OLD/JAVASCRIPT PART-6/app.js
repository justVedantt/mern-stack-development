function print1to5(){
    for(let i = 0; i< 6; i++){
        console.log(i);
    }
}
print1to5();

function poem(){
    console.log("Twinkle twinkle littlte star...")
}

poem();

function dice(){
    let random = Math.floor(Math.random() * 6)+1;
    console.log(random);
}
dice();

function name(name){
    console.log(name);
}
name("Vedant");

function average(num1,num2,num3){
    let avg = (num1+num2+num3) / 2
    console.log(avg);
}
average(1,2,3);

function table(num){
    for(let i = 1; i <= 10; i++){
        console.log(num + " * " + i + " = " + num * i);
    }
}
table(2);

function getSum(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++){
        sum += i;
    }
    return sum;
}

let str = ["hi","hello", "bye","goodbye"];
function concat(str){
    let result ="";
    for(let i = 0; i < str.length; i++){
        result += str[i];
    }
    return result;
}
console.log(concat(str));

let sum = function(a,b){
    return a + b;
}
console.log(sum(2,3));

const calculator = {
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    }
}