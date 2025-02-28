"use strict";

(function () {
  console.clear();
})();
//  Javascript is used to program the behavior of web pages

//  Used to manipulate data and change HTML and CSS it is language of web

// JavaScript uses the Unicode character set.

/*
Multi-line Comment
*/

// Variables are containers for storing values.

const dataTypes = [
  "Numbers",
  "Strings",
  "Boolean",
  "BigINT",
  "Object",
  "Symblol",
  "undefined",
  "null",
];

for (const dataType of dataTypes) {
  // console.log(dataType)
}

// console.log(`Javascript numbers are always one type: double (64-bit floating point).`);

// console.log(`BigINT stores values that cannot be stored in normal js Number`);

let x = BigInt(123456789012345678901234567890);

// console.log(x);
// console.log(typeof x);

// console.log(typeof dataTypes);

function randomFunc() {
  let x = BigInt(123456789012345678901234567890);

  console.log(x);
  if (x === BigInt) return;
  console.log(typeof x);
  console.log(typeof dataTypes);
}

var carType = null;
// console.log(carType);

if (true) {
  carType = "New Model";
  // console.log(carType);
}

// console.log(carType);

// console.log(`Primitive types (e.g., numbers, strings) store their value directly in the variable.
// Reference types (e.g., objects, arrays) store a reference (memory address) to the value
// `);

const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

// console.log(person.fullName());

const arr1 = Object.values(person);
const arr2 = Object.keys(person);
const arr3 = Object.entries(person);

// console.log('Array 1: ', arr1);
// console.log('Array 2: ', arr2);
// console.log('Array 3: ', arr3);

function Car(name, model, company, fuelAvg) {
  this.name = name;
  this.model = model;
  this.company = company;
  this.fuelAvg = fuelAvg;
  this.Details = function () {
    console.log(this);
    console.log(
      `${this.name} ${this.model} of ${this.company} has fuel Average of ${this.fuelAvg}`
    );
  };
}

const car1 = new Car("Civic", 2020, "Honda", 13.4);

// console.log(car1 instanceof Car);

// console.log(typeof car1.Details);

// for( key in car1){

//   if(typeof car1[key] == "function" ){
// console.log('There is a func in Object');
//   car1[key]()
//   return
// }
// console.log(key);

// console.log(`${key}: ${car1[key]}`)
// }

// car1.Details()
const car2 = new Car("City", 2023, "Honda", 19.7);
// car1.Details()

const value = "asdfasdf";
// console.log(value.charAt(9));

let text = "Apple, Banana, Kiwi";
// console.log(text.slice(7, 13))
// console.log(text.split(7, 13))

// console.log(`Comparing two JavaScript objects always returns false.`);

let y = 123;
// console.log(x.valueOf())
// console.log((123).valueOf())
// console.log((100 + 23).valueOf())

const arrVsObj = `In JavaScript, arrays use numbered indexes.  

In JavaScript, objects use named indexes.

Arrays are a special kind of objects, with numbered indexes.`;

const array = new Array(30);

// array.forEach((item) => {
//   console.log(item)
// })
// console.log(array.length);

const points = [40, 100, 1, 5, 25, 10];

// console.log(points.sort((a,b)=>a-b));

const date = new Date("2025", "1", "23");
// console.log(date);

const date2 = Date.now();
// console.log(date2);

const date3 = new Date("2025");
// console.log(date3);
// console.log(date3.getMonth())
// console.log(date3.getDate())
// console.log(date3.getHours())

// function randomFunc() {
//   let num = Math.floor(Math.random() * 10 ) + 1;
//   console.log(num);
// num *= 11;
// console.log(num);
// num = Math.floor(num)
// console.log(num);
// num ++;
// console.log(num);
// return num
// }

// const randomNums = []
// for (let i = 0; i < 11; i++) {
//   console.log(`Iteration: ${i}`);
//   randomNums.push(randomFunc())
// }

// console.log(randomNums);

const userName = "";
const defaultUserName = "Anonymous";

const currUser = userName || defaultUserName;

// console.log(currUser);

// console.log(`For in is used for Objects
// For of is used for Strings and Arrays
// `);

const mySet = new Set(["a", "b", "c"]);

const keys = mySet.keys();
const values = mySet.values();

// console.log(keys, values);

// for ( letter of mySet){
//   console.log(letter)
// }

// mySet.forEach((item, value, arr) => (console.log(item, value, arr)))

const myMap = new Map([
  ["a", 100],
  ["b", 150],
  ["c", 200],
]);

// console.log(myMap.get('b'));
// console.log(myMap.size);
// console.log(`Values: ${myMap.values()}`);
// console.log(`Keys: ${myMap.keys()}`);
// console.log(`Entries: ${myMap.entries()}`);

// console.log(car1.constructor);

const [datatype1, datatype2] = dataTypes;
// console.log(datatype1, datatype2);

