const arrayOne = ['Maria', 'Anna', 'Alex'];
const arrayTow = ['Said', 'Ismail', 'Aisha'];

const concatArray = [...arrayOne, ...arrayTow];

concatArray.forEach(function(n, index){
  console.log(n);
});


const name = 'Marian';
const nameToArray = [...name];
nameToArray.forEach(function(letter){
  console.log(letter);
})


const addNumbers = function(n1, n2, n3){
  return n1 + n2 + n3;
}

const numbers = [1, 5, 9];

//const addition =  addNumbers(numbers[0], numbers[1], numbers[2]);
const addition = addNumbers(...numbers);
console.log(addition);
