function person(name, age) {
    this.name = name;
    this.age = age;
}

person.prototype.sayHello = function () {
    console.log("Hello, my name is " + this.name + " and age is " + this.age);
};

var person1 = new person("Rupam", 19);
person1.sayHello();
