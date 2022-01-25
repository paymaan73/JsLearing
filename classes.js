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

  static iAmAstaticMethod(){
    console.log('I am a static method inside of an Animal class')
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

class Dog extends Animal {
  constructor(name, age,  breed) {
    super(name, age);
    this.breed = breed;
  }

  logBread(){
    console.log(`${this.name} is a ${this.breed}`);
  }

  logAgeFromDog(){
    super.logAge()
  }
}

const mike = new Dog("bobby", 2, 'Bolldog')
mike.logAgeFromDog()

console.log('---------------------')

const marshall = new Animal("marshall", 3)
marshall.eat()
marshall.wakeUp()
marshall.logAge()



// Static method in Animal
Animal.iAmAstaticMethod();
