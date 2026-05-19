//ques 1
let arr = [7,9,0,-2];
let n = 3;
let ans = arr.slice(0,n);
console.log(ans);

//ques 2
let array = [7,9,0,-2];
let m = 3;
let anss = array.reverse().slice(0,m);
console.log(anss.reverse());

//ques 3
let str = "";
if(str.length == 0){
    console.log("String is empty")
} else {
    console.log("String is not empty")
}

//ques4 
let ch = 'a';
if(ch.charCodeAt(0) >= 97 && ch.charCodeAt(0) <= 122){
    console.log("Is in lowercase")
} else{
    console.log("Is not in lowercase")
}

//ques5
let string = "    hello   ";
console.log(string.trim());

// ques6
let newarr = [1,2,4,5];
let ele = 3;
if(newarr.includes(ele)){
    console.log("It consists")
} else {
    console.log("It does not consist")
}