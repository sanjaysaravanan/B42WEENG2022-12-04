// ways to access values of object
// using .
console.log('Age',objBio.age);
console.log('Age', objBio['age']);

// Iteration of Object
for(var key in objBio) {
  // console.log(key);
  console.log(objBio[key]); 
  // name ==> objBio['name']
  // age ==> objBio['age']
}

Object.keys(objBio); // take obj and return the keys as array

var objKeys = Object.keys(objBio);

console.log(objKeys); // ['name', 'age', ...];

for(var key of objKeys) {
  console.log(objBio[key]);
}

// Can we have array inside object --> YES
const obj2 = {
  name: 'Sanjay',
  hobbies: [
    'Singing',
    'Readding',
    'Sports'
  ],
  projects: [ 
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
  ]
};
console.log(obj2['hobbies']);


const B42WEENG = {
  "batchName": "B42WEENG",
  "strength": 13,
  "techStacks": [
    "HTML", "CSS", "JS", "React", "Mongo", "NodeJs", "Express"
  ],
  "students": [
    {
      "name": "Shreemoy",
      "phone": 1234234234
    },
    {
      "name": "Shreemoy",
      "phone": 1234234234
    },
    {
      "name": "Shreemoy",
      "phone": 1234234234
    },
    {
      "name": "Shreemoy",
      "phone": 1234234234
    },
    {
      "name": "Shreemoy",
      "phone": 1234234234
    }
  ]
};

// Iteration of JSON
// for in
for(var key in B42WEENG) {
  console.log(B42WEENG[key]);
}

