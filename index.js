// Data Types

// Primitive Types ( basioc types )

// string, number (1, 2, NaN), undefined, null, boolean

// typeof typeof true; 
// // Output: 


// Composite Types: ( collection of different data types )
// Array --> collection of elements in a ordered fashion ( indexes )
// Array can contain all the primitive datatypes
// var arr = [1, 'B42WEENG', true, undefined, null];

// // // simple iteration
// for(var i=0;i<arr.length;i++) {
//   console.log(arr[i]);
// }

// // // for of
// for(var element of arr) {
//   console.log(element);
// }

// // // for in ---> uses index for iterating
// for(var i in arr) {
//   console.log(arr[i]);
// }




// function simpleFunc (name) {
//   console.log('Hi', name);
// }

// arrow function
// var simpleFunc = (name) => {
//   console.log('Hi', name);
// }

// // simpleFunc('Sanjay');

// // // For Each
// arr.forEach((element) => {
//   console.log(element);
// });


// Object:
// key <-> value
// const objBio = {
//   name: 'Sanjay',
//   age: 40,
//   DOB: 'dd-mm-yyyy',
//   role: 'Engineer',
//   height: 188
// }

// can a array contain object

// const arr2 = [ 1, 5, 'Sam', { name: 'B42WEENG', noOfStu: 12 } ];

// const projects = [ 
//   { 
//     name: 'Hybrid Renew Energy', 
//     techs: ['solar', 'wind'], 
//     paper: 'http://samomelink.com',
//   },
//   { 
//     name: 'IO Robot', 
//     techs: ['python', 'opencv'],
//     paper: 'http://somelink.com',
//   } 
// ];

// console.log(arr2[3]);

var a = 2;

var b = 3;

// // Copy by value ( dealing with primitive datatypes ) --> does not change root values 
// function sampleFunc2 (x, y) {

//   x = 9;
//   y = 100;

//   console.log('x', x, 'y', y);
// };

// console.log('a', a, 'b', b);

// sampleFunc2(a, b);


// // copy by reference( Composite Data Types) Change the root value when changed
// const hobbies = ['Singing', 'Dancing', 'Movies'];

// function displayHobbies(hobbies) {
//   hobbies[2] = 'Basket Ball';
//   console.log('Inside Function', hobbies);
// }


// console.log('Before Function Call',hobbies);

// displayHobbies(hobbies);

// console.log('After Function Call', hobbies);

// Copy by reference (Object) --> change in local scope affect the global scope
const obj3 = {
  empName: 'Sanjay',
  DOB: 'dd-mm-yyyy',
  yearOfExperience: 3
};

function displayDetails(empObj) {
  empObj.yearOfExperience = 5;
  console.log('Inside Function', empObj);
}


console.log('Before Function Call',obj3);

displayDetails(obj3);

console.log('After Function Call', obj3);


