// Write a class called Unicorn
// it should have a dynamic name property
// it should have a color property, that is silver by default
// it should have a method called "say" that returns whatever
// string is passed in, with "*~*" at the beginning and end
// of the string

class Unicorn {
  constructor(name) {
    this.name = name;
    this.color = "silver";
  }

  saySomething(speak) {
    this.message = `"*~*${speak}*~*"`
  }
}

console.log(Unicorn);

var unicorn1 = new Unicorn('Dwight');

unicorn1.saySomething("I am a magical talking unicorn");

console.log(unicorn1);

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


//  Write a Dragon class
// it should have a dynamic name property (string)
//  it should have a dynamic rider property (string)
//  it should have a dynamic color property (string)
//  it should have a isHungry property that is true by default
//  it should have a eat method. If the dragon eats 4 times,
// it is no longer hungry
  // HINT: This requires you to use your knowledge from
  // the conditionals lesson

class Dragon {
  constructor(name, rider, color) {
    this.name = name
    this.rider = rider
    this.color = color
    this.isHungry = true
  }
  eat(food) {
    this.meal = food
  }
}

var dragon1 = new Dragon("Fluffy", "Harry", "red");

// input the number of meals in the eat parameter
dragon1.eat(4)

 if (dragon1.meal <= 3) {
   dragon1.isHungry = true
 } else {
   dragon1.isHungry = false
 }

console.log(dragon1);

//  BIG CHALLNEGE: Write a Hobbit class
//  it should have a dynamic name property (string)
//  it should have a dynamic disposition property (string)
//  it should have an age property that defaults to 0
//  it should have a celebrateBirthday method. When called, the age increases by 1
//  it should have an isAdult property (boolean) that is false by default. once a Hobbit is 33, it should be an adult
//  it should have an isOld property that defaults to false. once a Hobbit is 101, it is old.
//  it should have a hasRing property. If the Hobbit's name is "Frodo", true, if not, false.

class Hobbit {
  constructor(name, disposition) {
    this.name = name
    this.disposition = disposition
    this.age = 0
    this.isAdult = false
    this.isOld = false
    this.hasRing = false
  }
  //method
  celebrateBirthday() {
    this.age = this.age + 1

  }
}

// hobbit1

var hobbit1 = new Hobbit("Frodo", "good")

console.log(hobbit1);

for (var i = 0; i <= 34; i++) {
  hobbit1.celebrateBirthday()
}

if (hobbit1.age >= 33) {
  hobbit1.isAdult = true
} else if (hobbit1.age >= 101) {
  hobbit1.isOld = true
}

if(hobbit1.name === "Frodo") {
  hobbit1.hasRing = true
}

console.log(hobbit1);

// hobbit2

var hobbit2 = new Hobbit("Sam", "good")

console.log(hobbit2);

for (var i = 0; i <= 150; i++) {
  hobbit2.celebrateBirthday()
}

if (hobbit2.age >= 33) {
  hobbit2.isAdult = true
} if (hobbit2.age >= 101) {
  hobbit2.isOld = true
}

if(hobbit2.name === "Frodo") {
  hobbit2.hasRing = true
}

console.log(hobbit2);
