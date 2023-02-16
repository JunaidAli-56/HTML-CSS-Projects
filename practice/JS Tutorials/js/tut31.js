console.log("This is tut 31.JS");

// ES6 Classes and Inheritance:

//Class is a template:
class Empolyee {
  constructor(givenName, givenExperience, givenDivision) {
    this.name = givenName;
    this.experience = givenExperience;
    this.division = givenDivision;
  }
  slogan() {
    return `I am ${this.name} and my experience is ${this.experience}`;
  }
  joiningYear() {
    return 2022 - this.experience;
  }
  static add(a, b) {
    return a + b;
  }
}
jarviz = new Empolyee("Junxid", 4, "Division");
console.log(jarviz);

console.log(jarviz.slogan());
console.log(jarviz.joiningYear());
console.log(Empolyee.add(25, 4));

//Inheritance: means with the help of one template make another template.
//Constructor: means it is a function and it is only run when we make an object:
// Super: means extend kardo programmer ko Empolyee sy jis sy yeh aa raha hai usky ky constructor ko run kardo.

class Programmer extends Empolyee {
  constructor(givenName, givenExperience, givenDivision, givenLanguage, givenGithub) {
    super(givenName, givenExperience, givenDivision)
    this.language = givenLanguage;
    this.github = givenGithub
  }
  favouriteLanguage() {
    if (this.language == "python") {
      return "python";
    }
    else {
      return "javaScript";
    }
  }
  anotherlanguage() {
    if (this.language != "PHP") {
      return "PHP";
    }
    else {
      return "Swift";
    }
  }
  static multiply(a, b) {
    return a * b;
  }
}

atom = new Programmer("Edith", 2, "High", "Swift", "edith345")
console.log(atom);
console.log(atom.favouriteLanguage());
console.log(atom.anotherlanguage());
console.log(Programmer.multiply(5, 8));