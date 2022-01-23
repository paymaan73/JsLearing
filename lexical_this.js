const person = {
  name: 'Alex',
  cars: ['ferrari', 'lambo'],
  toString: function() {
    // console.log(`${this.name} has ${this.cars}`);
    const that = this;
    this.cars.forEach(function(car, index){
      console.log(`${that.name} has ${car}`)
    })
  }
}

person.toString();
