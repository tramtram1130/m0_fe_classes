// Write a class called Vampire
// it should have a dynamic name property
// it should have a pet property, that is a bat, by default
// BUT it could be dynamic if info is passed in initially
// it should have a thirsty property, that is true by default
// it should have a drink method. When called, the thirsty
// property changes to false

class Vampire {
  constructor(name, pet) {
    this.name = name;
    this.pet = pet || 'bat';
    this.thirsty = true;
  }
  //method
  drink() {
    this.thirsty = false;
  }
}

var vampire1 = new Vampire("Edward", "cat");

console.log(vampire1);

vampire1.drink();

console.log(vampire1);

var vampire2 = new Vampire("Emmet")

console.log(vampire2);
