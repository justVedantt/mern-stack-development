let student = {
    name: "vedant",
    age: 21,
    eng: 98,
    mat: 90,
    phy: 91,
    getAvg(){
        let avg = (this.eng + this.mat + this.phy)/ 2;
        console.log(avg);
    }
}

const sum = (a,b) => a+b;

//Set Timeout
console.log("Hi there");

setTimeout(() => {
    console.log("my cv");
},4000);

console.log("Welcome to");

//Set Interval

// let id = setInterval(() => {
//     console.log("my cv");
// },4000);

const students = {
    name: "vedant",
    marks: 95,
    prop: this,
}

const square = (n) => n*n;
console.log(square(2));

let a = setInterval(() => {
    console.log("Hello Wordl");
}, 2000);

setTimeout(() => {
    clearInterval(a);
}, 10000);