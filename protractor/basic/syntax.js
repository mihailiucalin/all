"use strict";
// const a = 4;
// let b:string= "hello";
// let c:number=4;
exports.__esModule = true;
// let list1 = [1,3,4];
// let list2:Array<number>=[1,2,3,4]
// let dynamic:any;
// dynamic = 3;
// dynamic ='haha';
// for (let i=0; i<5; i++)
// {
//     setTimeout(function(){console.log(i);}, 100 * i)
// }
var classDemo = /** @class */ (function () {
    function classDemo(ssn) {
        this.ssn = ssn;
    }
    classDemo.prototype.getUsername = function () {
        return this.username;
    };
    classDemo.prototype.setUsername = function (username) {
        this.username = username;
    };
    classDemo.prototype.getSSN = function () {
        return this.ssn;
    };
    return classDemo;
}());
exports.classDemo = classDemo;
exports.obiect = new classDemo(143);
// console.log(c.getSSN())
// let d = new classDemo(1254);
// console.log(d.getSSN())
