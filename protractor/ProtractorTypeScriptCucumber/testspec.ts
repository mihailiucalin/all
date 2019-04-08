import {browser} from 'protractor';
import {element,by} from 'protractor';
import { Calculator } from './pageObjects/calculator';
import {Angular} from './pageObjects/angular'
//import {describe,it, expect} from 'mocha'


// spec.js
describe('Protractor Demo App', function() {
    it('Basic protractor typescript test', async() =>{
      let calc = new Calculator();

      await browser.get('http://juliemr.github.io/protractor-demo/');
      await calc.firstEditBox.sendKeys(1);
      await calc.secondEditBox.sendKeys(2);
  
      await calc.go.click();
  
      await expect(calc.getResult.getText()).
          toEqual('3'); // This is wrong!
    });
    it('Await concept', async()=>{
      let angular = new Angular();
      await browser.get('https://angular.io/')
      await angular.search.sendKeys('Hello');
      await browser.sleep(15000)
    });
  });