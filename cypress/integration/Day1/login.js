describe('OrangeHRM suite', () => {
    it('Login Test1', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
        cy.get("input[name='username']").type('Admin')
        cy.get("input[name='password']").type('admin123')
        cy.get("button[type='submit']").click()
    });

    it('facebook login', () => {
       
        cy.visit('https://www.facebook.com/')

        cy.get('#email').type('salunkhe19rohan@gmail.com')
        cy.get('#pass').type('Rohan@1234')
        cy.get('#loginbutton').click
    });

    it('using xpath test', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.xpath("//input[@name='username']").type('Admin')
        cy.xpath("//input[@name='password']").type('admin123')
        cy.xpath("//button[@type='submit']").click()
    });

    it.only('ebay xpath test', () => {

        cy.visit('https://www.ebay.com/')

        cy.xpath('//a[text()=Health & Beauty')
        
    });
});