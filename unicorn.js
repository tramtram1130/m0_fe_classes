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
