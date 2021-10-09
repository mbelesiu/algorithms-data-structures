class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name, bred) {
    super(name); // call the super class constructor and pass in the name parameter
    this.bred = bred
  }

  speak() {
    console.log(`${this.name} the ${this.bred} barks.`);
  }
}

let d = new Dog('Mitzie', 'German Shepard');
d.speak(); // Mitzie barks.