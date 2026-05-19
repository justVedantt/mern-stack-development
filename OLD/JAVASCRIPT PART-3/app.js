let pass = prompt("set your pass");
let newpass = pass.trim();
console.log(alert(newpass));
console.log(newpass.toUpperCase());


let a = "iloveguitar";
let b = a.indexOf("love");
console.log(b);

let msg = "  hello   ";
let newmsg = msg.trim().toUpperCase();
console.log(newmsg);

let str = "hello";
console.log(str.slice(1,4));
console.log(str.slice(0));

let amp = "ilovesongs";
console.log(amp.replace("songs","guitar"));
console.log(amp.repeat(2));

let msg1 = "    help";
console.log(msg1.trim().toUpperCase());

let students = ["ram", "shyam", "ghanshyam"];
console.log(students);

let info = ["ved", 20, 7.7];
console.log(info);

let cars = ["audi","bmw"];
cars.push("toyota");
console.log(cars);
cars.pop();
console.log(cars);

let months = ["january","july","march","august"];
months[0] = "july";
months[1] = "june";
console.log(months);
console.log(months.indexOf("june"));
console.log(months.includes("august"));
console.log(cars.concat(months));
console.log(months.reverse());
console.log(months.slice(1));

let start = ["january", "july", "march", "august"];
console.log(start);
start.splice(0,2,"july","june");
console.log(start);

let languages = ["c","c++", "html", "javascript","python","java","c#","sql"];
console.log(languages.reverse().indexOf("javascript"));
