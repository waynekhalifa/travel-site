class Person {
  constructor(name, favColor){
    this.name = name;
    this.favColor = favColor;
  }
  greet() {
    console.log("My name is " + this.name + " and my favirate color is " + this.favColor + ".");
  }
}
export default Person;
