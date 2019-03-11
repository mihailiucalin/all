"use strict";
exports.__esModule = true;
var syntax_1 = require("./syntax");
var syntax_2 = require("./syntax");
var cd = new syntax_1.classDemo(123);
console.log("here");
console.log(syntax_2.obiect.ssn);
cd.setUsername('troll');
function validate(value) {
    return value + 1;
}
var c = validate(2);
var obj = {
    color: "red",
    engine: 100
};
var obj_1 = {
    color: "red",
    objs: obj
};
function validate_car(car) {
    console.log(car.camera);
    console.log(car.engine);
    console.log(car.color);
}
var Bmw = {
    color: "red",
    engine: 100,
    camera: true
};
validate_car(Bmw);
