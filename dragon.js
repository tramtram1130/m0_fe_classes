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
    this.meal = 0
  }
  eat() {
    this.meal = this.meal =+ 1
  }
}

var dragon1 = new Dragon("Fluffy", "Harry", "red");

dragon1.eat()
dragon1.eat()
dragon1.eat()
dragon1.eat()

 if (dragon1.meal <= 3) {
   dragon1.isHungry = true
 } else {
   dragon1.isHungry = false
 }

console.log(dragon1);
