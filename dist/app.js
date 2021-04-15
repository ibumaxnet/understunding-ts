"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var mergedObj = merge({ name: 'max' }, { age: 30, skills: ['director'] });
console.log(mergedObj.skills);
function countAndDescribe(element) {
    var descriptionText = '値がありません';
    if (element.length > 0) {
        descriptionText = "\u5024\u306F " + element.length + " \u3067\u3059";
    }
    return [element, descriptionText];
}
console.log(countAndDescribe('どうしてかした'));
function extractAndConvert(obj, key) {
    return 'value: ' + obj[key];
}
console.log(extractAndConvert({ "name": 'max' }, "name"));
var DataStorage = (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    DataStorage.prototype.getItems = function () {
        return __spreadArray([], this.data);
    };
    return DataStorage;
}());
var textStorage = new DataStorage();
textStorage.addItem('data1');
textStorage.addItem(2);
textStorage.removeItem('data1');
console.log(textStorage.getItems());
function createCouseGoal(title, description, date) {
    var courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
//# sourceMappingURL=app.js.map