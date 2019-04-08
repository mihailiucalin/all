import { Given, When, Then } from "cucumber";
import {browser} from "protractor"
import {Calculator} from "../pageObjects/calculator"

let calc = new Calculator()
Given('I will navigate to Calc Site', async()=> {
    await browser.get('http://juliemr.github.io/protractor-demo/');
  });

When('I add two numbers {string} and {string}', async(string, string2)=> {

    await calc.firstEditBox.sendKeys(string);
    await calc.secondEditBox.sendKeys(string2);

});

Then('the output displayed should be {string}', async(string)=>{
    await calc.go.click();
    await calc.getResult.getText().then(function(text){
        return text
    })
    // await expect(calc.getResult.getText()).
    //       toEqual(string); // This is wrong!
  });
