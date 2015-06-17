/**
 * Question: How can you implement namespaces in JS?
 */


/* Global Namespace for Application */
var APP = APP || {};

/* Sub-namespace */
APP.PERSON = {};

/* Define new class using function */
APP.PERSON.Person = function(name) {
  if ((this instanceof APP.PERSON.Person)) {
    this.name = name;
  } else {
    return new APP.PERSON.Person(name);
  }
  console.log(name, 'created');
};

/* Define class methods */
APP.PERSON.Person.prototype.sayHello = function() {
  console.log("Hello, I'm " + this.name);
};
APP.PERSON.Person.prototype.walk = function(num) {
  console.log("I'm walking " + num + ' steps');
};

/* Instantiate objects from class and use them */
var person1 = new APP.PERSON.Person('John');
var person2 = new APP.PERSON.Person('Anna');
person1.sayHello();
person2.sayHello();
person1.walk(4);
person2.walk(5);
