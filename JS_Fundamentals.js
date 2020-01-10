// LET
// let name;
// name = 'John Doe';
// name = 'Steve Smith';
//Can be initalised w/o value
//can be reassigned 


// CONST
// const name = 'John';
// Can not reassign
// name = 'Sara';
// Have to assign a value
// const greeting;

const person = {
    name: 'John',
    age: 30
  }
  
  person.name = 'Sara';
  person.age = 32;
    
  const numbers = [1,2,3,4,5];
  //pushing number into an array
  numbers.push(6);
  
 // PRIMITIVE

// String
const name = 'John Doe';
// Number
const age = 45;
// Boolean
const hasKids = true;
// Null
const car = null;
// Undefined
let test;

// REFERENCE TYPES - Objects

// Array
const hobbies = ['movies', 'music'];

// Object literal
const address = {
  city: 'Boston',
  state: 'MA'
}

//Date method from JS 
const today = new Date();
let val;

//Converting Data Types 
// Number to string
val = String(555);
val = String(4+4);

// Bool to string
val = String(true);

// Date to string
val = String(new Date());

// Array to string
val = String([1,2,3,4]);

// toString()
val = (5).toString();
val = (true).toString();

// String to number
val = Number('hello');

//To integer number
val = parseInt('100.30');

//To decimal point 
val = parseFloat('100.30');


// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
//modules, returns the remainder of division 
val = num1 % num2;

// Math Object
//val is pi
val = Math.PI;
//rounding
val = Math.round(2.4);
//round up to int
val = Math.ceil(2.4);
//round down to int
val = Math.floor(2.8);
//square root
val = Math.sqrt(64);
//absolute value (positive)
val = Math.abs(-3);
//8 to the power of 2
val = Math.pow(8, 2);
//Returns the minimum value
val = Math.min(2,33,4,1,55,6,3,-2);
//Returnsthe max value
val = Math.max(2,33,4,1,55,6,3,-2);
//Random number
val = Math.random();
//Random whole number between 1 and 20 (useful)
val = Math.floor(Math.random() * 20 + 1);





const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello World, my name is Eoin';
const tags = 'web design,web development,programming';

let val;


// Old School Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping the quotes so you can use them inside the string 
val =  'That\'s awesome, I can\'t wait';

// Length of a string
val = firstName.length;

// Changing to uppercase or lowercase
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// indexOf()
//The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
val = firstName.indexOf('l');
//The indexOf() method returns the index at which a given element can be found in the array for the last time, or -1 if it is not present.
val = firstName.lastIndexOf('l');

// substring() between 0th and 4th postion in the original string
val = firstName.substring(0, 4);

// slice() the ends off the original string 
val = firstName.slice(0,4);
//same but offset the start of the slice by 3 places
val = firstName.slice(-3);

// split() The split() method is used to split a string into an array of substrings, and returns the new array.
val = str.split(' ');
val = tags.split(',');


const name = 'John';
const age = 31;
const job = 'Web Developer';
const city = 'Miami';
let html;

// Old School JS variables within HTML
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + ' </li><li>Job: '+ job+ ' </li><li>City: '+ city +' </li></ul>';

html = '<ul>' +
       '<li>Name: ' + name + '</li>' +
       '<li>Age: ' + age + '</li>' +
       '<li>Job: ' + job + '</li>' +
       '<li>City: ' + city + '</li>' +
       '</ul>';

function hello(){
  return 'hello';
}

// Modern JS variables within HTML: using template strings (es6)
// Back ticks not apostrophies or quotes ***Important (usesful)
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`;

// Create some arrays
const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];



// Get array length
val = numbers.length;
// Get single value at 3rd index position in the array
val = numbers[3];

// Insert 100 into array at second index
numbers[2] = 100;

// Find index of a value of 36
val = numbers.indexOf(36);

// MUTATING ARRAYS

// Add value into the end position of an array
numbers.push(250);

// Add on to front
 numbers.unshift(120);

// Take off from end(pop off the last value)
numbers.pop();

// Take off from front(shift it from the front)
numbers.shift();

// Splice values
numbers.splice(1,3);

// Reverse an Array 
numbers.reverse();

// Sorting arrays in alphabetical order
val = fruit.sort();

// Sorting arrays in numerical order
val = numbers.sort(function(x, y){
  return x - y;
});

// sort numerical order (descending)
val = numbers.sort(function(x, y){
 return y - x;
});

//Example Object w/ arrays, functions, other objects
const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 36,
    email: 'steve@aol.com',
    hobbies: ['music', 'sports'],
    address: {
      city: 'Miami',
      state: 'FL'
    },
    getBirthYear: function(){
      return 2017 - this.age;
    }
  }
//Time and date related functions 
  const today = new Date();
  let birthday = new Date('9-10-1981 11:25:00');
  birthday = new Date('September 10 1981');
  birthday = new Date('9/10/1981');
  
  val = today.getMonth();
  val = today.getDate();
  val = today.getDay();
  val = today.getFullYear();
  val = today.getHours();
  val = today.getMinutes();
  val = today.getSeconds();
  val = today.getMilliseconds();
  val = today.getTime();
  
  birthday.setMonth(2);
  birthday.setDate(12);
  birthday.setFullYear(1985);
  birthday.setHours(3);
  birthday.setMinutes(30);
  birthday.setSeconds(25);

  //Conditionals 

  // // EQUAL TO VALUE & TYPE, *triple equals not double
 if(id === 100){
   console.log('CORRECT');
} else {
   console.log('INCORRECT');
 }

// EQUAL TO VALUE & TYPE, is not equal to
 if(id !== 100){
  console.log('CORRECT');
 } else {
   console.log('INCORRECT');
}


// GREATER OR LESS THAN
if(id <= 100){
   console.log('CORRECT');
 } else {
   console.log('INCORRECT');
 }


// IF ELSE 
const color = 'yellow';

if(color === 'red'){
   console.log('Color is red');
 } else if(color === 'blue'){
   console.log('Color is blue');
 } else {
   console.log('Color is not red or blue');
 }

// LOGICAL OPERATORS

const name = 'Steve';
const age = 70;

// AND &&
if(age > 0 && age < 12){
  console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19){
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// OR ||
if(age < 16 || age > 65){
  console.log(`${name} can not run in race`);
} else {
  console.log(`${name} is registered for the race`);
}

// TERNARY OPERATOR
//(statement true ? then do this : if not, do this)(usefull*)
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');
const color = 'yellow';

//switch statements
let day;
switch(new Date().getDay()){
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
    break;
}

console.log(`Today is ${day}`);

//Looping 
// FOR LOOP

 for(let i = 0; i < 10; i++){
 if(i === 2){
   console.log('2 is my favorite number');
   continue;
 }

 if(i === 5){
  console.log('Stop the loop');
   break;  }

 console.log('Number '+ i);
 }

 // WHILE LOOP
 let i = 0;

while(i < 10){
 console.log('Number ' + i);
  i++;
}
