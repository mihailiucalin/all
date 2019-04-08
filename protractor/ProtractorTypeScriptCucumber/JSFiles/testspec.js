"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const calculator_1 = require("./pageObjects/calculator");
const angular_1 = require("./pageObjects/angular");
//import {describe,it, expect} from 'mocha'
// spec.js
describe('Protractor Demo App', function () {
    it('Basic protractor typescript test', () => __awaiter(this, void 0, void 0, function* () {
        let calc = new calculator_1.Calculator();
        yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
        yield calc.firstEditBox.sendKeys(1);
        yield calc.secondEditBox.sendKeys(2);
        yield calc.go.click();
        yield expect(calc.getResult.getText()).
            toEqual('3'); // This is wrong!
    }));
    it('Await concept', () => __awaiter(this, void 0, void 0, function* () {
        let angular = new angular_1.Angular();
        yield protractor_1.browser.get('https://angular.io/');
        yield angular.search.sendKeys('Hello');
        yield protractor_1.browser.sleep(15000);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0c3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQW1DO0FBR25DLHlEQUFzRDtBQUN0RCxtREFBNkM7QUFDN0MsMkNBQTJDO0FBRzNDLFVBQVU7QUFDVixRQUFRLENBQUMscUJBQXFCLEVBQUU7SUFDNUIsRUFBRSxDQUFDLGtDQUFrQyxFQUFFLEdBQVEsRUFBRTtRQUMvQyxJQUFJLElBQUksR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztRQUU1QixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7UUFDL0QsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXJDLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUV0QixNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGlCQUFpQjtJQUNyQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBQ0gsRUFBRSxDQUFDLGVBQWUsRUFBRSxHQUFPLEVBQUU7UUFDM0IsSUFBSSxPQUFPLEdBQUcsSUFBSSxpQkFBTyxFQUFFLENBQUM7UUFDNUIsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO1FBQ3hDLE1BQU0sT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkMsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM1QixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==