"use strict";
var Person = (function () {
    function Person(n, a) {
        this.name = n;
        this.age = a;
    }
    Person.prototype.greet = function (phrase) {
        var agePhrase;
        if (this.age) {
            agePhrase = " " + this.age + " yearsold";
        }
        else {
            agePhrase = ' としはないしょ';
        }
        if (this.name) {
            console.log(phrase, this.name, agePhrase);
        }
        else {
            console.log('Hi jane doe');
        }
    };
    return Person;
}());
var user1 = new Person('max', 33);
user1.greet('hey i am ');
console.log(user1);
var addFunction;
addFunction = function (a, b) {
    return a + b;
};
console.log(addFunction(12, 13));
//# sourceMappingURL=interface_lesson.js.map