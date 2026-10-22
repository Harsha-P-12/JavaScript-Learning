// Primitive Datatypes

let age = 25;
let city = "Banglore";
console.log(typeof age); // number
console.log(typeof city); //string

console.log(`My age is ${age} and I live in ${city}.`);

let isLoggedIn = true;
console.log(typeof isLoggedIn);  // "boolean"

let score;
console.log(score);        // undefined
console.log(typeof score); // "undefined"
console.log(typeof undefined); //undefined


let selectedUser = null;
console.log(selectedUser); // null
console.log(typeof null); //object

let bigNumber = 123456789012345678901234567890n;
console.log(typeof bigNumber); // "bigint"


//Symbol cretaes a unique value, often used as a unique property key in objects.
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 === id2); // false



//Non-Primitive dataypes


//objects --> key:value pairs
let student = {
    name: "Harsha",
    age: 22,
    isPlaced: false
};

console.log(student.name); // Harsha
console.log(student.age);  // 22
console.log(typeof student); // "object"

let marks = [85, 90, 78, 95];
console.log(marks);

function add(a, b) {
    return a + b;
}


console.log(add(10, 20)); // 30
console.log(typeof add);  // "function"
