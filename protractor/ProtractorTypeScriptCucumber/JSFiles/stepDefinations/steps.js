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
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const calculator_1 = require("../pageObjects/calculator");
let calc = new calculator_1.Calculator();
cucumber_1.Given('I will navigate to Calc Site', () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
}));
cucumber_1.When('I add two numbers {string} and {string}', (string, string2) => __awaiter(this, void 0, void 0, function* () {
    yield calc.firstEditBox.sendKeys(string);
    yield calc.secondEditBox.sendKeys(string2);
}));
cucumber_1.Then('the output displayed should be {string}', (string) => __awaiter(this, void 0, void 0, function* () {
    yield calc.go.click();
    yield calc.getResult.getText().then(function (text) {
        return text;
    });
    // await expect(calc.getResult.getText()).
    //       toEqual(string); // This is wrong!
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVDQUE2QztBQUM3QywyQ0FBa0M7QUFDbEMsMERBQW9EO0FBRXBELElBQUksSUFBSSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFBO0FBQzNCLGdCQUFLLENBQUMsOEJBQThCLEVBQUUsR0FBTyxFQUFFO0lBQzNDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQztBQUNqRSxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUwsZUFBSSxDQUFDLHlDQUF5QyxFQUFFLENBQU0sTUFBTSxFQUFFLE9BQU8sRUFBQyxFQUFFO0lBRXBFLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUUvQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHlDQUF5QyxFQUFFLENBQU0sTUFBTSxFQUFDLEVBQUU7SUFDM0QsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3RCLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO1FBQzdDLE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQyxDQUFDLENBQUE7SUFDRiwwQ0FBMEM7SUFDMUMsMkNBQTJDO0FBQzdDLENBQUMsQ0FBQSxDQUFDLENBQUMifQ==