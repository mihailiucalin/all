// test suite
describe('Stuff', function(){
    //define functions
    // function Calc(a,b,c)
    // {
    //     element(by.model('first')).sendKeys(a);
    //     element(by.model('second')).sendKeys(b);
    //     console.log(c.concat(' with ').concat([a,b]))
    //     element.all(by.tagName('option')).each(function(item){
    //         item.getAttribute("value").then(function(value){
    //             if (value ==c)
    //             {
    //                 item.click()
    //             }
    //             })})
    //     element(by.id('gobutton')).click();
    // }
    
    
    //define your testcase
    it('Intra pe google si scrie ceva', function(){
    //     //open browser
    //     browser.waitForAngularEnabled(false);
    //     browser.get('https://www.google.ro/');
    //     element(by.css("input[title='Căutați']")).sendKeys('webdriver').then(function() {
    //         browser.sleep(9000)
    //     });

    });
    it('Element repeators', function(){
    //     browser.waitForAngularEnabled(true);
    //     browser.get('http://juliemr.github.io/protractor-demo/');
    //     Calc(2,3, 'MULTIPLICATION')
    //     Calc(7,9, "SUBTRACTION")
    //     Calc(10,12, "DIVISION")
    //     element.all(by.repeater('result in memory')).count().then(function(text){
    //         console.log(text)
    //     })
        
    //     element.all(by.repeater('result in memory')).each(function(item){
    //         item.element(by.css("td:nth-child(3)")).getText().then(function(text)
    //         {
    //             console.log(text)
    //         })
    //     })

    //     // //     toEqual(a); // This is wrong!


    })
    
it('Use arrow Keys, multiple windows ',function() {
    //moving the mouse into that textbox
    //sendkeys
    //keyboard arrow
    //Keyboard enter
    //browser.get("https://posse.com/");
    // element(by.model("userInputQuery")).sendKeys("river");
    // browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys("london")).perform();
    
    
    
    // browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
    // browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function()
    // {
    
    // browser.sleep(2000);
    
    // expect(element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).count()).toEqual(7);
    
    
    // element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).get(0).click();
    // element(by.css("a[ng-href*='London/River Island']")).click().then(function()
    // {
    // browser.sleep(2000);
    // browser.getTitle().then(function(title)
    // {
    //     console.log(title + " title of the page before switching")
    // })
    // browser.getAllWindowHandles().then(function(handles){
    //     browser.switchTo().window(handles[1]);
    //     browser.getTitle().then(function(title){
    //     console.log(title + " title of the page after switching");
    //     })
    //     browser.switchTo().window(handles[0]);
    //     browser.getTitle().then(function(title){
    //     console.log(title + " title of the page at 3rd time")
    //     })
    // })
    // })
    // })
    })
    it('Open NonAngular js website alerts ',function() {
        // browser.waitForAngularEnabled(false);
        // browser.get("http://qaclickacademy.com/practice.php")
        // element(by.id('name')).sendKeys('alin')
        // element(by.id('confirmbtn')).click()
        // browser.switchTo().alert().accept().then(function(){
        //     browser.sleep(10000)
        // })
        // browser.switchTo().alert().dismiss().then(function(){
        //     browser.sleep(10000)
        // })
    })
    it('Frames in Websites',function() {
        // browser.waitForAngularEnabled(false);
        // browser.driver.manage().window().maximize();
        // browser.get("http://qaclickacademy.com/practice.php");
        // browser.switchTo().frame("courses-iframe")
        // element(by.css("a[href*='sign_in]")).getText().then(function(text){
        //     console.log(text)
        // })
    })
    it('Handling WAITERS',function() {
        browser.waitForAngularEnabled(false);
        browser.get("http://itgeared.com/demo/1506-ajax-loading.html");
        element(by.css("a[href*='loadAjax']")).click()
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.invisibilityOf(element(by.id("loader"))),8000);
        element(by.id("results")).getText().then(function(text)
        {
            console.log(text)
        })
    })
})
//first parameter - test suite name
// second parameter - function (function will have all tests(it blocks))
// rahulonlinetutor@gmail.com


