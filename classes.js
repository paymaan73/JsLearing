/*
 * ------------------------------------------
 * + Classes are bluprints
 *  Properties
 *  Behaviours
 * -------------------------------------------
 * OPP ?
 * -------------------------------------------
 * + We can model real world examples
 *  * Animal, Human, Ball, Shoe, Anything really
 */

class Animal {
  constructor(name, age){
    console.log(`${name} is an animal and was created`)
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }

  sleep(){
    console.log(`${this.name} is sleeping`);
  }

  wakeUp() {
    console.log(`${this.name} is waking up`);
  }

  logAge(){
    console.log(`${this.name} is ${this.age} year Old`);
  }
}

const bobby = new Animal("bobby", 2)
bobby.eat();
bobby.wakeUp();
bobby.logAge();

console.log('---------------------')

const marshall = new Animal("marshall", 3)
marshall.eat()
marshall.wakeUp()
marshall.logAge()
