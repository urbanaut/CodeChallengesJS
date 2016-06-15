/*
 Start the WebDriver Server using the command: webdriver-manager start --standalone
 from within the project folder.
 
 Kick off test using the command: protractor conf.js
*/


describe('Verify Correct Web Page Load', function() {
    var validationText = 'Ski Utah';
    var url = 'https://www.skiutah.com'
    var pageTitle;

    describe('Navigate to Web Page', function() {
        it('Should load expected page successfully', function() {
            browser.driver.get(url);
            browser.ignoreSynchronization = true;
            browser.waitForAngular();
            
            var pageTitle = browser.getTitle();
            expect(pageTitle).toContain(validationText);
            console.log('Page validation text found.');
            //browser.pause();
        });
    });       
});
    