var arr = [1, 'B42WEENG', true, undefined, null];

// // simple iteration
for(var i=0;i<arr.length;i++) {
  console.log(arr[i]);
}

// // for of
for(var element of arr) {
  console.log(element);
}

// // for in ---> uses index for iterating
for(var i in arr) {
  console.log(arr[i]);
}

// For Each
arr.forEach((element) => {
  console.log(element);
});

// can a array contain object

const arr2 = [ 1, 5, 'Sam', { name: 'B42WEENG', noOfStu: 12 } ];

const projects = [ 
  { 
    name: 'Hybrid Renew Energy', 
    techs: ['solar', 'wind'], 
    paper: 'http://samomelink.com',
  },
  { 
    name: 'IO Robot', 
    techs: ['python', 'opencv'],
    paper: 'http://somelink.com',
  } 
];

console.log(arr2[3]);