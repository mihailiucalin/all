"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var protractor_2 = require("protractor");
//import {describe,it, expect} from 'mocha'
// spec.js
describe('Protractor Demo App', function () {
    it('should add one and two', function () {
        protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
        protractor_2.element(protractor_2.by.model('first')).sendKeys(1);
        protractor_2.element(protractor_2.by.model('second')).sendKeys(2);
        protractor_2.element(protractor_2.by.id('gobutton')).click();
        expect(protractor_2.element(protractor_2.by.binding('latest')).getText()).
            toEqual('5'); // This is wrong!
    });
});
