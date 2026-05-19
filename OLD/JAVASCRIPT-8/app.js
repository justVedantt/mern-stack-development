let arr = [
    {
    name: "vedant",
    age: 21,
    },
    {
    name: "chitru",
    age: 12
    }
];

arr.forEach((student) => {
    console.log(student.age);
})


let num = [1,2,3];
let doubleNum = num.map((el)=>{
    return el*2;
});

let nums = [1,2,3,4,5,6,7,8,9];
let ans = nums.filter((el) => {
    return el%2 == 0;
});

let num1 = [10,20,30,40,50];
let ans1 = num1.every((el) => el%2 == 0);
console.log(ans1);

let arr1 = [1,2,3,4,5,0]
console.log(Math.min(...arr1));

let arr2 = [1,2,3,4,5,6];
let newArr = [...arr2];
console.log(newArr);

//rest
function sum(...args){
    return args.reduce((add,el) => add+el);
}