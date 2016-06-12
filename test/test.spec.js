// test-spec.js
describe('Protractor Demo App', function() {
    it('should have a title', function() {
        browser.get('http://google.com/');

        expect(browser.getTitle()).toEqual('Google');
    });
});