const { model: carModel, company: carCompany } = car1;

// console.log(carModel, carCompany);

function divideBy5(num) {
  try {
    let x = 5;
    if (num == 0) throw "Number can't be zero";
    else if (num >= 50) throw "Greater Than 50";
    else return num / 5;
  } catch (error) {
    console.log(error);
  } finally {
    console.log(`Code has been executed`);
  }
}

// divideBy5(0)
// divideBy5(55)
// console.log(divideBy5(40));

let text2 =
  '{ "employees" : [' +
  '{ "firstName":"John" , "lastName":"Doe" },' +
  '{ "firstName":"Anna" , "lastName":"Smith" },' +
  '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const result = JSON.parse(text2);

// console.log(result);

class Person {
  constructor(firstName, lastName, Age, profession) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.Age = Age;
    this.profession = profession;
    this.nationality = "Germen";
  }

  get details() {
    console.log(
      `Hi Mr.${this.firstName} ${this.lastName}. Your Age is ${this.Age} and profession is ${this.profession}. Nationality: ${this.nationality}`
    );
  }
}

class Teacher extends Person {
  constructor(
    firstName,
    lastName,
    Age,
    profession,
    subject,
    grade,
    noOfStudents
  ) {
    super(firstName, lastName, Age, profession);
    this.grade = grade;
    this.subject = subject;
    this.noOfStudents = noOfStudents;
  }
  get details() {
    super.details;
    console.log(
      `Your Subject is: ${this.subject} and your teaching grade is ${this.grade}. Your are currently monitering ${this.noOfStudents} students`
    );
  }
}

const nadeem = new Teacher("Nadeem", "Taj", 47, "Teacher", "ICO", 17, 23);
// nadeem.details

const hamza = new Person("Hamza", "Aamir", 22, "Software Engineer");

Object.defineProperty(hamza, "professionAndName", {
  get: function () {
    console.log(
      `Name: ${this.firstName} ${this.lastName} \nProfession: ${this.profession}`
    );
  },
});

// console.log(Object.values(hamza));
// console.log(Object.keys(hamza));
// console.log(Object.entries(hamza));

// console.log(Object.getOwnPropertyNames(hamza))

// console.log(Object.getOwnPropertyNames(Person))

// hamza.professionAndName

function args(arg1 = "a", arg2 = "b") {
  console.log(arguments);
}
// args("hellow", "weriuo")

function printDataTypes() {
  for (const dataType in dataTypes) {
    console.log(dataTypes[dataType]);
  }
}

// printDataTypes()

/**************************************** Clousers ****************************************/

function createCounter() {
  let counter = 0;

  return {
    increment: function () {
      counter++;
      console.log(`Counter: ${counter}`);
    },
    decrement: function () {
      counter--;
      console.log(`Counter: ${counter}`);
    },
  };
}

const counter = createCounter();

function createMultiplier(x) {
  const num = x;
  return function (y) {
    console.log(`X: ${x} Y: ${y}`);
    console.log(x * y);
  };
}

const multiply = createMultiplier(4);

// multiply(5)
// multiply(6)
// multiply(9)

/**************************************** Callbacks ****************************************/

function processArray(numbers, filterArr, mulBy2) {
  let arr = numbers.filter(filterArr);
  arr = arr.map(mulBy2);
  return arr;
}

const filterArr = (x) => x % 2 == 0;
const mulBy2 = (x) => x * 2;
const numbers = [1, 2, -3, 4, -5, 6, 10, 8, 9];

// console.log(processArray(numbers, filterArr, mulBy2))

function sumWithDelay(arr, callback, delaySeconds) {
  const sum = arr.reduce(callback);
  setTimeout(() => {
    console.log(`Sum: ${sum}`);
  }, delaySeconds);
}

const sumOfArr = (total, value) => total + value;

// sumWithDelay(numbers, sumOfArr, 2000)

function testTimeOut() {
  setTimeout(() => {
    console.log(`Executed after 1sec`);
  }, 1000);
  for (let i = 0; i < 20; i++) {
    console.log(i);
  }
}

// testTimeOut()

const mixedArr = [1, "A", 23.53, null, { name: "ABC" }];
mixedArr.sort();
// console.log(mixedArr);
// console.log(mixedArr.toReversed());
// console.log(`Length: ${mixedArr.length}`);

// export { mixedArr };

const str = "www/w3schools/js/functions/parameters/defaultparameters";

const strArr = str.split("/");
// console.log(strArr.join())
// console.log(strArr);

for (text of strArr) {
  //   console.log(text);
}

// console.log('');

for (text in strArr) {
  //   console.log(strArr[text]);
}

const repeatingArr = [1, 2, 1, 3, 2, 4, 3, 5, 4, 6, 5];
// console.log(repeatingArr);

const uniqueArr = [...new Set(repeatingArr)];
// console.log(uniqueArr);

