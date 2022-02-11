const homePage = require('../pageobjects/home.page');

describe('My home Page', () => {
    it('should verify the items', async () => {
    	await homePage.open();

		await expect(homePage.listExamples).toBeElementsArrayOfSize(44);
        
    })
    
   
});