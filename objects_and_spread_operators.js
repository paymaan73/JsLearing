
const address = {
  city: 'LA',
  country: 'USA',
  postCode: 'LA44'
};

const name = {
  firstName: 'Andy',
  lastName: 'Jones'
}



const person = {...address, ...name}
console.log(JSON.stringify(person, null, 2))