const set1 = new Set();
set1.add(1);
set1.add(1);
set1.add(1);
set1.add(1);
// console.log(set1);

let string = "This is a String with repeated characters";
string = string.split(" ");
// console.log(string);

const strSet = new Set(...string);
// console.log(strSet);

const arr4 = [1, 2, 3, 4, [99, 89, 34]];
const arr5 = [5, 6, 7, 8];

const arr6 = [...arr4, ...arr5];

// console.log(`Combined Array: ${arr6}`);

arr4[4][1] = "Altered Value";

// console.log(`Altering on Arr: ${arr6}`);

function testingThis() {
  console.log(this);
}
// testingThis()
// console.log(this)

// setTimeout(() => {
// console.log(this)
// }, 1000);

// testingThis();

const obj1 = {
  name: "John Doe",
  rollNo: 34234,
  skills: {
    1: "html",
    2: "css",
    3: "js",
    4: "ts",
  },
};

obj1["skills"][1] = "HTML";

// console.log(obj1);

const obj2 = {};

Object.assign(obj2, obj1);

// console.log(obj2);

// console.log(Object.getOwnPropertyNames(obj1));

// console.log(Object.getOwnPropertyDescriptors(obj1));

// shows Ojbect prototype
// console.log(`Prototype of Obj2: ${Object.getPrototypeOf(obj2)}`)

function testingPromises() {
  new Promise((resolve, reject) => {
    const dbConnected = true;

    if (dbConnected) {
      setTimeout(() => {
        console.log(`Database connneccted Successfully`);
        resolve("Success");
      }, 1000);
    } else {
      reject("Failure: Failed to Connect With Database. Try Again");
    }
  })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

// testingPromises()

function getGitHubInfo() {
  fetch("https://api.github.com/users/ahmedm2002")
    .then((result) => result.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

// getGitHubInfo()

// console.log('I was Executed before Fetch');

const func = function () {
  console.log("Test function default return");
  return;
};

// console.log(func)
// func()

let fruits = "Apple, Banana, Kiwi";
let part1 = fruits.slice(7, 13);
// console.log(fruits, part1)

let price = "534";

price = price.padEnd(1, ".");
price = price.padEnd(3, "0");

// console.log(price)

// console.log(Number.MIN_VALUE)
// console.log(Number.MAX_VALUE)

function func1() {
  console.log("Function 1");
}

function func2() {
  console.log("Function 2");
}

function func3() {
  console.log("Function 3");
}

const funcsArr = [];
funcsArr.push(func1);
funcsArr.push(func2);
funcsArr.push(func3);

// console.log(funcsArr)

function callFuncs() {
  for (const func of funcsArr) {
    console.log(func);
    console.log(typeof func);
    func();
  }
}

// callFuncs()

String.prototype.reverString = function () {
  const length = this.length - 1;
  let reversedString = "";

  for (let i = length; i >= 0; i--) {
    reversedString += this[i];
  }
  return reversedString;
};

// console.log('Ahmed'.length)

const userName1 = "Ahmed";
// console.log(userName1.reverString())

const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const newArr = myArr.flat();

// console.log(myArr)
// console.log(newArr)

function divide(x, y) {
  try {
    if (x == 0 || y == 0) throw new Error("Number can't be zero");
    console.log(x / y);
  } catch (error) {
    console.log(error);
  }
}

// divide(2,0)

// console.log('After throw statement outside func')

Array.prototype.reverseArr = function () {
  const newArr = [];
  const length = this.length - 1;
  for (let i = length; i >= 0; i--) {
    newArr.push(this[i]);
  }
  return newArr;
};

const oddNums = [1, 3, 5, 7, 9, 11, 13];
const reverseOddNums = oddNums.reverseArr();

// console.log(reverseOddNums)

function* generatorRandNum() {
  yield { value: `This is first value ${Math.floor(Math.random() * 10)}` };
  yield { name: "ahmed", rollNo: 15 };
  yield { name: "ali", rollNo: 20 };
  yield { name: "hamza", rollNo: 30 };
}

function yieldFunc() {
  const generate = generatorRandNum();

  console.log(generate.next());
  console.log(generate.next());
  console.log(generate.next());
  console.log(generate.next());
  console.log(generate.next());
}

// yieldFunc()

class DummyClass {
  constructor(name) {
    this.name = name;
    DummyClass.objectsCreated++;
  }
  static objectsCreated = 0;
}

const c1 = new DummyClass("a");
const c2 = new DummyClass("a");
const c3 = new DummyClass("a");
const c4 = new DummyClass("a");
const c5 = new DummyClass("a");

// console.log(`Objects Created: ${DummyClass.objectsCreated}`)

let array1 = [];
array1.push(23);
array1.push("Ahmed");
array1.push(Boolean("Ahmed"));

// console.log(array1);
