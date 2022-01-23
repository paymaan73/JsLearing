const pricePropName = "PRICE"

const calculator = (name, price) => {
  return {
    name,
    add: function(n1, n2) {
      return n1 + n2;
    },
    [pricePropName.toLowerCase()] : price
  }
}

const calc = calculator('casio', 19.99)
console.log(calc.name)
console.log(calc.add(12, 12));
console.log(calc.price)
