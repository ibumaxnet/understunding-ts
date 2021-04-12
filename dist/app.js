"use strict";
var e1 = {
    name: "Alice",
    privileges: ['create-server'],
    startDate: new Date(),
    skill: ['jump'],
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString;
    }
    return a + b;
}
console.log(add(2, 5));
function printEmployeeInformation(emp) {
    console.log(emp.name);
    if ('privileges' in emp) {
        console.log("privileges: " + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log("startDate: " + emp.startDate);
    }
}
printEmployeeInformation(e1);
printEmployeeInformation({ name: 'usagi', startDate: new Date() });
var Car = (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("運転中...");
    };
    return Car;
}());
var Track = (function () {
    function Track() {
    }
    Track.prototype.drive = function () {
        console.log("トラックスを運転中...");
    };
    Track.prototype.loadCargo = function (amount) {
        console.log("\u8377\u7269\u3092 " + amount + " \u904B\u3093\u3067\u3044\u307E\u3059");
    };
    return Track;
}());
var v1 = new Car();
var v2 = new Track();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Track) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    var speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log(animal.type, speed);
}
moveAnimal({ type: 'horse', runningSpeed: 100 });
var userInputElement = document.getElementById('user-input');
if (userInputElement) {
    userInputElement.value = 'こんちちは';
}
var errorBag = {
    email: '正しいメールアドレスではありません',
    username: 'ユーザー名に記号を含めることはできません',
};
function addOver(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString;
    }
    return a + b;
}
var result = addOver('hello', ' typescript');
result.split(' ');
var fechedUserData = {
    id: 'u1',
    name: 'user1',
    job: {
        title: 'developer',
        description: 'TypeScript',
    }
};
console.log(fechedUserData === null || fechedUserData === void 0 ? void 0 : fechedUserData.job.title);
var userInput = null;
var soterdData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
console.log(soterdData);
//# sourceMappingURL=app.js.map