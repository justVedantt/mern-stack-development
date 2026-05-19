//ques 1
let arr = [1,2,3,4,5,6,2,3];
let num = prompt("Enter the num");
for(let i = 0; i < arr.length; i++){
    if(arr[i] == num){
        arr.splice(i,1);
    }
}
console.log(arr);

//ques 2
let digits  = 287152;
let count =0;
while (digits % 10 != 0){
    count++;
    digits = Math.floor(digits / 10);
}
console.log(count);

//ques 3
let number = 287152;
let sum = 0;
while (number != 0){
    let lastDigit = number % 10;
    sum += lastDigit;
    number = Math.floor(number / 10);
    }
    console.log(sum);

//ques 4
let factorial = 7;
let fact = 1;
while(factorial != 1){
    fact *= factorial;
    factorial--;
}
console.log(fact);

// ques 5
let array = [1,2,3,4,5];
let max = 0;
for(ar of array){
    if(ar > max){
        max = ar;
    }
} 
console.log(max);
