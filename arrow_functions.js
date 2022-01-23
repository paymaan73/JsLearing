
const hello = () => {
  const es6 = 'ES6';
  return `Hello ${es6}`;
}

console.log(hello());


const powers =
      [1, 2, 3, 4, 5].map((n, index) => n * index );

console.log(powers);

const sum = (n1, n2) => n1 + n2;
console.log(sum(12, 12));

const milesToKm = miles => miles * 1.60934
console.log(milesToKm(12));
