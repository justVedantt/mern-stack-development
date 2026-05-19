const student = {
    name: "Vedant",
    age: 21,
    marks: 80,
    city: "bhopal",
};

const item = {
    price: 100.99,
    discount: 50,
    color: ["red", "pink"],
};

const post = {
    username: "@vedannttt",
    content: "Life is an ass , sometimes you gotta grab it",
    likes: 2200,
    repost:200,
    tags: ["ucl","laliga","uefa"],
}

const classInfo = {
    aman:{
        grade: "A+",
        city: "delhi",
    },
    vedant:{
        grade: "A",
        city: "pune",
    },
    karan:{
        grade: "O",
        city: "mumbai",
    }
}

const classinfo = [
    {
        name: "aman",
        grade: "A+",
        city: "delhi",
    },
    {
        name: "Ritu",
        grade: "A",
        city: "delhi",
    },
]


const maxNum = prompt("enter the number");
const rand = Math.floor(Math.random() * maxNum) + 1;
let guess = prompt("Guess the number");

while(true){
    if(guess == rand){
        alert("you won");
        break;
    }
    if(guess == "quit"){
        alert("you quitted the game");
        break;
    }
    else if(guess< rand){
        guess = prompt("guess was smaller");
    } else if(guess > rand){
        guess = prompt("guess was larger");
    }
}

console.log(rand);