function person(name, age) {
    this.name = name;
    this.age = age;
}

function employees(name , age , designation){
    person.call(this , name , age);
    this.designation = designation;
}

employees.prototype.sayDetails = function () {
    console.log("Hello, my name is " + this.name + " and age is " + this.age+" and i am the "+this.designation);
}

var e1 = new employees("Rupam", 19 , "CEO");

e1.sayDetails();
