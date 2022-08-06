//  BIG CHALLENGE: Write a Hobbit class
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
