// const doc = doctorize('mathuri')
// console.log(doc)
// function doctorize (firstName) {
//     return `Dr. ${firstName}`
// }
//------------------------------------
// Anon Function
// function (firstName) {
//     return `Dr. ${firstName}`;
// }

// function Expression

// const doctorize = function (firstName) {
//     return `Dr ${firstName}`
// }
// these are **not hoisted**, meaning javascript doesn't put them at the top of the 
// file so if a func is not defined with the functio keyword,
// and if we try to run it before it is defined (above it is definition),
// the ther's an error ad the function fails to execute.


//----Arrow functions---
// const inchToCM = inches => {
//     return inches * 2.54;
// };

// const resultcm = inchToCM(10);
// console.log(resultcm);

// const funcA = () => {
//     console.log(`HI`);
// };
// funcA();

// const add = (a, b - 3) => a + b;
// const inTocm = (inches) => inches * 2.54;

// console.log(add(100));
// console.log(inTocm(25));
// -------return an object----------
// const makeAPerson = (first, last) => ({ name: `${first} ${last}`, age:0});
// const person = makeAPerson('mathuri', 'vengat');
// console.log(person);

// (function(age) {
//     console.log( `you are cool and your age is ${age} `);

// })(30);
// paranheses run first in javascript , so we wrapped the function in {}.
// the function immediately runs.
// he argument passed here is 10 for paramter age.
const employee = {
    name: 'mathuri vengat',
    //method
    sayHi: function() {
    console.log(`Hi!!! ${this.name}`);
    return `Hi ${this.name}`;
    },
    // Arrow function
    print: () => {
    console.log('Hello employee');
    },
    // short hand method
    yellHi () {
    console.log(`Hi ${this.name.toUpperCase()}`);
    }
};
    employee.sayHi();
    employee.print();
    employee.yellHi();